import axios from 'axios';
import { BASE_URL } from '../config/Constants';

const getAllUser = `${BASE_URL}/UserListing/List/GetUserList`
const getAll = () =>{
    return axios.get(`${getAllUser}`);
}

const User = {
    getAll
};
export default User;