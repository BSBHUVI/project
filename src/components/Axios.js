import axios from "axios";
const instance=axios.create({
    // baseURL:"http://localhost:5000"
 baseURL:"https://wandering-cyan-pants.cyclic.app"

})
export default instance