import {onMounted, ref, unref, watch, watchEffect} from "vue";
import axios from "axios";

function useAxios(city) {

    let weather = ref(null)

    const handleBlur = ()=>{
        axios({
            method: "get",
            url:"https://restapi.amap.com/v3/weather/weatherInfo",
            params:{
                key:"580fd476df08d90a38d46b4d6b80537e",
                city: unref(city),
                extensions: "all"
            }
        }).then(res=>{
            weather.value = res.data.forecasts[0].casts;
            console.log(weather.value);
        })
    }


    watchEffect(handleBlur)
    // console.log(weather.value)

    return {weather}
}

export default useAxios;