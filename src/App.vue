<template>
  <div>Sexy's Home Page</div>
  <img alt="Vue logo" :src="logoImg" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue';
import logoImg from './assets/logo.png';

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    return {
      logoImg
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 0;
}
</style>