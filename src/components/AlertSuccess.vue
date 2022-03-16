<template>
  <div
    class="bg-green-100 border text-green-700 p-5 text-lg rounded absolute bottom-3 left-4 lg:left-1/4 right-4 lg:right-1/4 ml-auto mr-auto flex items-center justify-center"
    role="alert"
  >
    <strong class="font-bold mr-1">Gotta Catch 'Em All!</strong>
    <span class="block sm:inline">Link copied</span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
div {
  animation: hide 4s ease-in 0s forwards;
}
@keyframes hide {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  5% {
    transform: scale(1);
    opacity: 1;
  }
  95% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
</style>
