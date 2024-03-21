<template>
  <h3>{{ name }}</h3>
  <button @click="incrementLocal">Increment local count</button>
  <button @click="incrementGlobal">Increment global count</button>

  <h2>This Counter Version: {{ countStore.count }}</h2>
  <h4>Getter double: {{ countStore.doubleCount }}</h4>
  <button @click="countStore.increment">Increment pinia count</button>

  <p>Local count: {{ count.localCount }}</p>
  <p>Global count: {{ count.globalCount }}</p>
</template>

<script setup>
import { useCount } from "@/composables/countStore";
import { useCountStore } from "@/stores/CountStore.js";

const countStore = useCountStore();

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const count = useCount();

function incrementLocal() {
  count.localCount.value += 25;
}

function incrementGlobal() {
  count.globalCount.value += 100;
}
</script>
