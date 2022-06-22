import axios from 'axios';
import { BASE_URL } from '../config/Constants';

const getAllCartridge = `${BASE_URL}/Cartridge`;

const getAll = () =>{
    return axios.get(`${getAllCartridge}`);
}

const deleteCartridge = (id) =>{
    return axios.get(`${getAllCartridge}/${id}`);
}

const Cartridge = {
    getAll,
    deleteCartridge
};

export default Cartridge;