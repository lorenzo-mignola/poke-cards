<template>
  <div class="rounded-full glass poke-card flex items-center">
    <div class="sprite rounded-full mr-6">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
      />
    </div>
    <div class="flex items-center">
      <span class="font-semibold text-xl mr-1">#</span>
      <input
        type="number"
        class="rounded-full text-xl p-3 border-blue-500 mr-4 bg-white bg-opacity-60 text-center font-semibold"
      />
      <span class="text-3xl uppercase">mew</span>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.sprite {
  width: 100px;
  height: 100px;
  background-color: #eeeeee;
}

.poke-card {
  font-family: "Poppins", sans-serif;
  input {
    max-width: 100px;
  }
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
