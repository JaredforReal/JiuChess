<template>
    <body>
        <!-- <h2>安多藏棋—久棋</h2> -->
        <div class="parent">
            <Board />
        </div>
        <div class="buttons">
            <button @click="backToMenu" class="btn1"><span>回到主页</span></button>
            <button @click="resetGame" class="btn"><span>重新开始</span></button>
            <button @click="goToGuide" class="btn2"><span>规则介绍</span></button>
        </div>
    </body>
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
body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url('../assets/wallpaper2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
}

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

button{
    display: inline-block;
    border-radius: 4px;
    background-color: black;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 18px;
    padding: 10px;
    width: 150px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
    position: relative;
}

.btn1 span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
}

.btn1:hover span {
    padding-left: 25px;
}

.btn1 span:after {
    content: '←';
    position: absolute;
    opacity: 0;
    top: 0;
    left: -20px;
    transition: 0.5s;
}

.btn1:hover span:after {
    opacity: 1;
    left: 0;
}

.btn span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
}

.btn:hover span {
    padding-right: 25px;
}

.btn span:after {
    content: '↻';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
}

.btn:hover span:after {
    opacity: 1;
    right: 0;
}

.btn2 span {
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: 0.5s;
}

.btn2:hover span {
    padding-right: 25px;
}

.btn2 span:after {
    content: '→';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
}

.btn2:hover span:after {
    opacity: 1;
    right: 0;
}
</style>