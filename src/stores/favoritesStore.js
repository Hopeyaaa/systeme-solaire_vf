import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
  state: () => ({
    favorites: []
  }),
  getters: {
    count: (state) => state.favorites.length,
    isFavorite: (state) => (item) => state.favorites.includes(item)
  },
  actions: {
    addFavorite(item) {
      if (!this.favorites.includes(item)) {
        this.favorites.push(item);
      }
    },
    removeFavorite(item) {
      this.favorites = this.favorites.filter(fav => fav !== item);
    },
    toggleFavorite(item) {
      this.isFavorite(item)
        ? this.removeFavorite(item)
        : this.addFavorite(item);
    }
  }
});
