<template>
  <div class="wrapper">
    <h1>Pokedex</h1>
    <h2>
      <slot name="pokemon-name" />
    </h2>
    <h3>
      <slot name="type" />
    </h3>
  </div>
</template>

<script></script>

<style scoped>
.wrapper {
  padding: 15px;
  height: 50%;
  width: 85%;
  border-radius: 15px;
  box-shadow: 0 10px 10px 10px gray;
}
</style>
