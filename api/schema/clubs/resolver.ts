import { ApolloError, ValidationError } from "apollo-server-express";
import { clubs } from "../../data";
import { Context } from "../../utils";

const clubResolvers = {
  Query: {
    async clubs(parent: any, args: any, context: Context, info: any) {
      return clubs;
    },
    async club(_: null, args: any, { firestore }: Context) {
      try {
        const { abbr } = args;
        const club = clubs.find(value => {
          return value.abbr === abbr;
        });

        return club || new ValidationError("Club not found");
      } catch (error) {
        throw new ApolloError(error);
      }
    }
  }
};

export default clubResolvers;
