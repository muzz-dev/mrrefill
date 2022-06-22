import axios from 'axios';
import { BASE_URL } from '../config/Constants';

const getAllCompany = `${BASE_URL}/Company`;

const getAll = ()=>{
    return axios.get(`${getAllCompany}`);
}

const deleteCompany = (id)=>{
    return axios.get(`${getAllCompany}/${id}`);
}



const Company = {
    getAll,
    deleteCompany
};

export default Company;