import axios from "axios";
const instance=axios.create({
    // baseURL:"http://localhost:5000/"
    baseURL:"https://project-backend-ssce.onrender.com"
})
export default instance