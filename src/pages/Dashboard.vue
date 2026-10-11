<script setup>
import {onMounted} from "vue";
import {useRouter} from "vue-router";
const router = useRouter();

onMounted(() => {
  console.log(router.currentRoute.value.query)
})
</script>

<template>
<h1>Dashboard Components</h1>
</template>

<style scoped>
</style>