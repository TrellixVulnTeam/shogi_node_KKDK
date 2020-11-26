import {BasePieceClass} from './basePiece.model'

export class Hisya extends BasePieceClass {
  public printPiece () {
    return '飛'
  }

  public canMoveToWithoutObstical () { 
    return [
      [0, 1],[0, 2],[0, 3],[0, 4],[0, 5],[0, 6],[0, 7],[0, 8],
      [0, -1],[0, -2],[0, -3],[0, -4],[0, -5],[0, -6],[0, -7],[0, -8],
      [1, 0],[2, 0],[3, 0],[4, 0],[5, 0],[6, 0],[7, 0],[8, 0],
      [-1, 0],[-2, 0],[-3, 0],[-4, 0],[-5, 0],[-6, 0],[-7, 0],[-8, 0]
    ]
  }
}