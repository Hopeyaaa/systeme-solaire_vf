import { createStore } from 'vuex';

export default createStore({
  state: {
    favorites: []
  },
  mutations: {
    toggleFavorite(state, body) {
      const index = state.favorites.findIndex(fav => fav.id === body.id);
      if (index === -1) {
        state.favorites.push(body);
      } else {
        state.favorites.splice(index, 1);
      }
    }
  },
  getters: {
    isFavorite: (state) => (id) => {
      return state.favorites.some(fav => fav.id === id);
    }
  }
});