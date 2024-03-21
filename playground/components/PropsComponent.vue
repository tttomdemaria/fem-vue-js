<template>
  <div>
    <h1>Hello from User Component!</h1>
    <div>Name: {{ userData.name }}</div>
    <div>Age: {{ userData.age }}</div>
    <div>Color: {{ userData.favColor }}</div>
    <div>Favorite Food: {{ favFood }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  userData: {
    type: Object,
  },
  favFood: {
    type: String,
    default: "Cheeseburger",
  },
});
</script>

<style scoped></style>
