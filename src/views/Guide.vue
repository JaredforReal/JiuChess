<template>
    <div class="guide">
        <h1>Jiu-Chess Guide</h1>
        <p>This section will guide you through the rules and strategies of Jiu-Chess.</p>
        <div>
            <button @click="backToMenu" class="btn1"><span>回到主页</span></button>
            <button @click="startGame" class="btn2"><span>开始游戏</span></button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const backToMenu = () => {
    router.push('/');
}

const startGame = () => {
    router.push('/play');
}

</script>

<style scoped>
.btn1 {
    display: inline-block;
    border-radius: 4px;
    background-color: black;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 18px;
    padding: 10px;
    width: 170px;
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

.btn2 {
    display: inline-block;
    border-radius: 4px;
    background-color: black;
    border: none;
    color: #FFFFFF;
    text-align: center;
    font-size: 18px;
    padding: 10px;
    width: 170px;
    transition: all 0.5s;
    cursor: pointer;
    margin: 5px;
    position: relative;
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

.guide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: none;
}
</style>