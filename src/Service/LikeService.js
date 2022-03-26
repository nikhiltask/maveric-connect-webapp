import axios from "axios";

const LIKE_REST_SERVICE="http://localhost:8000/users/4"
class LikeService{
    getLike(){
        console.log(LIKE_REST_SERVICE)
       return axios.get(LIKE_REST_SERVICE)
    }
}
export default new LikeService();