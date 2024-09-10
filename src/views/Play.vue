<template>
    <div>
        <h2>Jie-Chess Game</h2>
        <board />
        <button @click="resetGame">Reset Game</button>
        <button @click="goToGuide">Go to Guide</button>
        <button @click="backToMenu">Back to Menu</button>
    </div>
</template>

<script setup>
import board from '../components/board.vue';
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
button {
    margin: 10px;
}
</style>