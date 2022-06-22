import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from './../../config/Constants';
import Helmet from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const [emailId, setEmailId] = useState();
    const [password, setPassword] = useState();
    const today = new Date();

    let navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('userId')) {
            navigate("/Dashboard");
        }
    })

    const obj = {
        emailId: emailId,
        password: password,
    }

    const login = async () => {
        console.log(emailId, password);

        let result = await axios.post(`${BASE_URL}/Auth`, obj).then((response) => {
            console.log(response.data);
            if (response.status == 200) {
                if (response.data.type == "Admin") {
                    localStorage.setItem("userId", response.data.userId)
                    localStorage.setItem("emailId", response.data.emailId)
                    localStorage.setItem("jwt-token", response.data.otp)
                    navigate("/Dashboard");
                } else {
                    
                }
            }
            else {
                navigate("/");
            }
            console.log(response.status);
        });

        // localStorage.setItem("user-Info" , JSON.stringify(result))
        // navigate("/Dashboard");
    }
    return (
        <>
            <Helmet>
                <title>Mr.Refill</title>
            </Helmet>
            <div className="account-pages my-5 pt-sm-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6 col-xl-5">
                            <div className="card overflow-hidden">
                                <div className="bg-soft-primary">
                                    <div className="row">
                                        <div className="col-7">
                                            <div className="text-primary p-4">
                                                <h5 className="text-primary">Welcome Back !</h5>
                                                <p>Sign in to continue to Mr.Refill.</p>
                                            </div>
                                        </div>
                                        <div className="col-5 align-self-end">
                                            <img src="assets/images/profile-img.png" alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body pt-0">
                                    <div>
                                        <a href="index.html">
                                            <div className="avatar-md profile-user-wid mb-4">
                                                <span className="avatar-title rounded-circle bg-light">
                                                    <img src="assets/images/logo.svg" alt="" className="rounded-circle" height="34" />
                                                </span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="p-2">
                                        <form className="form-horizontal" id="LoginForm">

                                            <div className="form-group">
                                                <label htmlFor="username">Username</label>
                                                <input type="text" value={emailId} onChange={(e) => { setEmailId(e.target.value) }} className="form-control" id="username" placeholder="Enter username" autoComplete='off' />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="userpassword">Password</label>
                                                <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control" id="userpassword" placeholder="Enter password" />
                                            </div>

                                            <div className="mt-3">
                                                <button type='button' onClick={login} className="btn btn-primary btn-block waves-effect waves-light">Log In</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 text-center">
                                <div>
                                    <p>{today.getFullYear()} © Mr.Refill. Developed by Department of I.C.T.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login