<template>
  <div class="Board">
    <div class="chessboard">
      <div v-for="(row, rowIndex) in board" :key="rowIndex" class="row">
        <div v-for="(cell, colIndex) in row" :key="colIndex" class="cell"
          :class="{ 'highlight': canMoveTo(rowIndex, colIndex) }" @click="handleCellClick(rowIndex, colIndex)">
          <div v-if="cell !== null" :class="['piece',
            cell === 0 ? 'black-piece' : 'white-piece',
            isSelected(rowIndex, colIndex) ? 'selected-piece' : '']">
          </div>
        </div>
      </div>
    </div>

    <div class="game-info">
      <div v-if="gamePhase === 'placing'">
        <h3>Game Phase: {{ gamePhase }}</h3>
        <p>Player {{ currentPlayer === 1 ? 'White' : 'Black' }}'s turn</p>
        <p>Place your piece</p>
        <p>White pieces left: {{ whitePieceLeft }}</p>
        <p>Black pieces left: {{ blackPieceLeft }}</p>
      </div>

      <div v-else-if="gamePhase === 'moving'">
        <h3>Game Phase: {{ gamePhase }}</h3>
        <p>Player {{ currentPlayer === 1 ? 'White' : 'Black' }}'s turn</p>
        <p>Move your piece</p>
      </div>

      <div v-else-if="gamePhase === 'removing'">
        <h3>Game Phase: {{ gamePhase }}</h3>
        <p>Player {{ currentPlayer === 1 ? 'White' : 'Black' }}'s turn</p>
        <p>Remove {{ piecessToRemove }} pieces</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chessboard {
  text-align: center;
  width: 560px;
  display: grid;
  grid-template-columns: repeat(14, 40px);
  grid-template-rows: repeat(14, 40px);
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

.cell.highlight {
  background-color: lightgreen;
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

.selected-piece {
  border: 2px solid red;
}

.game-info {
  text-align: center;
  margin-top: 10px;
  border: 1px solid black;
}
</style>

<script setup>
import { ref } from 'vue';

const size = 14;
const board = ref(Array.from({ length: size }, () => Array(size).fill(null)));

const gamePhase = ref('placing');
const isInMultiJump = ref(false);

const currentPlayer = ref(1);

const whitePieceLeft = ref(98);
const blackPieceLeft = ref(98);

const totalMoves = ref(0);

const selectedPiece = ref(null);

const piecessToRemove = ref(0);

const initializeGame = () => {
  const center = Math.floor(size / 2);
  board.value[center][center] = 1;
  board.value[center - 1][center - 1] = 0;
  whitePieceLeft.value--;
  blackPieceLeft.value--;
  totalMoves.value += 2;
};

const enterMovingPhase = () => {
  currentPlayer.value = 0;
  const center = Math.floor(size / 2);
  board.value[center][center] = null;
  board.value[center - 1][center - 1] = null;
  gamePhase.value = 'moving';
};

const isSelected = (row, col) => {
  return selectedPiece.value && selectedPiece.value[0] === row && selectedPiece.value[1] === col;
};

const canMoveTo = (row, col) => {
  if (gamePhase.value !== 'moving' || !selectedPiece.value) {
    return false;
  }

  const [selectedRow, selectedCol] = selectedPiece.value;
  const opponent = currentPlayer.value === 1 ? 0 : 1;

  const isAdjacent =
    (col === selectedCol && Math.abs(row - selectedRow) === 1)
    ||
    (row === selectedRow && Math.abs(col - selectedCol) === 1);

  const isJump =
    (row === selectedRow && Math.abs(col - selectedCol) === 2 && board.value[selectedRow][(col + selectedCol) / 2] === opponent)
    ||
    (col === selectedCol && Math.abs(row - selectedRow) === 2 && board.value[(row + selectedRow) / 2][selectedCol] === opponent);

  if (isInMultiJump.value) {
    return isJump && board.value[row][col] === null;
  }

  return (isAdjacent || isJump) && board.value[row][col] === null;
};

const handleCellClick = (row, col) => {
  if (gamePhase.value === 'placing') {
    placePiece(row, col);
  } else if (gamePhase.value === 'moving') {
    movePiece(row, col);
  } else {
    removePiece(row, col);
  }
};

const placePiece = (row, col) => {
  if (board.value[row][col] === null) {
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
      // alert('棋盘已满, 进入走子阶段！');
      enterMovingPhase();
    }
  }
};

const movePiece = (row, col) => {
  if (board.value[row][col] === currentPlayer.value && !isInMultiJump.value) {
    selectedPiece.value = [row, col];
  }
  else if (canMoveTo(row, col)) {
    const [selectedRow, selectedCol] = selectedPiece.value;

    const isJumpMove = Math.abs(row - selectedRow) === 2 || Math.abs(col - selectedCol) === 2;

    if (isJumpMove) {
      const jumpedRow = (row + selectedRow) / 2;
      const jumpedCol = (col + selectedCol) / 2;
      board.value[jumpedRow][jumpedCol] = null;
    }

    board.value[selectedRow][selectedCol] = null;
    board.value[row][col] = currentPlayer.value;

    if (isJumpMove && canJumpAgain(row, col)) {
      selectedPiece.value = [row, col];
      isInMultiJump.value = true;
    } else {
      selectedPiece.value = null;
      isInMultiJump.value = false;
    }

    handleSpecialForm(row, col, currentPlayer.value);

    if (gamePhase.value === 'moving') {
      currentPlayer.value = currentPlayer.value === 1 ? 0 : 1;
    }

  } else if (isInMultiJump.value && selectedPiece.value[0] === row && selectedPiece.value[1] === col) {
    isInMultiJump.value = false;
    selectedPiece.value = null;

    handleSpecialForm(row, col, currentPlayer.value);

    if (gamePhase.value === 'moving') {
      currentPlayer.value = currentPlayer.value === 1 ? 0 : 1;
    }
  }
};

const removePiece = (row, col) => {
  if (board.value[row][col] === (currentPlayer.value === 1 ? 0 : 1)) {
    board.value[row][col] = null;
    piecessToRemove.value--;

    if (piecessToRemove.value === 0) {
      currentPlayer.value = currentPlayer.value === 1 ? 0 : 1;
      gamePhase.value = 'moving';
    }
  }
};

const canJumpAgain = (row, col) => {
  const opponent = currentPlayer.value === 1 ? 0 : 1;

  return (
    (row > 1 && board.value[row - 1][col] === opponent && board.value[row - 2][col] === null)
    ||
    (row < size - 2 && board.value[row + 1][col] === opponent && board.value[row + 2][col] === null)
    ||
    (col > 1 && board.value[row][col - 1] === opponent && board.value[row][col - 2] === null)
    ||
    (col < size - 2 && board.value[row][col + 1] === opponent && board.value[row][col + 2] === null)
  );
};

const handleSpecialForm = (row, col, player) => {
  const count = checkFourInSquare(row, col, player);

  if (count > 0) {
    gamePhase.value = 'removing';
    piecessToRemove.value = count;
  }
};

const checkFourInSquare = (row, col, player) => {
  let count = 0;

  if (row <= size - 2 && col <= size - 2) {
    if (
      board.value[row][col] === player &&
      board.value[row][col + 1] === player &&
      board.value[row + 1][col] === player &&
      board.value[row + 1][col + 1] === player
    ) {
      count++;
    }
  }

  if (row >= 1 && col >= 1) {
    if (
      board.value[row][col] === player &&
      board.value[row][col - 1] === player &&
      board.value[row - 1][col] === player &&
      board.value[row - 1][col - 1] === player
    ) {
      count++;
    }
  }

  if (row >= 1 && col <= size - 2) {
    if (
      board.value[row][col] === player &&
      board.value[row][col + 1] === player &&
      board.value[row - 1][col] === player &&
      board.value[row - 1][col + 1] === player
    ) {
      count++;
    }
  }

  if (row <= size - 2 && col >= 1) {
    if (
      board.value[row][col] === player &&
      board.value[row][col - 1] === player &&
      board.value[row + 1][col] === player &&
      board.value[row + 1][col - 1] === player
    ) {
      count++;
    }
  }

  return count;
};

initializeGame();

</script>
