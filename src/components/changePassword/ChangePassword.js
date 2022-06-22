import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import { NavLink } from 'react-router-dom';
import { BASE_URL } from '../../config/Constants';
import axios from 'axios';

function ChangePassword() {
    const [userid, setUserId] = useState();
    const [name, setName] = useState();
    const [contact, setContact] = useState();
    const [emailId, setEmailId] = useState();
    const [address, setAddress] = useState();
    const [areaId, setareaId] = useState();
    const [isBlock, setisBlock] = useState();
    const [companyName, setCompanyName] = useState();
    const [gstNumber, setgstNumber] = useState();
    const [isVerify, setisVerify] = useState();
    const [type, setType] = useState();
    const [password, setpassword] = useState();
    const [registerBy, setRegisterBy] = useState();
    const [createdAt, setCreatedAt] = useState();
    const [otp, setotp] = useState();
    const current = new Date();
    const currentDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const obj = {
        userid: userid,
        name: name,
        contact: contact,
        emailId: emailId,
        address: address,
        areaId: areaId,
        isBlock: isBlock,
        companyName: companyName,
        gstNumber: gstNumber,
        isVerify: isVerify,
        type: type,
        password: password,
        registerBy: registerBy,
        createdAt: createdAt,
        updatedAt: currentDate,
        otp: otp,
    }

    const changePassword = e => {
        e.preventDefault();
        axios.put(`${BASE_URL}/User/${userid}`, obj).then((response) => {
            console.log(response);
        })
    }

    const getUserDataById = () => {
        localStorage.getItem('userId');
        setUserId(localStorage.getItem('userId'));
        axios.get(`${BASE_URL}/User/${userid}`).then((response) => {
            console.log(response.data);
            setUserId(response.data.userId);
            setName(response.data.name);
            setContact(response.data.contact);
            setEmailId(response.data.emailId);
            setpassword(response.data.password);
            setCompanyName(response.data.companyName);
            setAddress(response.data.address);
            setareaId(response.data.areaId);
            setisBlock(response.data.isBlock);
            setgstNumber(response.data.gstNumber);
            setisVerify(response.data.isVerify);
            setotp(response.data.otp);
            setRegisterBy(response.data.registerBy);
            setCreatedAt(response.data.createdAt);
            setType(response.data.type);
        })
        console.log(userid);
    }

    useEffect(() => {
        getUserDataById();

    }, [])

    const today = new Date();
    return (
        <>
            <Helmet>
                <title>Mr.Refill | Change Password</title>
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
                                        <h4 className="card-title mb-4">Change Password</h4>

                                        <form id="form" >
                                            <div class="form-group">
                                                <label for="formname">New Password</label>
                                                <input type="text" class="form-control" value={password} onChange={(e) => { setpassword(e.target.value) }} id="newPassword" autoComplete='off' placeholder="Enter New Password..." />
                                            </div>
                                            <div class="form-group">
                                                <label for="formname">Confirm New Password</label>
                                                <input type="text" class="form-control" id="confirmNewPassword" autoComplete='off' placeholder="Enter New Confrim Password..." />
                                            </div>

                                            <div className="form-group row justify-content-end">
                                                <div className="col-sm-9">
                                                    <div>
                                                        <button type='button' onClick={changePassword} className="btn btn-primary w-md mr-3" style={{ alignContent: 'center' }}>Change Password</button>
                                                        <NavLink to="/Dashboard" className="btn btn-secondary" tabIndex="-1" role="button" aria-disabled="true">Cancle</NavLink>
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



export default ChangePassword