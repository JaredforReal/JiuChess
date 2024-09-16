<template>
  <div class="home">
    <div class="buttons">
      <button @click="goToGuide"><span>久棋规则介绍</span></button>
      <button @click="goToPlay"><span>面对面对战</span></button>
      <button @click="goToAbout"><span>久棋文化介绍</span></button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
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
  justify-content: center;
  height: 100vh;
  background-image: url('..\assets\HOME-Before.png');
  background-size: cover; /* 确保图片铺满并保持比例 */
  background-position: center; /* 图片居中显示 */
  background-repeat: no-repeat; /* 防止图片重复 */
}


button {
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
  content: '→';
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
</style>
