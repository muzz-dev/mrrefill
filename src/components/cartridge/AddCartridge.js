import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import axios from 'axios';
import Model from '../../apis/Model';
import Company from '../../apis/Company';
import Helmet from 'react-helmet';
import { BASE_URL, CartridgeImagePath } from './../../config/Constants';

function AddCartridge() {

    const [cartridgeName, setcartridgeName] = useState();
    const [price, setprice] = useState();
    const [description, setdescription] = useState();
    const [modelId, setmodelId] = useState();
    const [typeId, settypeId] = useState();
    const [isActive, setIsActive] = useState();
    const [companyId, setCompanyId] = useState();
    const [CartridgeImageName, setCartridgeImageName] = useState();
    // fetch the value htmlFor fill the dropdown
    const [allModel, setAllModel] = useState([]);
    const [alltype, setAllType] = useState([]);
    const [allCompany, setAllCompany] = useState([]);
    const current = new Date();
    const currentDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    let navigate = useNavigate();

    let CartridgeFileName = "28052022013224682pintrest.jpg";
    const imagesrc = CartridgeImagePath + CartridgeFileName;

    //Get All model Funcrtion
    const getAllModel = (id) => {
        axios.get(`${BASE_URL}/Model/ModelByCompanyId/${id}`).then((response) => {
            // console.log(response.data);
            setAllModel(response.data);
        })

    }

    //Get All Type Function 
    const getAllType = () => {
        axios.get(`${BASE_URL}/CartridgeType`).then((responseType) => {
            setAllType(responseType.data);
        })
    }

    //get All Company
    const getAllCompany = () => {
        Company.getAll().then((resp) => {
            setAllCompany(resp.data);
        })
    }

    useEffect(() => {
        getAllModel();
        getAllType();
        getAllCompany();
        console.log(companyId);
    },[])

    const CartridgeFileSelected = (event) => {
        event.preventDefault();
        CartridgeFileName = event.target.files[0].name;
        const formData = new FormData();
        formData.append(
            "myFile",
            event.target.files[0],
            event.target.files[0].name
        );
        axios.post(`${BASE_URL}/Cartridge/SaveFile`, formData).then((response) => {
            setCartridgeImageName(response.data);
            console.log(response);
            // imagesrc = CartridgeImagePath + response;
        })
    }

    const objCartridge = {
        cartridgeName: cartridgeName,
        price: price,
        description: description,
        modelId: modelId,
        typeId: typeId,
        imageUrl: CartridgeImageName,
        isActive: isActive,
        createdAt: currentDate,
        updatedAt: currentDate,
    }

    const addCartridge = () => {
        console.log(CartridgeImageName);
        axios.post(`${BASE_URL}/Cartridge`, objCartridge).then((res) => {
            console.log(res);
            // navigate("/Cartridge");
        })
    }

    //radiobutton
    const handleChange = e => {
        const target = e.target;
        if (target.checked) {
            setIsActive(target.value);
        }
    };
    const handleSubmit = e => {
        e.preventDefault();
        console.log(isActive);
    };
    //////////

    return (
        <>
            <Helmet>
                <title>Mr.Refill | Add Cartridge</title>
            </Helmet>
            <Header />
            <Sidebar />
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className='row'>
                            <div className='col-lg-3'>
                            </div>
                            <div className='col-lg-6'>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">Add Cartridge</h4>

                                        <form onSubmit={handleSubmit}>

                                            <div className="form-group">
                                                <label className="control-label">Company Name</label>
                                                <select className="form-control select2-search-disable" value={companyId} onChange={(e) => { setCompanyId(e.target.value); getAllModel(companyId); }}>
                                                    <option disabled="true" selected >Select Company Name</option>
                                                    {
                                                        allCompany.map((object) => {
                                                            return (
                                                                <option value={object.companyId}>{object.companyName}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>

                                            <div className="form-group ">
                                                <label className="control-label">Model Name</label>
                                                <select className="form-control select2-search-disable" value={modelId} onChange={(e) => { setmodelId(e.target.value) }}>
                                                    <option disabled="true" selected >Select Model Name</option>
                                                    {
                                                        allModel.map((object) => {
                                                            return (
                                                                <option value={object.modelId}>{object.modelName}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>

                                            <div className="form-group ">
                                                <label className="control-label">Cartridge Type</label>
                                                <select className="form-control select2-search-disable" value={typeId} onChange={(e) => { settypeId(e.target.value) }}>
                                                    <option disabled="true" selected >Select Cartridge type</option>
                                                    {
                                                        alltype.map((object1) => {
                                                            return (
                                                                <option value={object1.typeId}>{object1.typeName}</option>
                                                            )
                                                        })
                                                    }
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="formname">Cartridge Name</label>
                                                <input type="text" value={cartridgeName} onChange={(e) => { setcartridgeName(e.target.value) }} className="form-control" id="formname" autoComplete='off' placeholder="Enter Cartridge Name..." />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="formname">Price</label>
                                                <input type="text" value={price} onChange={(e) => { setprice(e.target.value) }} className="form-control" id="formname" autoComplete='off' placeholder="Enter Price..." />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="formname">Description</label>
                                                <textarea  value={description} onChange={(e) => { setdescription(e.target.value) }} className="form-control" id="formname" autoComplete='off' placeholder="Enter Description..." />
                                            </div>

                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label htmlFor="formname">Image</label>
                                                        <input type="file" onChange={CartridgeFileSelected} className="form-control" id="formname" autoComplete='off' />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <img src={imagesrc} width='100px' height='100px' />
                                                </div>
                                            </div>


                                            <div className="form-group">
                                                <label className="d-block mb-3">Is Active</label>
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" value="Y" checked={isActive == 'Y'} onChange={handleChange} id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor="customRadioInline1">Yes</label>
                                                </div>
                                                <div className="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" value="N" checked={isActive == 'N'} onChange={handleChange} id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                                                    <label className="custom-control-label" htmlFor="customRadioInline2">No</label>
                                                </div>
                                            </div>

                                            <div className="form-group row justify-content-end">
                                                <div className="col-sm-9">
                                                    <div>
                                                        <button type='button' onClick={addCartridge} className="btn btn-primary w-md mr-3" style={{ alignContent: 'center' }}>Add Cartridge</button>
                                                        <NavLink to="/Cartridge" className="btn btn-secondary" tabIndex="-1" role="button" aria-disabled="true">Cancle</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AddCartridge