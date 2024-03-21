<template>
  <h2>{{ region }}</h2>
  <h3>{{ regionNameAllCaps }}</h3>
  <button @click="changeRegion">Change Region</button>
  <pre>{{ pokedex }}</pre>
</template>

<script>
import { ref, computed } from "vue";
import { useCount } from "@/composables/countStore";

export default {
  async setup() {
    const region = ref("Kanto");
    const regionNameAllCaps = computed(() => {
      return region.value.toUpperCase();
    });
    const pokedex = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    ).then((response) => response.json());
    return {
      region,
      pokedex,
      regionNameAllCaps,
    };
  },
  methods: {
    changeRegion() {
      if (this.region === "Kanto") this.region = "Hoenn";
      else this.region = "Kanto";
    },
  },
};
</script>

<style lang="scss" scoped></style>
