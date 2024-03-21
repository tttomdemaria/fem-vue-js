<template>
  <h1>This is Home!</h1>
  <h3>New App</h3>
  <StoreComponent :name="`Component 1`" />

  <div>
    <p>Count: {{ theCount }}</p>
  </div>

  <button @click="addArrItem">Add Text to Array</button>
  <button @click="increment">Add to number</button>

  <!--  <AlertCard v-if="array.length != 0" :data="array" /> -->

  <!--   <Suspense>
    <PokedexComponent />
    <template #fallback> Loading pokemon data... </template>
  </Suspense> -->

  <Suspense>
    <UsersComponent :number="num" />
    <template #fallback> Loading user data... </template>
  </Suspense>
</template>

<script setup>
import StoreComponent from "@/components/StoreComponent.vue";
import PokedexComponent from "@/components/PokedexComponent.vue";
import UsersComponent from "@/components/UsersComponent.vue";
import AlertCard from "@/components/AlertCard.vue";

import { ref, computed, watchEffect, watch } from "vue";

import { useRouter } from "vue-router";

const router = useRouter();

const num = ref(1);
const numArr = ref([]);
const array = ref([
  {
    text: "Account Issue 1",
    link: "https://google.com",
    severity: "alert",
  },
  {
    text: "Account Issue 2",
    link: "https://google.com",
    severity: "severe",
  },
  {
    text: "Account Issue 3",
    link: "https://google.com",
    severity: "caution",
  },
]);

watch(num, () => {
  if (num.value > 25) router.push("/pokemon");
});

const signIn = async () => {};

const theCount = computed(() => {
  return num.value > 15 ? num.value : `The count isn't high enough`;
});

watch(
  numArr,
  (newThing) => {
    console.log(newThing);
  },
  { deep: true }
);

const addArrItem = () => {
  numArr.value.push(`Item #${num.value}`);
};

const increment = () => {
  num.value++;
};
</script>

<style lang="scss" scoped></style>
