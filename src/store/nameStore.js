import { defineStore } from "pinia";

const useNameStore = defineStore("name", {
  state: () => ({
    name: "",
  }),
  actions: {
    setName(name) {
      this.name = name;
    },
  },
});

export default useNameStore;
