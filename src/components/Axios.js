import axios from "axios";
const instance=axios.create({
    baseURL:"https://project-backend-ssce.onrender.com"
})
export default instance