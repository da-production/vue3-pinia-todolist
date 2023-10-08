import axios from 'axios';
import { ref } from 'vue'


export const useFetchWithAuth = async (url) =>{
    const data = ref();
    const err = ref(null)
    await axios.get(url)
    .then(res => data.value = res.data)
    .catch(err => console.log(err))

    return { data , err}
}

export const useGet = async (url) =>{
    const data = ref();
    const err = ref(null)
    const isActive = ref(false)
    await axios.get(url)
    .then(res => data.value = res.data)
    .catch(err => console.log(err))

    return { data , err, isActive}
}