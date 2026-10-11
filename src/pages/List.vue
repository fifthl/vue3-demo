<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

const list= ref([])
const router = useRouter()

onMounted(()=>{
  axios({
    url:"/api/channel",
    method: "GET",
    params: {
      appkey: "aef9f5896345dea2",
    }
  }).then((res)=>{
    list.value=res.data.result.slice(800,1000)
  })
})

function fn(tvid){
  router.push(`/detail?tvid=${tvid}`)
}
</script>

<template>
<h1>频道列表</h1>
<ul>
  <li v-for="item in list" :key="item.tvid" @click="fn(item.tvid)">{{ item.name }}</li>
</ul>
</template>

<style scoped>

</style>