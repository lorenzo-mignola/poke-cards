import { defineStore } from "pinia";

const useWallpaperStore = defineStore("wallpaper", {
  state: () => ({
    url: "",
  }),
  actions: {
    setWallpaper(url) {
      this.url = url;
    },
  },
});

export default useWallpaperStore;
