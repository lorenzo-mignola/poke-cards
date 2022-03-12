<template>
  <button
    class="p-3 shadow-lg hover:shadow-xl rounded-lg flex items-center mr-4 ml-4 border-gray-800 text-gray-800 border-2"
  >
    <Share class="mr-2" />Share
  </button>
</template>

<script setup>
import Share from "../assets/Share.svg";
</script>

<style lang="scss" scoped>
.add-button {
  :disabled {
    background: grey;
  }
}
</style>
