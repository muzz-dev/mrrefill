import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import axios from 'axios';
import Company from '../../apis/Company';
import Helmet from 'react-helmet';
import { BASE_URL } from './../../config/Constants';

function AddModel() {
    
    const [modelName, setmodelName] = useState();
    const [isActive, setIsActive] = useState();
    const [companyId, setcompanyId] = useState();
    const [type, settype] = useState();
    //get data For fill the dropdown
    const [allCompany, setAllCompany] = useState([]);
    const [alltype, setAllType] = useState([]);
    const current = new Date();
    const currentDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    let navigate = useNavigate();

    const getAllCompany = () => {
        Company.getAll().then((response) => {
            setAllCompany(response.data);
        })
    }
    //Get All Type Function 
    const getAllType = () => {
        axios.get(`${BASE_URL}/CartridgeType`).then((responseType) => {
            setAllType(responseType.data);
        })
    }

    useEffect(() => {
        getAllCompany();
        getAllType();
    }, [])


    const objModel = {
        modelName: modelName,
        type: type,
        companyId: companyId,
        isActive: isActive,
        createdAt: currentDate,
        updatedAt: currentDate,
    }

    const addModel = () => {
        axios.post(`${BASE_URL}/Model`, objModel).then((res) => {
            console.log(res);
            navigate("/Model");
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
                <title>Mr.Refill | Add Model</title>
            </Helmet>
            <Header />
            <Sidebar />
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className='row'>
                            <div className='col-lg-3'>
                            </div>
                            <div className='col-lg-6'>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">Add Model</h4>
                                        <form onSubmit={handleSubmit}>

                                            <div className="form-group">
                                                <label className="control-label">Company Name</label>
                                                <select className="form-control select2-search-disable" value={companyId} onChange={(e) => { setcompanyId(e.target.value) }}>
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
                                                <label className="control-label">Cartridge Type</label>
                                                <select className="form-control select2-search-disable" value={type} onChange={(e) => { settype(e.target.value) }}>
                                                    <option disabled="true" selected >Select Cartridge Type</option>
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
                                                <label htmlFor="formname">Model Name</label>
                                                <input type="text" value={modelName} onChange={(e) => { setmodelName(e.target.value) }} className="form-control" id="formname" autoComplete='off' placeholder="Enter Model Name..." />
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
                                                        <button type='button' onClick={addModel} className="btn btn-primary w-md mr-3" style={{ alignContent: 'center' }}>Add Model</button>
                                                        <NavLink to="/Model" className="btn btn-secondary" tabIndex="-1" role="button" aria-disabled="true">Cancle</NavLink>
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

export default AddModel