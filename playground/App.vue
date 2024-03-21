<template>
  <div>
    <div class="container">
      <h1 class="header-flavor">Character List</h1>
    </div>
    <StatsComponent
      :characters="characterList"
      @change-character="changeName"
      @toggle-modal="toggleModal" />
    <PropsComponent :userData="userDataObj" />
  </div>
</template>

<script setup>
import StatsComponent from "./components/StatsComponent.vue";
import PropsComponent from "./components/PropsComponent.vue";
import ModalComponent from "./components/ModalComponent.vue";
import SlotComponent from "./components/SlotComponent.vue";
import { ref } from "vue";

const changeName = () => {
  console.log(`Successfully emitted event at ${new Date().toUTCString()}`);
  userDataObj.value.name = "Steve";
};

const toggleModal = () => {
  console.log("toggleModal triggered in app from emit in StatsComponent!");
};

const changeData = () => {
  userDataObj.value.favColor = "red";
};

const characterList = ref([
  {
    firstName: "Jana",
    lastName: "Durham",
    skills: [
      {
        skillName: "aliquip",
        skillDamage: 114,
        skillType: "Fire",
      },
      {
        skillName: "veniam",
        skillDamage: 43,
        skillType: "Water",
      },
      {
        skillName: "labore",
        skillDamage: 83,
        skillType: "Earth",
      },
    ],
  },
  {
    firstName: "Logan",
    lastName: "Pickett",
    skills: [
      {
        skillName: "fugiat",
        skillDamage: 107,
        skillType: "Darkness",
      },
      {
        skillName: "fugiat",
        skillDamage: 157,
        skillType: "Fire",
      },
      {
        skillName: "veniam",
        skillDamage: 67,
        skillType: "Water",
      },
    ],
  },
  {
    firstName: "Jennie",
    lastName: "Bullock",
    skills: [
      {
        skillName: "excepteur",
        skillDamage: 81,
        skillType: "Fire",
      },
      {
        skillName: "laborum",
        skillDamage: 130,
        skillType: "Water",
      },
      {
        skillName: "sit",
        skillDamage: 105,
        skillType: "Water",
      },
    ],
  },
  {
    firstName: "Steele",
    lastName: "Bishop",
    skills: [
      {
        skillName: "id",
        skillDamage: 64,
        skillType: "Water",
      },
      {
        skillName: "consequat",
        skillDamage: 122,
        skillType: "Fire",
      },
      {
        skillName: "est",
        skillDamage: 189,
        skillType: "Fire",
      },
    ],
  },
  {
    firstName: "Bullock",
    lastName: "Barrera",
    skills: [
      {
        skillName: "Lorem",
        skillDamage: 69,
        skillType: "Darkness",
      },
      {
        skillName: "dolore",
        skillDamage: 56,
        skillType: "Fire",
      },
      {
        skillName: "sint",
        skillDamage: 143,
        skillType: "Fire",
      },
    ],
  },
]);

const userDataObj = ref({
  name: "Rick",
  age: 27,
  favColor: "green",
});

const addCharacter = () => {
  characterList.value.push({
    skills: [
      {
        skillName: "fugiat",
        skillType: "Darkness",
        skillDamage: 107,
      },
      {
        skillName: "fugiat",
        skillType: "Fire",
        skillDamage: 157,
      },
      {
        skillName: "veniam",
        skillType: "Water",
        skillDamage: 67,
      },
    ],
    lastName: "Pickett",
    firstName: "Logan",
  });
};
</script>

<style scoped>
.header-flavor {
  background-color: var(--primary-dark);
  color: var(--white);
}

h1 {
  flex-basis: 50%;
  text-align: center;
  margin: 0 0 15px 0;
  padding: 15px;
  border-radius: 15px;
}

button.primary {
  background-color: var(--secondary-dark);
  color: var(--white);
  height: 50px;
  font-size: 18px;
  margin-top: 15px;
  flex-basis: 15%;
}
</style>
