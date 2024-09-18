<template>
    <div class="guide">
        <h1>Jiu-Chess Guide</h1>
        <p>This section will guide you through the rules and strategies of Jiu-Chess.</p>
        <div class="button-container">
            <button @click="backToMenu" class="btn-with-bg">
                <span class="tibetan-text">གཞུང་ཚིག</span> <!-- 藏文文本 -->
                <span class="chinese-text">回到主页</span>
            </button>
            <button @click="startGame" class="btn-with-bg">
                <span class="tibetan-text">གཞུང་ཚིག</span> <!-- 藏文文本 -->
                <span class="chinese-text">开始游戏</span>
            </button>
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
/* 按钮的通用样式 */
.btn-with-bg {
    width: 200px;
    height: 150px;
    background-color: #00384d; /* 深蓝色背景 */
    border-radius: 20px; /* 圆角 */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    color: white;
    margin: 10px;
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* 放大动画的过渡效果 */
    border: 5px solid #002c41; /* 深蓝色边框，宽度为5px */
}

/* 鼠标悬停时放大按钮效果 */
.btn-with-bg:hover {
    transform: scale(1.1); /* 放大1.1倍 */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* 阴影增强 */
}

/* 按钮中的中文文本样式 */
.chinese-text {
    background: linear-gradient(to right, #e06b42, #b24312); /* 渐变橙色背景 */
    padding: 10px 30px;
    font-size: 20px;
    color: white;
    position: relative;
    clip-path: polygon(10% 0%, 90% 0%, 100% 25%, 100% 75%, 90% 100%, 10% 100%, 0% 75%, 0% 25%); /* 内角效果 */
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
}

/* 藏文文本样式 */
.tibetan-text {
    font-family: 'Tibetan', sans-serif; /* 如果有藏文字体，可以指定 */
    font-size: 24px;
    color: #fff; /* 白色字体 */
    margin-bottom: 10px;
}

/* 设置按钮的父容器为横向排列 */
.button-container {
    display: flex;
    justify-content: center; /* 水平居中 */
    gap: 20px; /* 按钮之间的间距 */
}

/* 设置页面背景图片 */
.guide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url('../assets/Play-BackGround.png');
    background-size: cover;
    background-repeat: no-repeat;
    overflow: hidden;
}
</style>
