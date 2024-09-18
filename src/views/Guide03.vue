<template>
  <div class="Guide03">
    <!-- 标题部分 -->
    <div class="header">
      <h1 class="title">03——久棋的行棋策略</h1>
      <p class="description">
        久棋对弈分为布子、走子、飞子三个阶段，我们将详细介绍这些策略。
      </p>
    </div>

    <!-- 文本和图片部分 -->
    <div class="content">
      <div class="guide-text">
        <!-- 布子阶段 -->
        <h3>1. 布子阶段</h3>
        <p>
          对弈“久棋”，双方各执一色棋子，空秤开局;一方先行布子 (如果以黑白棋子对弈，以“白先黑后”的方式) 开始在棋盘上布子;<br />
          双方各执一色棋子，从棋盘中间对角线的两端布子。先行者决定选哪端落子，然后双方轮流布子，直至棋盘布满。
        </p>
        
        <!-- 走子阶段 -->
        <h3>2. 走子阶段</h3>
        <p>
          布子结束后，首先双方将本方在“久物”(棋盘中格对角线)上的棋子摘去，由后布子方先行开始走子，<br />
          (如果用黑白棋子对弈，以黑先白后的顺序)进入走子阶段，即移动棋子;每次只能移动一个棋子，交替走子。<br />
          走子过程中采用“成方”“跳吃”和“成阵型”的吃子法提取对方棋子。
        </p>
        <img src="..\assets\Jump-Eat.jpg" alt="跳吃示意图" class="strategy-image" />
        <p>黑棋从 (4, D) 移动到 (2, D)，从而跳吃白棋 (3, D)。</p>

        <!-- 飞子阶段 -->
        <h3>3. 飞子阶段</h3>
        <p>
          进入对弈后期，如果一方落后，棋子数等于或少于棋盘路数时(14x14棋盘，棋子等于或少于14枚)，少子方就进入飞子阶段。<br />
        此时少子方移动棋子不受中步一格的限值，棋子可以落至任意空棋位上，阻止对方“成方”、“成阵型”或者走成“飞子阵型”，则可反败为胜。
        </p>
        
        <!-- 吃棋子策略 -->
        <h3>吃棋子策略</h3>
        <p>
          吃棋子是久棋的重要策略之一，包括“棋门”、“褡裢”、以及“抢”和“煞”四种方式。
        </p>

        <!-- 棋门策略 -->
        <h4>（1）棋门</h4>
        <p>
          在棋盘上形成一个四个顶点的正方形，称为一个棋门。每形成一个棋门，可以吃掉对方任意一个棋子。若形成双棋门，可以吃掉对方两个棋子。
        </p>
        <img src="..\assets\Single-Door.png" alt="单棋门示意图" class="strategy-image" />
        <p>黑棋通过形成单棋门，吃掉对方的棋子。</p>

        <!-- 褡裢策略 -->
        <h4>（2）褡裢</h4>
        <p>
          如果两个棋门之间有一个空格，并且通过移动一颗棋子可以关闭两边的棋门，这种策略称为褡裢。
          单褡裢可以吃掉一个棋子<br />双褡裢可以吃掉两个棋子。
        </p>
        <img src="..\assets\Double-Pouch.png" alt="双褡裢示意图" class="strategy-image" />
        <p>平口褡裢                                斜口褡裢</p>
        <!-- 抢和煞策略 -->
        <h4>（3）抢和煞</h4>
        <p>
          “抢”是指当一条直线全是对方棋子时，可以吃掉两颗棋子；“煞”是在形成棋门的同时，吃掉对方多颗棋子。
        </p>
        <img src="..\assets\Qiang_Sha.png" alt="双褡裢示意图" class="strategy-image" />
        <p>抢                                煞</p>
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
  router.push({ name: 'Guide02' });
}

// 跳转到下一页 Guide04
const goToNextPage = () => {
  router.push({ name: 'Guide04' });
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
/* 页面样式 */
.Guide03 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('../assets/Play-BackGround.png');
  background-size: cover;
  background-repeat: no-repeat;
  overflow-y: scroll
}

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

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.strategy-image {
  width: 300px;
  height: auto;
  margin: 15px 0;
  border-radius: 10px;
}

.guide-text {
  font-size: medium;
  text-align: left;
  padding: 20px;
}

.guide-text h3, h4 {
  margin-top: 15px;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.btn-with-bg {
  width: 160px;
  height: 90px;
  background-color: #00384d;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  margin: 10px;
  transition: all 0.3s ease;
}

.tibetan-text {
  font-family: 'Tibetan', sans-serif;
  font-size: 20px;
  margin-bottom: 8px;
}

.chinese-text {
  background: linear-gradient(to right, #e06b42, #b24312);
  padding: 6px 25px;
  font-size: 16px;
  clip-path: polygon(10% 0%, 90% 0%, 100% 25%, 100% 75%, 90% 100%, 10% 100%, 0% 75%, 0% 25%);
  border-radius: 5px;
}

.btn-with-bg:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  background-color: #FFC000;
}
</style>
