import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent implements OnInit {

  currentPlayer: string = '';
  playerX: string = 'X'
  playerO: string = 'O'
  winner: string = ''
  board: string[][] = [['','',''], ['','',''], ['','','']]

  constructor() { }


  ngOnInit() {
      this.currentPlayer = this.playerX
  }

  restartGame(){
    this.currentPlayer = this.playerX;
    this.winner = '';
    this.board = [['','',''], ['','',''], ['','','']]
  }

  moves(row: any | number, col: any | number){
    if(!this.board[row][col] && this.winner === ''){
      this.board[row][col] = this.currentPlayer;
      if(this.checkIfHaveWinner(row, col)) {
        this.winner = this.currentPlayer
      } else {
        this.currentPlayer = this.currentPlayer === this.playerX ? this.playerO : this.playerX;
      }
    }
  }

  checkIfHaveWinner(r: any | number, c: any | number){
    const bothPlayers = [this.playerX, this.playerO];

    for(const players of bothPlayers){
      let win = true;

      for(let i = 0; i < 3; i++){
        if(this.board[r][i] !== players){
          win = false
          break
        }
      }
        if (win) return true;

        win = true;
        for (let i = 0; i < 3; i++){
          if(this.board[i][c] !== players){
            win = false;
            break
          }
        }
        if (win) return true;

        win = true;
        for(let i = 0; i < 3; i++){
        if(this.board[i][c] !== players){
          win = false
          break
        }
      }
      if (win) return true;

      win = true;
        for(let i = 0; i < 3; i++){
        if(this.board[i][2 - i] !== players){
          win = false
          break
        }
      }
      if (win) return true;
    }

    return false;
  }
}
