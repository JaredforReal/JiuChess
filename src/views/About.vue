<template>
    <div class="about">
        <h2>安多藏棋—久棋 文化背景介绍</h2>
        <p>Jiu-Chess is an ancient game with a rich history. Here you will find cultural insights and the background of this game.</p>
        <button @click="backToMenu">回到主页</button>
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

.about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: none;
}
</style>