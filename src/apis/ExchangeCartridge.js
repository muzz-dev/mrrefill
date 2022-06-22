import { BASE_URL } from "../config/Constants";
import axios from "axios";

const getAllExchangeCartridge = `${BASE_URL}/ExchangeCartridge`;

const getExchangeCartridgeById = `${BASE_URL}/ExchangeCartridge/AllocatedRequestDetail/`;

const getAreaByEmployee = `${BASE_URL}/User/GetEmployeeAreaWise/`;

const getAll = () => {
    return axios.get(`${getAllExchangeCartridge}`, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        }
    },
        { withCredentials: true });
}

const getById = (id) =>{
    // console.log(id);
    return axios.get(`${getExchangeCartridgeById}/${id}`)
}

const getEmployeeByArea = (aid) =>{
    console.log(aid);
    return axios.get(`${getAreaByEmployee}/${aid}`)
}

const ExchangeCartridge = {
    getAll,
    getById,
    getEmployeeByArea
};

export default ExchangeCartridge;