import axios from 'axios'

const client = axios.create({
    baseURL: "https://60b40b584ecdc10017480255.mockapi.io/api/animales"
})

export default {
    get(){
        return client.get()
    },
    getById(id){
        return client.get(`/${id}`)
    }
}