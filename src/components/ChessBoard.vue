<template>
  <div class="chessboard">
    <div v-for="(row, rowIndex) in board" :key="rowIndex" class="row">
      <div v-for="(cell, colIndex) in row" :key="colIndex" class="intersection" @click="placePiece(rowIndex, colIndex)">
        <div v-if="cell" :class="['piece', cell === 'white' ? 'white-piece' : 'black-piece']">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const boardSize = 14;

const board = ref(Array.from({ length: boardSize }, () => Array(boardSize).fill(null)));

const curretPlayer = ref('white');

const whitePieceLeft = ref(98);
const blackPieceLeft = ref(98);

const initializeGame = () => {
  const center = Math.floor(boardSize / 2);
  board.value[center][center] = 'white';
  board.value[center - 1][center - 1] = 'black';
  whitePieceLeft.value--;
  blackPieceLeft.value--;
}

initializeGame();

const placePiece = (rowIndex, colIndex) => {
  if (board.value[rowIndex][colIndex] !== null) return;

  board.value[rowIndex][colIndex] = curretPlayer.value;

  if (curretPlayer.value === 'white') {
    whitePieceLeft.value--;
    curretPlayer.value = 'black';
  } else {
    blackPieceLeft.value--;
    curretPlayer.value = 'white';
  }
}

</script>

<style scoped>
.chessboard {
  display: grid;
  grid-template-rows: repeat(14, 1fr);
  grid-template-columns: repeat(14, 1fr);
  width: 560px;
  height: 560px;
  position: relative;
  border: 3px solid black;
  background-color: #f5deb3;
}

.row {
  display: grid;
  grid-template-columns: repeat(14, 1fr);
}

.intersection {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .cell {
  border: 1px solid black;
  width: 100%;
  height: 100%;
  position: relative;
} */

.piece {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
}

.white-piece {
  background-color: white;
  border: 2px solid black;
}

.black-piece {
  background-color: black;
  border: 2px solid white;
}

.chessboard::before,
.chessboard::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.chessboard::before {
  display: grid;
  grid-template-rows: repeat(13, 1fr);
  grid-template-columns: 100%;
}

.chessboard::after {
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  grid-template-rows: 100%;
}

.chessboard::before div,
.chessboard::after div {
  border: 1px solid black;
}
</style>