<template>
    <div>
        <h2>About Jiu-Chess</h2>
        <p>Jiu-Chess is an ancient game with a rich history. Here you will find cultural insights and the background of this game.</p>
        <button @click="backToMenu">Back to Menu</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const backToMenu = () => {
    router.push('/');
};
</script>

<style scoped>
button {
    margin: 10px;
}
</style>