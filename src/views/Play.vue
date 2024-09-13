<template>
    <h2>Jie-Chess Game</h2>
    <div class="parent">
        <Board />
    </div>
    <div class="buttons">
        <button @click="resetGame">Reset Game</button>
        <button @click="goToGuide">Go to Guide</button>
        <button @click="backToMenu">Back to Menu</button>
    </div>
</template>

<script setup>
import Board from '../components/board.vue';
import { useRouter } from 'vue-router';

const resetGame = () => {
    window.location.reload();
}

const router = useRouter();

const backToMenu = () => {
    router.push('/');
};

const goToGuide = () => {
    router.push('/guide');
};
</script>

<style scoped>
h2 {
    text-align: center;
}

.parent {
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 100vh; */
}

.buttons {
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    margin: 10px;
}
</style>