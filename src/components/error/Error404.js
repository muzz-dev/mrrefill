import React from 'react'
import Login from './../login/Login';
import Helmet from 'react-helmet';

function Error404() {
    return (
        <>
            <Helmet>
                <title>Mr.Refill | Error</title>
            </Helmet>
            <div className="account-pages my-5 pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center mb-5">
                                <h1 className="display-2 font-weight-medium">4<i className="bx bx-buoy bx-spin text-primary display-3"></i>1</h1>
                                <h4 className="text-uppercase">Unauthorized Access</h4>
                                <div className="mt-5 text-center">
                                    <a className="btn btn-primary waves-effect waves-light" href="/">Back to Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-xl-6">
                            <div>
                                <img src="assets/images/error-img.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error404