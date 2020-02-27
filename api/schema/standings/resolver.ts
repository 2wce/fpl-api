import { ApolloError, ValidationError } from "apollo-server-express";
import { standings } from "../../data";
import { Context } from "../../utils";

const standingResolvers = {
  Query: {
    async standings(parent: any, args: any, context: Context, info: any) {
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
