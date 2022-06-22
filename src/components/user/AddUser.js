import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import Helmet from 'react-helmet';
import Area from '../../apis/Area';
import axios from 'axios';
import { BASE_URL } from './../../config/Constants';

function AddUser() {

    const [name, setname] = useState();
    const [contact, setcontact] = useState();
    const [emailId, setemailId] = useState();
    const [password, setpassword] = useState();
    const [companyName, setcompanyName] = useState();
    const [address, setaddress] = useState();
    const [areaId, setareaId] = useState();
    const [gstNumber, setgstNumber] = useState();
    const [isVerify, setisVerify] = useState();
    const [allArea, getAllArea] = useState([]);
    const current = new Date();
    const currentDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    let navigate = useNavigate();

    const obj = {
        name: name,
        contact: contact,
        emailId: emailId,
        password: password,
        companyName: companyName,
        address: address,
        areaId: areaId,
        gstNumber: gstNumber,
        isVerify: isVerify,
        isBlock: "N",
        type: "User",
        registerBy: "Online",
        createdAt: currentDate,
        updatedAt: currentDate,
    }

    useEffect(() => {
        Area.getAll().then((res) => {
            getAllArea(res.data);
        })
    })

    const addUser = () => {
        axios.post(`${BASE_URL}/User`, obj).then((response) => {
            // console.log(response);
            navigate("/User");
        })
    }

    //radiobutton
    const handleChange = e => {
        const target = e.target;
        if (target.checked) {
            setisVerify(target.value);
        }
    };
    const handleSubmit = e => {
        e.preventDefault();
        console.log(isVerify);
    };
    //////////

    return (
        <>
            <Helmet>
                <title>Mr.Refill | Add User</title>
            </Helmet>
            <Header />
            <Sidebar />
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">
                        <div className='row'>
                            <div className='col-lg-2'>
                            </div>
                            <div className='col-lg-12'>
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-4">Add User</h4>

                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="formrow-email-input">Name</label>
                                                        <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} className="form-control" id="formrow-email-input" autoComplete='off' placeholder="Enter Name..." />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="formrow-password-input">Contact Number</label>
                                                        <input type="text" value={contact} onChange={(e) => { setcontact(e.target.value) }} className="form-control" id="formrow-password-input" autoComplete='off' placeholder="Enter Contact Number..." />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="formrow-password-input">E-mail</label>
                                                        <input type="email" value={emailId} onChange={(e) => { setemailId(e.target.value) }} className="form-control" id="formrow-password-input" autoComplete='off' placeholder="Enter E-mail ..." />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="formrow-email-input">Company Name</label>
                                                        <input type="text" value={companyName} onChange={(e) => { setcompanyName(e.target.value) }} className="form-control" id="formrow-email-input" autoComplete='off' placeholder="Enter Company Name..." />
                                                    </div>
                                                </div>

                                                <div className="col-md-8">
                                                    <div className="form-group">
                                                        <label for="fordescription">Address</label>
                                                        <textarea  value={address} onChange={(e) => { setaddress(e.target.value) }} className="form-control" id="formrow-password-input" autoComplete='off' placeholder="Enter Address..." />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="formrow-email-input">Area</label>
                                                        <select className="form-control" value={areaId} onChange={(e) => { setareaId(e.target.value) }}>
                                                            <option disabled="true" selected>Select Area Name</option>
                                                            {
                                                                allArea.map((Object) => {
                                                                    return (
                                                                        <option value={Object.areaId}>{Object.areaName}</option>
                                                                    )
                                                                })
                                                            }
                                                        </select>
                                                    </div>
                                                </div>


                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="formrow-password-input">GST Number</label>
                                                        <input type="text" value={gstNumber} onChange={(e) => { setgstNumber(e.target.value) }} className="form-control" id="formrow-password-input" autoComplete='off' placeholder="Enter GST Number..." />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group">
                                                        <label for="formrow-password-input">Password</label>
                                                        <input type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} className="form-control" id="formrow-password-input" autoComplete='off' placeholder="Enter Password..." />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label class="d-block mb-3">Is Verify</label>
                                                <div class="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" value="Y" checked={isVerify == 'Y'} onChange={handleChange} id="customRadioInline1" name="customRadioInline1" class="custom-control-input" />
                                                    <label class="custom-control-label" for="customRadioInline1">Yes</label>
                                                </div>
                                                <div class="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" value="N" checked={isVerify == 'N'} onChange={handleChange} id="customRadioInline2" name="customRadioInline1" class="custom-control-input" />
                                                    <label class="custom-control-label" for="customRadioInline2">No</label>
                                                </div>
                                            </div>

                                            <div className="form-group row justify-content-end">
                                                <div className="col-sm-9">
                                                    <div>
                                                        <button type='button' onClick={addUser} className="btn btn-primary w-md mr-3" style={{ alignContent: 'center' }}>Add User</button>
                                                        <NavLink to="/User" className="btn btn-secondary" tabIndex="-1" role="button" aria-disabled="true">Cancle</NavLink>
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

export default AddUser