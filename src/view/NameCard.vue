<template>
  <div class="flex items-center justify-center h-full">
    <div class="glass-card text-center lg:p-12 p-3">
      <h1 class="lg:text-6xl text-3xl font-medium pb-8">What's your name?</h1>
      <div>
        <input
          v-model="name"
          type="text"
          class="glass lg:p-4 p-2 lg:text-2xl text-xl text-center"
        />
      </div>
      <div class="flex justify-center pt-5">
        <button
          class="button-primary p-2 pl-4 pr-4 rounded-lg lg:text-2xl text-lg flex items-center shadow-lg hover:shadow-xl"
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
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Next from "../assets/Next.svg";
import useNameStore from "../store/nameStore";

const router = useRouter();
const nameStore = useNameStore();

onMounted(() => {
  document.body.style.backgroundImage = `linear-gradient(-225deg, #cbbacc 0%, #4084ac 100%)`;
});

const name = ref("");
const goNext = () => {
  nameStore.setName(name.value);
  router.push("/card");
};
</script>

<style lang="scss" scoped>
h1 {
  font-family: "Poppins", sans-serif;
}
</style>
