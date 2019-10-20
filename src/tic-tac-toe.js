class TicTacToe {
    constructor() {
        this.cube = [  ["_","_","_"],  ["_","_","_"],  ["_","_","_"]];
        this.symbol = 'x';
        this.winner = 'z';
    }

    getCurrentPlayerSymbol() {
        return this.symbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.cube[rowIndex][columnIndex]=="_" ) {
            this.cube[rowIndex][columnIndex] = this.symbol;
            let symbolCount = 1;
            if (this.winner == 'z') {
                for (let i = rowIndex + 1, k = 0; k < 2; i++, k++) {
                    if (i > 2) {
                        i = 0;
                    }
                    if (this.cube[i][columnIndex] == this.symbol) {
                        symbolCount++;
                    } else {
                        symbolCount = 1;
                        break;
                    }
                }
            }
            if (symbolCount == 3) {
                this.winner = this.symbol;
            }
            symbolCount = 1
            if (this.winner == 'z') {
                for (let j = columnIndex + 1, k = 0; k < 2; j++, k++) {
                    if (j > 2) {
                        j = 0;
                    }
                    if (this.cube[rowIndex][j] == this.symbol) {
                        symbolCount++;
                    } else {
                        symbolCount = 1;
                        break;
                    }
                }
            }
            if (symbolCount == 3) {
                this.winner = this.symbol;
            }
            symbolCount = 1
            if (this.winner == 'z') {
                if ((rowIndex == 0 && columnIndex == 2) || (rowIndex == 2 && columnIndex == 0) || (columnIndex == 1 && rowIndex == 1)) {
                    for (let i = rowIndex + 1, j = columnIndex - 1, k = 0; k < 2; i++, j--, k++) {
                        if (i > 2) {
                            i = 0;
                        }
                        if (j < 0) {
                            j = 2;
                        }
                        if (this.cube[i][j] == this.symbol) {
                            symbolCount++;
                        } else {
                            symbolCount = 1;
                            break;
                        }
                    }
                }
            }
            if (symbolCount == 3) {
                this.winner = this.symbol;
            }
            symbolCount = 1

            if (this.winner == 'z') {
                if ((rowIndex == 2 && columnIndex == 2) || (rowIndex == 0 && columnIndex == 0) || (columnIndex == 1 && rowIndex == 1)) {
                    for (let i = rowIndex + 1, j = columnIndex + 1, k = 0; k < 2; i++, j++, k++) {
                        if (i > 2) {
                            i = 0;
                        }
                        if (j > 2) {
                            j = 0;
                        }
                        if (this.cube[i][j] == this.symbol) {
                            symbolCount++;
                        } else {
                            symbolCount = 1;
                            break;
                        }
                    }
                }
            }
            if (symbolCount == 3) {
                this.winner = this.symbol;
            }

            if (this.symbol == 'x') {
                this.symbol = 'o'
            } else {
                this.symbol = 'x'
            }
        }
    }

    isFinished() {
        if(this.winner != 'z' || this.isDraw()){
            return true;
        }
        else return false;
    }

    getWinner() {
        if(this.winner!='z'){
            return this.winner;
        }
        return null;
    }

    noMoreTurns() {
        let zCount = 0;
        this.cube.forEach(function (oneRow) {
            oneRow.forEach(function (element) {
                if(element=="_"){
                    zCount = 1;
                }
            });
        });
        if (zCount == 0 ){
            return true;
        }
        else{
            return false;
        }
    }

    isDraw() {
        let zCount = 0;
        this.cube.forEach(function (oneRow) {
            oneRow.forEach(function (element) {
                if(element=="_"){
                    zCount = 1;
                }
            });
        });
        if (zCount > 0 || this.winner !="z"){
            return false;
        }
        else{
            return true;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        if(this.cube[rowIndex][colIndex]!='_'){
            return this.cube[rowIndex][colIndex];
        }
        else return null;
    }
}

module.exports = TicTacToe;
