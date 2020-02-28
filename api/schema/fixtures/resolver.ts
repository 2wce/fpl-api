import { ApolloError, ValidationError } from "apollo-server-express";
import { fixtures, results } from "../../data";
import { Context } from "../../utils";

const fixtureResolvers = {
  Query: {
    async results(parent: any, args: any, context: Context, info: any) {
      const { shortName } = args;

      // if filter is passed return club fixtures only
      if (shortName) {
        // search for matching fixtures
        const clubFixtures = results
          .filter(fixture => {
            // iterate through the fixture matchlist
            const matchList = fixture.matchList
              .map(match => {
                // per given match find the team with the matching abbr & return it
                const team = match.teams.find(
                  team => team.shortName === shortName
                );

                if (team) {
                  return team;
                }

                // else do nothing
                return;
              })
              .filter(list => list);

            // return valid matchlist
            if (matchList.length > 0) {
              return matchList;
            }
          })
          .flat()
          .filter(fixture => fixture);

        return clubFixtures;
      }

      return results;
    },
    async fixtures(parent: any, args: any, context: Context, info: any) {
      const { abbr } = args;

      // if filter is passed return club fixtures only
      if (abbr) {
        // search for matching fixtures
        const clubFixtures = fixtures
          .filter(fixture => {
            // iterate through the fixture matchlist
            const matchList = fixture.matchList
              .map(match => {
                // per given match find the team with the matching abbr & return it
                const team = match.teams.find(team => team.abbr === abbr);

                if (team) {
                  return team;
                }

                // else do nothing
                return;
              })
              .filter(list => list);

            // return valid matchlist
            if (matchList.length > 0) {
              return matchList;
            }
          })
          .flat()
          .filter(fixture => fixture);

        return clubFixtures;
      }

      return fixtures;
    },
    async fixture(parent: any, args: any, context: Context, info: any) {
      try {
        const { matchDate } = args;
        const fixture = fixtures.find(value => {
          return value.matchDate === matchDate;
        });

        return fixture || new ValidationError("Fixture not found");
      } catch (error) {
        throw new ApolloError(error);
      }
    }
  },
  Match: {
    async homeTeam({ teams }: any, args: any, context: Context, info: any) {
      try {
        const team = teams[0];
        return team;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
    async awayTeam({ teams }: any, args: any, context: Context, info: any) {
      try {
        const team = teams[1];
        return team;
      } catch (error) {
        throw new ApolloError(error);
      }
    }
  }
};

export default fixtureResolvers;
