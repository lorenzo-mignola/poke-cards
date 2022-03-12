<template>
  <div class="rounded-full glass poke-card flex items-center">
    <img
      class="sprite rounded-full mr-6"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
    />
    <div>
      <span class="font-semibold text-lg mr-2">#151</span>
      <span class="text-2xl">MEW</span>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.sprite {
  width: 100px;
  height: 100px;
  background-color: #e5e9f0;
}

.poke-card {
  font-family: "Poppins", sans-serif;
}
</style>
