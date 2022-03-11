<script setup>
import CardContainer from "./components/CardContainer.vue";
</script>

<template>
  <div class="card-container">
    <CardContainer />
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}
</style>

<style>
#app {
  height: 100vh;
  width: 100vw;
}
</style>
