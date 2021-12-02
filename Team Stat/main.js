const team = {
  _players: [
    {
      firstName: "Pablo",
      lastName: "Sanchez",
      age: 11,
    },
  ],
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
  ],

  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age,
    };
    this.players.push(player);
  },

  addGame(opponentName, myPoints, opponentPoints) {
    let game = {
      opponent: opponentName,
      teamPoints: myPoints,
      opponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

team.addGame("1", 44, 33);
team.addGame("2", 55, 44);
team.addGame("3", 67, 88);

// console.log(team.players)
console.log(team.games);
