import { matches } from "../../../data";
import { getNonRelationalStatsPerClub } from "../utils";

const club = {
  abbr: "CRY",
  badge:
    "https://pbs.twimg.com/profile_images/936184543937286145/f0A7HSzI_400x400.jpg",
  name: "Crystal Palace",
  website: "www.cpfc.co.uk",
  stadium: "Selhurst Park"
};

test("should return correct stats for correct input", () => {
  expect(getNonRelationalStatsPerClub(club, matches)).toEqual({
    drawn: 0,
    lost: 0,
    played: 1,
    won: 1,
    goals: {
      against: 0,
      difference: 3,
      for: 3
    }
  });
});
