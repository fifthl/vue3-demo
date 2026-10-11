<template>
  <h1> {{ info }}</h1>
</template>

<script setup>
const props = defineProps({
  info: {
    type: String,
    default: "ahahahh "
  }
})
</script>