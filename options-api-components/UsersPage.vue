<template>
  <div>
    <ul>
      <UserCard v-for="user in users" :user="user" :key="`userid-${user.id}`" />
    </ul>
  </div>
</template>

<script setup>
import UserCard from "./UserCard.vue";
import { ref, onBeforeMount } from "vue";

const users = ref([]);

const fetchUsers = async () => {
  users.value = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );
};

onBeforeMount(() => {
  fetchUsers();
});
</script>

<style lang="scss" scoped>
* {
  display: flex;
  flex-direction: column;
}
</style>
