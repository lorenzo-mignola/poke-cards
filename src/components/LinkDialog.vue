<template>
  <div
    v-show="Boolean(pokemonStore.link)"
    class="absolute z-10 bg-black bg-opacity-50 top-0 left-0 w-full h-full grid place-content-center"
  >
    <div
      id="popup-modal"
      class="overflow-y-auto overflow-x-hidden justify-center items-center md:inset-0 h-modal sm:h-full"
    >
      <div class="relative px-4 w-full max-w-md h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600"
          >
            <h3
              class="text-xl font-semibold text-gray-900 lg:text-4xl dark:text-white mr-7"
            >
              Share your team
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              @click="closeModal"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-6 flex flex-col text-center">
            <p>{{ pokemonStore.link }}</p>
            <CopyLinkButton @alert="toggleAlert" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import usePokemonStore from "../store/pokemonStore";
import CopyLinkButton from "./CopyLinkButton.vue";

const emit = defineEmits(["show-alert"]);

const pokemonStore = usePokemonStore();
const closeModal = () => {
  pokemonStore.setLink(null);
};

const toggleAlert = () => {
  emit("show-alert");
};
</script>

<style lang="scss" scoped>
p {
  overflow-wrap: anywhere;
}
</style>
