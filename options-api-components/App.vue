<template>
  <div>
    <h1>New App</h1>
    <!-- POKEMON STUFF -->
    <!-- <PokedexComponent>
      <template #pokemon-name>Charizard</template>
      <template #type>Fire/Flying</template>
    </PokedexComponent>
    <button @click="fetchPokemon">Get Pokemon</button>
    <ul v-for="poke in pokedex.results">
      Name:
      {{
        poke.name
      }}
    </ul> -->
    <!-- JSON Placeholder Stuff -->
    <button @click="setHome">Home Page</button>
    <button @click="setLogin">Login Page</button>
    <button @click="setUsers">Users Page</button>
    <component :is="renderPage" :key="renderPage"></component>
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import LoginPage from "./components/LoginPage.vue";
import UsersPage from "./components/UsersPage.vue";

//import PokedexComponent from "./components/PokedexComponent.vue";
import { ref, onMounted, onBeforeMount, computed } from "vue";

const pokedex = ref([]);

fetchPokemon = async () => {
  pokedex.value = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151"
  ).then((response) => response.json());
};

/* export default {
  components: {
    HomePage,
    LoginPage,
    UsersPage,
  },
  data: () => ({
    currentPage: "Home",
  }),
  computed: {
    renderPage() {
      return `${this.currentPage}Page`;
    },
  },
  methods: {
    setHome() {
      this.currentPage = "Home";
    },
    setLogin() {
      this.currentPage = "Login";
    },
    setUsers() {
      this.currentPage = "Users";
    },
  },
}; */
/* 
const currentPage = ref("Home");

function setHome() {
  currentPage.value = "Home";
}
function setLogin() {
  currentPage.value = "Login";
}
function setUsers() {
  currentPage.value = "Users";
}

const renderPage = computed(() => {
  return `${currentPage.value}Page`;
}); */
</script>

<style lang="scss" scoped></style>
