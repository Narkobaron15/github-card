import axios from "axios";

const http_common = axios.create({
    baseURL: 'https://api.github.com/users/',
})

export default http_common
