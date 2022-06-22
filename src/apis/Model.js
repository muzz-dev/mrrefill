import axios from 'axios';
import { BASE_URL } from '../config/Constants';

const getAllModel = `${BASE_URL}/Model`;

const getAll = () =>{
    return axios.get(`${getAllModel}`);
}



const Model = {
    getAll
};

export default Model;