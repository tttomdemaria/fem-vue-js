<template>
  <li :class="$style.userCard">
    Name: {{ user.name }}
    <ul>
      <li>Username: {{ user.username }}</li>
      <li>Email: {{ user.email }}</li>
      <li>Phone: {{ user.phone }}</li>
    </ul>
  </li>
</template>

<script setup>
const props = defineProps({ user: { type: Object, required: true } });
</script>

<style lang="scss" module>
.testClass {
  background-color: #2e54ba;
}
.userCard {
  width: 50%;
  border: 3px solid #2e54ba;
  box-shadow: 0 5px 5px 5px gray;
  border-radius: 15px;
  margin: 10px;
  padding: 16px;
  transition: scale 0.5s;
}

.userCard:hover {
  scale: 105%;
}
</style>
