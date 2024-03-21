<template>
  <div class="navbar">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/pokemon">Pokemon</RouterLink>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
$base: #007474;
$secondary: #88a8ff;

.navbar {
  display: flex;
  width: 100%;
  background-color: $secondary;
  height: 35px;
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: black;
  height: 100%;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

a:hover {
  background-color: rgb(0, 83, 156);
  color: white;
}
</style>
