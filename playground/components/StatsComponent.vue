<template>
  <div>
    <h3>Hello, {{ name }}!</h3>
    <SlotComponent>
      <template #slot-one> Hello, slot one! </template>
      <template #slot-two> Hello, slot two! </template>
    </SlotComponent>
    <div class="container">
      <div class="character-card" v-for="c in characters">
        <span class="character-header">{{
          `${c.firstName} ${c.lastName}`
        }}</span>
        <ul>
          Skills:
          <ul v-for="skill in c.skills">
            <li>Skill name: {{ skill.skillName }}</li>
            <ul>
              <li>Damage: {{ skill.skillDamage }}</li>
              <li>Type: {{ skill.skillType }}</li>
            </ul>
          </ul>
        </ul>
      </div>
    </div>
    <div class="container">
      <button @click="$emit('change-character')">Change character</button>
      <button @click="$emit('toggle-modal')">Test value changing</button>
    </div>
  </div>
</template>

<script>
import SlotComponent from "./SlotComponent.vue";
export default {
  data() {
    return {
      name: "Steve",
    };
  },
  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
  components: {
    SlotComponent,
  },
  emits: ["change-character", "toggle-modal"],
  methods: {
    sayHello: () => {
      console.log("Hello!");
    },
  },
  computed: {},
};
</script>

<style scoped>
@import url("../assets/main.css");

.character-header {
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--primary-dark);
}

.character-card {
  flex-basis: 18%;
  border-radius: 15px;
  background-color: var(--white);
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.7);
  transition: all 0.3s;
}

.character-card:hover {
  scale: 105%;
}

.container {
  margin: auto;
  width: 85%;
  display: flex;
  border-radius: 25px;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
