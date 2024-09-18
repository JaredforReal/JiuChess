<template>
  <div class="Guide02">
    <!-- 标题部分 -->
    <div class="header">
      <h1 class="title">02——久棋的开局意识</h1>
      <p class="description">
        开局后：<br />
        从棋盘中央棋格对角线对角线两端开始布子，双方轮流走子，直至布满整个棋盘。
      </p>
    </div>

    <!-- 图片和内容部分 -->
    <div class="content">
      <!-- 棋盘图片 -->
      <div class="chess-image">
        <img src="..\assets\ChessBoard-Start.png" alt="Chess Board" />
      </div>

      <!-- 文本介绍部分 -->
      <div class="guide-text">
        <p>
          <br />
          布局时围绕着中间棋子，要尽量让己方棋子合拢以便形成“方”，并尽量阻止对方“成方”。
          <br />黑白双方按各自的思路在棋盘上布满棋子，落子无悔。
          久棋从开局布局阶段到对局走子阶段，对棋阵模式有较高的依赖性。
          <br />根据久棋规则，形成“方”具有很高的战略价值，一方面能够成为摧垮对方的一枚棋子；另一方面，形成有效的防守阵型。
        </p>
      </div>
    </div>

    <!-- 按钮部分 -->
    <div class="button-container">
      <button @click="goToUpPage" class="btn-with-bg">
        <span class="tibetan-text">གཞུང་ཚིག</span> <!-- 藏文文本 -->
        <span class="chinese-text">上一页</span>
      </button>
      <button @click="goToNextPage" class="btn-with-bg">
        <span class="tibetan-text">གཞུང་ཚིག</span> <!-- 藏文文本 -->
        <span class="chinese-text">下一页</span>
      </button>
      <button @click="goToGuide" class="btn-with-bg">
        <span class="tibetan-text">གཞུང་ཚིག</span> <!-- 藏文文本 -->
        <span class="chinese-text">返回</span>
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

const goToUpPage = () => {
  router.push({ name: 'Guide01' });
}

// 跳转到下一页 Guide03
const goToNextPage = () => {
  router.push({ name: 'Guide03' });
}

// 返回 Guide 页面
const goToGuide = () => {
  router.push({ path: '/guide' });
}

// 跳转到开始游戏 Play 页面
const startGame = () => {
  router.push({ path: '/play' });
}
</script>
<style scoped>
/* 整体页面背景及布局样式 */
.Guide02 {
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

/* 标题部分样式 */
.header {
  background-color: #e06b42;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  color: #fff;
}

.title {
  font-size: 28px;
  font-weight: bold;
}

.description {
  margin-top: 10px;
  font-size: 18px;
  background: #ffefd5;
  padding: 5px 15px;
  border-radius: 10px;
  display: inline-block;
  color: #b24312;
}

/* 棋盘和文本容器样式 */
.content {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

/* 棋盘图片样式 */
.chess-image img {
  width: 300px;
  height: auto;
  border-radius: 10px;
  border: 2px solid #fff;
}

/* 文本部分样式 */
.guide-text {
  font-size: medium;
  text-align: center;
  flex: 1;
  padding-left: 20px;
}

.guide-text p {
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.6;
}

/* 通用按钮样式 */
.btn-with-bg {
  width: 160px;
  height: 90px;
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
  transition: all 0.3s ease;
  border: 5px solid #002c41; /* 深蓝色边框，宽度为5px */
}

/* 藏文文本样式 */
.tibetan-text {
  font-family: 'Tibetan', sans-serif; /* 你需要引入合适的藏文字体 */
  font-size: 20px;
  color: white;
  margin-bottom: 8px;
}

/* 中文文本样式 */
.chinese-text {
  background: linear-gradient(to right, #e06b42, #b24312); /* 渐变橙色 */
  padding: 6px 25px;
  font-size: 16px;
  color: white;
  position: relative;
  clip-path: polygon(10% 0%, 90% 0%, 100% 25%, 100% 75%, 90% 100%, 10% 100%, 0% 75%, 0% 25%); /* 内角形状 */
  border-radius: 5px; /* 圆角内边界 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center; /* 文本居中 */
}

/* 鼠标悬停时按钮放大效果 */
.btn-with-bg:hover {
  transform: scale(1.1); /* 放大1.1倍 */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* 增加阴影，使放大效果更明显 */
  background-color: #FFC000; /* 深蓝色背景 */
}

/* 设置按钮的父容器为横向排列 */
.button-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  gap: 20px; /* 按钮之间的间距 */
}
</style>
