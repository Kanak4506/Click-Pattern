<script setup>
import { onMounted, ref, watch } from "vue";

const currentkey = ref(null);

const keyNotations = [
  { keys: "i" },
  { keys: "q" },
  { keys: "r" },
  { keys: "5" },
  { keys: "3" },
  { keys: "8" },
  { keys: "n" },
  { keys: "b" },
  { keys: "7" },
  { keys: "u" },
  { keys: "o" },
  { keys: "d" },
  { keys: "h" },
  { keys: "-" },
  { keys: "p" },
  { keys: "z" },
  { keys: "6" },
  { keys: ";" },
  { keys: "q" },
  { keys: "." },
  { keys: " " },
  { keys: "a" },
  { keys: "v" },
  { keys: "c" },
  { keys: "g" },
  { keys: "2" },
  { keys: "k" },
  { keys: "f" },
  { keys: "x" },
  { keys: "y" },
  { keys: "s" },
  { keys: "j" },
  { keys: "l" },
  { keys: "\'" },
  { keys: "[" },
  { keys: "`" },
  { keys: "4" },
  { keys: "9" },
  { keys: "0" },
  { keys: "2" },
  { keys: "." },
  { keys: " " },
  { keys: "w" },
  { keys: "" },
  { keys: "t" },
  { keys: "9" },
  { keys: "-" },
  { keys: "." },
  { keys: "/" },
  { keys: "]" },
  { keys: "e" },
  { keys: "1" },
  { keys: "m" },
];

function handleKey(e) {
  currentkey.value = e.key;
}

onMounted(() => {
  window.addEventListener("keypress", handleKey);
});

watch(currentkey, (x) => {
  console.log(`pressed key is ${x}`)
})

</script>

<template>
  <div
    class="tw-select-none tw-bg-black tw-overflow-hidden tw-h-screen tw-w-screen tw-flex tw-flex-wrap tw-justify-center tw-items-center"
  >
    <div
      v-for="(each, index) in keyNotations"
      :key="index"
      :class="[each.keys == currentkey ? 'tw-flex' : 'tw-invisible']"
      class="tw-w-20 tw-h-20 tw-border tw-text-slate-600 tw-text-3xl tw-border-black"
    >
      <pre>
* * * * * * *
* * * * * * *
* * * * * * * 
* * * * * * *
* * * * * * *
* * * * * * *
      </pre>
    </div>
  </div>
</template>

<style scoped></style>