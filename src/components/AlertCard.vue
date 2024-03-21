<template>
  <div class="card" v-for="(item, i) in data" :key="i">
    <h3>{{ item.text }}</h3>
    <p>
      Click here to complete this step:
      <a :href="item.link">{{ item.link }}</a>
    </p>
    <!-- <v-carousel
      :continuous="true"
      :show-arrows="true"
      hide-delimiter-background>
      <v-carousel-item v-for="(item, i) in data" :key="i">
        <h3>{{ item.text }}</h3>
        <p>
          Click here to complete this step:
          <a :href="item.link">{{ item.link }}</a>
        </p>
      </v-carousel-item>
    </v-carousel> -->
  </div>
</template>

<script setup>
const props = defineProps(["data"]);
</script>

<style lang="scss" scoped>
.card {
  width: 30%;
  border-radius: 15px;
  box-shadow: 0 3px 3px 3px gray;
  background-color: #ff6666;
  color: white;
  padding: 10px;
  margin: 10px;
  text-align: center;
}
</style>
