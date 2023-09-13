import axios from 'axios'

const customFetch = axios.create({
    baseURL:'https://api.unsplash.com/search/collections?page=1&query=office',
    headers:{
        Authorization:'Client-ID S5wJOhieWyAb0QL7eJQKBf8zSbNdpr1FehrPshJIaNg'
    }
})


export default customFetch