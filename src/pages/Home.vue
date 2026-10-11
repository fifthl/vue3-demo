<script setup>
import {onMounted} from "vue";
import {useRouter} from "vue-router";
const router = useRouter();

onMounted(() => {
  console.log(router.currentRoute.value.query)
})
</script>

<template>
<h1>Home Components</h1>
  <input type="text">
</template>

<style scoped>
</style>