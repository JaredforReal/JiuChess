<template>
  <div class="home">
    <div class="buttons">
      <button @click="goToGuide" class="btn-with-bg btn-guide">
        <span class="tibetan-text">གཞུང་ཚིག</span> <!-- 示例藏文文本 -->
        <span class="chinese-text">规则介绍</span>
      </button>
      <button @click="goToPlay" class="btn-with-bg btn-play">
        <span class="tibetan-text">གཞུང་ཚིག</span> <!-- 示例藏文文本 -->
        <span class="chinese-text">面对面对战</span>
      </button>
      <button @click="goToAbout" class="btn-with-bg btn-about">
        <span class="tibetan-text">གཞུང་ཚིག</span> <!-- 示例藏文文本 -->
        <span class="chinese-text">文化介绍</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const goToGuide = () => {
  router.push('/guide');
};

const goToPlay = () => {
  router.push('/play');
};

const goToAbout = () => {
  router.push('/about');
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end; /* 将内容放到页面底部 */
  height: 100vh;
  background-image: url('..\assets\HOME-Before.png');
  background-size: cover; /* 确保图片铺满并保持比例 */
  background-position: center; /* 图片居中显示 */
  background-repeat: no-repeat; /* 防止图片重复 */
  padding-bottom: 120px; /* 增加底部内边距 */
}

/* 按钮容器 */
.buttons {
  display: flex;
  justify-content: space-between; /* 让按钮均匀分布 */
  gap: 100px; /* 按钮之间的间隔 */
}

/* 通用按钮样式 */
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
  color: white;
  margin: 10px;
  transition: all 0.3s ease;
   /* 设置深蓝色边框 */
   border: 5px solid #042433; /* 深蓝色边框，宽度为5px */
}

.tibetan-text {
  font-family: 'Tibetan', sans-serif; /* 替换为适合的藏文字体 */
  font-size: 28px;
  color: #fff;
  margin-bottom: 20px;
}

.chinese-text {
  background: linear-gradient(to bottom right, #e06b42, #8A200A); /* 渐变橙色 */
  padding: 10px 30px;
  font-size: 20px;
  color: white;
  position: relative;
  clip-path: polygon(10% 0%, 90% 0%, 100% 25%, 100% 75%, 90% 100%, 10% 100%, 0% 75%, 0% 25%); /* 内角形状 */
  border-radius: 5px; /* 圆角内边界 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center; /* 文本居中 */
}


/* 鼠标悬停时按钮放大效果 */
.btn-with-bg:hover {
  transform: scale(1.02); /* 放大1.1倍 */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* 增加阴影，使放大效果更明显 */
  background-color: #FFC000; /* 深蓝色背景 */
}


/*
//按钮间的动画效果
button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: padding-right 0.5s;
}

button:hover span {
  padding-right: 25px;
}

button span:after {

  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: opacity 0.5s, right 0.5s;
}

button:hover span:after {
  opacity: 1;
  right: 0;
}
*/
</style>
