import axios from "axios";
const instance=axios.create({
    baseURL:"https://backend-crops-data.onrender.com/"
 

})
export default instance