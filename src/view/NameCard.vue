<template>
  <div class="flex items-center justify-center h-full">
    <div class="glass-card text-center md:p-12 p-3">
      <h1 class="md:text-6xl text-3xl font-bold pb-8">What's your name?</h1>
      <div>
        <input
          v-model="name"
          type="text"
          class="glass md:p-4 p-2 md:text-2xl text-xl text-center"
        />
      </div>
      <div class="flex justify-center pt-5">
        <button
          class="button-primary p-2 pl-4 pr-4 rounded-lg md:text-2xl text-lg flex items-center shadow-lg hover:shadow-xl"
          :disabled="name.length === 0"
          @click="goNext"
        >
          Go
          <Next class="ml-2"></Next>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Next from "../assets/Next.svg";
import useNameStore from "../store/nameStore";

const router = useRouter();
const nameStore = useNameStore();

const name = ref("");
const goNext = () => {
  router.push("/card");
  nameStore.setName(name.value);
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Poppins", sans-serif;
}
</style>
