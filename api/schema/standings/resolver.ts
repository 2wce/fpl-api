import { ApolloError, ValidationError } from "apollo-server-express";
import { clubs, matches, standings } from "../../data";
import { Context } from "../../utils";
import { getNonRelationalStatsPerClub } from "./utils";

const standingResolvers = {
  Query: {
    // idea is to generate a log table on demand - possible optimisation might be to move this to a stored procedure?
    async standings(parent: any, args: any, context: Context, info: any) {
      // iterate through clubs
      const standings = clubs
        .map(club => {
          // find the matches the club has played in
          const clubMatches = matches.filter(
            match =>
              match.homeTeam.abbr === club.abbr ||
              match.awayTeam.abbr === club.abbr
          );

          // generate stats using helper function
          const stats = getNonRelationalStatsPerClub(club, clubMatches);

          // build log standing per club
          // @TODO: find way to generate positions
          return {
            club,
            ...stats
          };
        })
        .sort((a, b) => b.points - a.points); // order by points from most to least. @TODO: if points are equal then consider goal difference then alphabetical order?

      return standings;
    },
    async standing(parent: any, args: any, context: Context, info: any) {
      try {
        const { abbr } = args;
        const standing = standings.find(value => {
          return value.club.abbr === abbr;
        });

        return standing || new ValidationError("Standing not found");
      } catch (error) {
        throw new ApolloError(error);
      }
    }
  }
};

export default standingResolvers;
