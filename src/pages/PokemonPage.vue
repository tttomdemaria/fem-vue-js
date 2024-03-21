<template>
  <div>
    <h1>Pokemon Page!</h1>
    <button @click="goBack">Back to Pokemon List</button>
    <h3>
      Pokemon #{{ route.params.id }}:
      {{ `${pokemon.name?.charAt(0).toUpperCase()}${pokemon.name?.slice(1)}` }}
    </h3>
    <ul>
      <li>ID: {{ pokemon.id }}</li>
      <li>
        {{ pluralize }}
        <ul>
          <li v-for="pokeType in pokemon.types">
            {{ pokeType.type.name }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, onBeforeMount, computed } from "vue";

const route = useRoute();
const router = useRouter();

const pokemon = ref({});

const goBack = () => {
  router.push("/pokemon");
};

onBeforeMount(async () => {
  pokemon.value = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${route.params.id}/`
  ).then((r) => r.json());
});

const pluralize = computed(() => {
  return pokemon.value.types?.length == 1 ? `Type:` : `Types:`;
});
</script>

<style lang="scss" scoped></style>
