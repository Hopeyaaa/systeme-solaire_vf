import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia'; // ✅ importer Pinia
import favoritesStore from './stores/favoritesStore'; // ton store local s'il est exporté comme un plugin (à vérifier)

const app = createApp(App);

const pinia = createPinia(); // ✅ créer l'instance Pinia

app.use(router);
app.use(pinia); // ✅ utiliser Pinia

// ⚠️ Utilisation personnalisée du store (si `favoritesStore` n'est pas un plugin)
favoritesStore(); // on l'initialise ici si c'est une fonction de Pinia (useFavoritesStore)

app.mount('#app');
