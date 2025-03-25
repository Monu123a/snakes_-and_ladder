//=> points to remember
//js class is a blueprint for creating objects,It defines properties (variables) and methods
class Snakes_Ladders{
    // A special method that runs automatically when creating a new object.
    // It will run when new Snakes_Ladders() is called
    constructor(){
        this.board_size=100;
        this.Snakes={99: 77, 95: 75, 93: 69, 67: 30, 63: 19, 59: 17, 16:7};
        this.Ladder={9: 27,18: 37,25: 54,28: 51,56: 64,68: 88,76: 99,79:100};

    }
    addPlayer(playerName) {
        if (this.players[playerName]) {
            return (`PLayer ${playerName} is already added`)
        }
        this.players[playerName] = 1;
        return (`Player ${playerName} is added successfully!`)

    }
}