import axios from "axios";

const LIKE_REST_SERVICE="http://localhost:8000/postsOrComments/1/likes/count"
class LikeService{
    getLike(){
       return axios.get(LIKE_REST_SERVICE)
    }
}
export default new LikeService();