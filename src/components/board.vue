<template>
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
</template>

<script setup>
import { ref } from 'vue';

const size = 14;
const board = ref(Array.from({ length: size }, () => Array(size).fill(null)));

const gamePhase = ref('placing');

const currentPlayer = ref(1);

const whitePieceLeft = ref(98);
const blackPieceLeft = ref(98);

const totalMoves = ref(0);

const selectedPiece = ref(null);

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

    const isAdjacent =
        (Math.abs(row - selectedRow) === 1 && col === selectedCol)
        ||
        (Math.abs(col - selectedCol) === 1 && row === selectedRow);

    return isAdjacent && board.value[row][col] === null;
};

initializeGame();

const handleCellClick = (row, col) => {
    if (gamePhase.value === 'placing') {
        placePiece(row, col);
    } else {
        movePiece(row, col);
    }
};

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
            // alert('棋盘已满,进入走子阶段');
            enterMovingPhase();
        }
    }
};

const movePiece = (row, col) => {
    if (board.value[row][col] === currentPlayer.value) {
        selectedPiece.value = [row, col];
    } else if (canMoveTo(row, col)) {
        const [selectedRow, selectedCol] = selectedPiece.value;
        board.value[selectedRow][selectedCol] = null;
        board.value[row][col] = currentPlayer.value;
        selectedPiece.value = null;

        currentPlayer.value = currentPlayer.value === 1 ? 0 : 1;
    }
};
</script>

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
    display: contents;
}

.cell {
    width: 40px;
    height: 40px;
    border: 2px solid black;
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
</style>
