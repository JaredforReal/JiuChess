<template>
  <div class="chessboard">
    <div v-for="(row, rowIndex) in board" :key="rowIndex" class="row">
      <div v-for="(cell, colIndex) in row" :key="colIndex" class="cell" @click="placePiece(rowIndex, colIndex)">
        <div v-if="cell !== null" :class="{ 'black-piece': cell === 0, 'white-piece': cell === 1 }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const size = 6;

const board = ref(Array.from({ length: size }, () => Array(size).fill(null)));

const currentPlayer = ref(1);

const whitePieceLeft = ref(18);
const blackPieceLeft = ref(18);

const totalMoves = ref(0);

const initializeGame = () => {
  const center = Math.floor(size / 2);
  board.value[center][center] = 1;
  board.value[center - 1][center - 1] = 0;
  whitePieceLeft.value--;
  blackPieceLeft.value--;
  totalMoves.value += 2;
};

initializeGame();

const placePiece = (row, col) => {
  if (board.value[row][col] === null) {
    // 落子
    board.value[row][col] = currentPlayer.value;

    if (currentPlayer.value === 1) {
      whitePieceLeft.value--;
      totalMoves.value++;
      currentPlayer.value = 0;
    } else {
      blackPieceLeft.value--;
      totalMoves.value++;
      currentPlayer.value = 1;
    }

    // 检查是否已经填满所有点
    if (totalMoves.value === size * size) {
      alert('棋盘已满, 进入走子阶段！');
      

    }
  }
};
</script>

<style scoped>
.chessboard {
  text-align: center;
  width: 240px;
  display: grid;
  grid-template-columns: repeat(6, 40px);
  grid-template-rows: repeat(6, 40px);
  gap: 0;
  background-color: #deb887;
  border: 2px solid black;
}

.row {
  /* text-align: center; */
  display: contents;
}

.cell {
  width: 40px;
  height: 40px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.black-piece,
.white-piece {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.black-piece {
  background-color: black;
}

.white-piece {
  background-color: white;
}
</style>
