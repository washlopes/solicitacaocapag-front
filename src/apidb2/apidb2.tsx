import axios from "axios";

const apidb2 = axios.create(
    {
        baseURL: "http://localhost:8082"
    }
)

export default apidb2;