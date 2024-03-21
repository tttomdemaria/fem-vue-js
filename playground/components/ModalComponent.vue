<template>
  <div class="modal">
    <form action="submit">
      <label for="">Enter new favorite color</label>
      <input type="text" />
      <button @click.prevent="changeData">Submit favorite color</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["theThing"]);
const toggled = ref(false);
</script>
