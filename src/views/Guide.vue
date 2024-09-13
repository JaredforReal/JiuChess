<template>
    <div>
        <h1>Jiu-Chess Guide</h1>
        <p>This section will guide you through the rules and strategies of Jiu-Chess.</p>
        <button @click="startGame">Start Game</button>
        <button @click="backToMenu">Back to Menu</button>
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
button {
    margin: 10px;
}
</style>