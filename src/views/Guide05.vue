<template>
  <div class="Guide05">
    <!-- 标题部分 -->
    <div class="header">
      <h1 class="title">05——久棋终局的判定及吉祥阵型</h1>
      <p class="description">
        了解久棋的终局判定方法，以及一些特殊的藏族吉祥阵型。
      </p>
    </div>

    <!-- 内容部分 -->
    <div class="content">
      <div class="guide-text">
        <!-- 久棋终局判定 -->
        <h3>1. 久棋终局的判定</h3>
        <p>
          判定胜负的方式是，一方吃掉对方一定数量的棋子，并摆出固定的棋形。如果弱势方被吃到14颗棋子之前，对方未能形成固定阵型，且弱势方还有棋门，则判定弱势方获胜。
        </p>
        <p>
          竞技规则中，当一方棋子少于4枚时，判负。同时，在飞子阶段，强势一方跳吃时必须多吃以保护弱势方，延缓颓势甚至反败为胜。
        </p>

        <!-- 吉祥阵型 -->
        <h3>2. 吉祥阵型</h3>
        <p>藏族传统棋艺中的吉祥阵型是久棋的重要组成部分，以下是几种具有代表性的吉祥阵型：</p>

        <!-- 阵型示例 -->
        <h4>（1）金鱼阵型</h4>
        <p>
          金鱼象征着解脱与永生，阵型由两个褡裢交错相对构成，共14枚棋子组成。
        </p>
        <img src="..\assets\Goldfish-Formation.png" alt="金鱼阵型示意图" class="strategy-image" />
        
        <h4>（2）右旋海螺阵型</h4>
        <p>
          海螺象征佛陀的教义传播，阵型由16枚棋子组成。
        </p>
        <img src="..\assets\Conch-Formation.png" alt="右旋海螺阵型示意图" class="strategy-image" />

        <h4>（3）宝瓶阵型</h4>
        <p>
          宝瓶象征灵魂的永生和福智圆满，阵型由16枚棋子组成。
        </p>
        <img src="..\assets\Vase-Formation.png" alt="宝瓶阵型示意图" class="strategy-image" />

        <h4>（4）胜利幢阵型</h4>
        <p>
          胜利幢象征修成正果，阵型由15枚棋子组成。
        </p>
        <img src="..\assets\Victory-Stand-Formation.png" alt="胜利幢阵型示意图" class="strategy-image" />

        <h4>（5）妙莲阵型</h4>
        <p>
          妙莲象征着纯净和觉悟，阵型由17枚棋子组成。
        </p>
        <img src="..\assets\Lotus-Formation.png" alt="妙莲阵型示意图" class="strategy-image" />
      </div>
    </div>

    <!-- 实盘演示部分 -->
    <div class="content">
      <div class="guide-text">
        <!-- 实盘演示 -->
        <h3>3. 实盘演示</h3>
        <p>
          以下是完整的实盘演示，展示了跳吃、成方和双褡裢策略。
        </p>
        <ul>
          <li>黑棋第3手：G8-G6，跳吃g7并成方，吃掉e6。</li>
          <li>第15手：黑棋再成一个直褡裢，形成双褡裢局面。</li>
        </ul>
        <img src="..\assets\RealGame-Diagram.png" alt="实盘演示示意图" class="strategy-image" />
        <p>该局黑棋通过成方和褡裢策略占据优势。</p>

        <!-- 续盘演示 -->
        <h3>4. 续盘演示</h3>
        <p>
          续盘演示展示了从前盘不利局面到后期形成吉祥阵型的过程：
        </p>
        <ul>
          <li>第26手：K4-K6，跳吃白棋。</li>
          <li>第33手：bA-b9，继续通过移动棋子获得有利局面。</li>
          <li>第65手：白棋漏着，黑棋抓住机会成阵，最终在第73手形成胜利幢吉祥图。</li>
        </ul>
        <img src="..\assets\VictoryBanner-Diagram.png" alt="胜利幢阵型示意图" class="strategy-image" />
      </div>
    </div>

    <!-- 按钮部分 -->
    <div class="button-container">
      <button @click="goToUpPage" class="btn-with-bg">
        <span class="tibetan-text">གཞུང་ཚིག</span> <!-- 藏文文本 -->
        <span class="chinese-text">上一页</span>
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
.Guide05 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  background-image: url('../assets/Play-BackGround.png');
  background-size: cover;
  background-repeat: no-repeat;
  overflow-y: auto; /* 允许垂直滚动 */
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
  margin-top: 20px;
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
  background-color: skyblue;
}
</style>
