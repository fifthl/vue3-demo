<script setup>
// 方式1 直接拿
  // import {useRoute} from "vue-router";
  //
  // const route = useRoute();
  //
  // console.log(route.query.tvid)

// 方式2 通过 props 拿,在 route 定义了 props
import axios from "axios";
import {onMounted, ref} from "vue";

const props = defineProps(["tvid"])
const channelList = ref([])
const tvName =ref('')

onMounted(()=>{
  axios({
    url:"/api/query",
    method:"get",
    params:{
      appkey: "aef9f5896345dea2",
      tvid: props.tvid,
      date: "2026-10-11"
    }
  }).then(res=>{
    console.log(res)
    channelList.value = res.data.result.program
    tvName.value=res.data.result.name
  })
})
</script>

<template>
  <h1>节目列表</h1>
  <h2>{{tvName}}</h2>
  <ul>
    <li v-for="item in channelList" :key="item.name">时间: {{item.starttime}} : {{item.name}}</li>
  </ul>
</template>

<style scoped>

</style>