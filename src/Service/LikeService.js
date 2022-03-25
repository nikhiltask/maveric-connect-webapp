import axios from "axios";

const LIKE_REST_SERVICE=""
class LikeService{
    getLike(){
        axios.get(LIKE_REST_SERVICE)
    }
}
export default new LikeService();