import axios from 'axios';
import { BASE_URL } from '../config/Constants';

const area = `${BASE_URL}/Area`;


const getAll = () =>{
    return axios.get(`${area}`)
}

const AddArea = () =>{
    return axios.post(`${area}` ,{
        Headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
}

const editArea = (id) =>{
    return axios.put(`${area}/${id}` ,{
        Headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
}

const deleteArea = (id) =>{
    return axios.delete(`${area}/${id}` ,{
        Headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
}


const Area = {
    getAll,
    AddArea,
    editArea,
    deleteArea
};

export default Area;
