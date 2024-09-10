<template>
  <div class="home">
    <h1>Welcome to Jiu Chess!</h1>
    <div class="buttons">
      <button @click="goToGuide">Guide</button>
      <button @click="goToPlay">Play</button>
      <button @click="goToAbout">About</button>
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
.home{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.buttons button{
  margin: 10px;
}

</style>