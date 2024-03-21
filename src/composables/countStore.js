import { ref } from "vue";

export const globalCount = ref(200);

export function useCount(amount) {
  const localCount = ref(50);
  const pokedex = ref([]);
  const test = ["this", "is", "a", "test"];

  return {
    test,
    pokedex,
    globalCount,
    localCount,
  };
}
