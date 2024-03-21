<template>
  <h1>This is for Pokemon!</h1>
  <div class="item">
    <button @click="goToPoke(i)" v-for="(pokemon, i) in pokedex">
      Go to
      {{ `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}` }}
    </button>
  </div>
</template>

<script setup>
import { useCount } from "@/composables/countStore";
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToPoke = (i) => {
  router.push(`/pokedex/${i + 1}`);
};

const pokedex = ref([]);

onBeforeMount(async () => {
  pokedex.value = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then((res) => res.json())
    .then((r) => r.results);
});
</script>

<style lang="scss" scoped>
.item {
  width: 30%;
  display: flex;
  flex-direction: column;
}
</style>
