<template>
  <li class="user-card">
    Name: {{ user.name }}
    <ul>
      <li>Username: {{ user.username }}</li>
      <li>Email: {{ user.email }}</li>
      <li>Phone: {{ user.phone }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.user-card {
  width: 50%;
  border: 3px solid #2e54ba;
  box-shadow: 0 5px 5px 5px gray;
  border-radius: 15px;
  margin: 10px;
  padding: 16px;
  transition: scale 0.5s;
}

.user-card:hover {
  scale: 105%;
}
</style>
