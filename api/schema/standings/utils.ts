export const getNonRelationalStatsPerClub = (club: any, matches: any[]) => {
  let won = 0;
  let played = 0;
  let lost = 0;
  let drawn = 0;
  let goalsFor = 0;
  let goalsAgainst = 0;

  matches.forEach(match => {
    if (match.status === "won" && match.winner.abbr === club.abbr) {
      won += 1;
    }

    if (match.status === "lost" && match.loser.abbr === club.abbr) {
      lost += 1;
    }

    const clubPlayedInMatch =
      match.homeTeam.abbr === club.abbr || match.awayTeam.abbr === club.abbr;

    if (match.status === "drawn") {
      if (clubPlayedInMatch) {
        drawn += 1;
      }
    }

    if (clubPlayedInMatch) {
      if (match.awayTeam.abbr === club.abbr) {
        goalsFor += match.score[1];
        goalsAgainst += match.score[0];
      }

      if (match.homeTeam.abbr === club.abbr) {
        goalsFor += match.score[0];
        goalsAgainst += match.score[1];
      }

      played += 1;
    }
  });

  return {
    played,
    won,
    lost,
    drawn,
    points: won * 3 + drawn,
    goals: {
      for: goalsFor,
      against: goalsAgainst,
      difference: goalsFor - goalsAgainst
    }
  };
};
