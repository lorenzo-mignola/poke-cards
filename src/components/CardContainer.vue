<template>
  <div class="glass-card card">
    <h1
      class="glass text-6xl bold capitalize shadow-none p-6 flex items-center w-full justify-center"
    >
      <PokeBall class="pokeball mr-3" />
      Lorenzo card
      <PokeBall class="pokeball ml-3" />
    </h1>
  </div>
</template>

<script setup>
import PokeBall from "../assets/Poké_Ball_icon.svg";
</script>

<style lang="scss" scoped>
.card {
  width: 80vw;
  height: 80vh;
}

h1 {
  font-family: "Poppins", sans-serif;
}

.pokeball {
  width: 2.5rem;
  height: 2.5rem;
}
</style>
