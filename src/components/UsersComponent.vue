<template>
  <div>Prop assigned with v-bind: {{ number }}</div>
  <UserCard v-for="user in userStore.shortUserList" :user="user" />
</template>

<script setup>
import UserCard from "./UserCard.vue";
import { onUpdated, ref, onMounted } from "vue";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();

const props = defineProps(["number"]);

userStore.fetchUsers();

/* async function getUsers() {
  users.value = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );
} */
</script>

<style lang="scss" scoped></style>
