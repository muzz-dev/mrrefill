import axios from 'axios';
import { BASE_URL } from '../config/Constants';

const getAllEmployee = `${BASE_URL}/UserListing/GetEmployeeList`

const getAll = () =>{
    return axios.get(`${getAllEmployee}`);
}

const deleteCompany = (id) =>{
    return axios.get(`${getAllEmployee}/${id}`);
}

const Employee = {
    getAll,
    deleteCompany
};
export default Employee;