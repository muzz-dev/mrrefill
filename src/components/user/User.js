import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import user from '../../apis/User';
import Helmet from 'react-helmet';

function User() {
    const [allUser, getUser] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);

    //Search
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        try {
            user.getAll().then((response) => {
                const { data: { data } } = response;
                // console.log(response.data);
                getUser(response.data);
                setIsLoaded(false);
            })
        } catch (error) {
            console.error();
        }
        
    }, [])
    return (
        <>
            <Helmet>
                <title>Mr.Refill | User</title>
            </Helmet>
            <Header />
            <Sidebar />
            <div className="main-content">
                <div className="page-content">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 className="mb-0 font-size-18"></h4>

                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">User</a></li>
                                            <li className="breadcrumb-item active">Mr.Refill</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">

                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <h4 className="card-title text-left">User</h4>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div className="text-right card-title">
                                                    <NavLink to="/AddUser" className="btn btn-primary" tabIndex="-1" role="button" aria-disabled="true">Add User</NavLink>
                                                </div>
                                            </div>
                                        </div>

                                        {isLoaded ?
                                            <div className='d-flex align-items-center justify-content-center'>
                                                <div className="spinner-grow text-primary m-1" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                                <div className="spinner-grow text-secondary m-1" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                                <div className="spinner-grow text-success m-1" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                                <div className="spinner-grow text-info m-1" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                                <div className="spinner-grow text-warning m-1" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                                <div className="spinner-grow text-danger m-1" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                                <div className="spinner-grow text-dark m-1" role="status">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            </div>
                                            : (
                                                <>
                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-6">
                                                        </div>
                                                        <div className="col-sm-12 col-md-6">
                                                            <div>
                                                                <input
                                                                    type="text" className="form-control form-control-md mb-3 mt-0" placeholder="Search Here ..." style={{ "float": "right", width: "350px" }}
                                                                    onChange={(e) => {
                                                                        setSearchTerm(e.target.value);
                                                                    }}
                                                                />

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <table id="datatable-buttons" className="table table-bordered dt-responsive nowrap" style={{ bordercollapse: "collapse", borderspacing: "0", width: "100%" }}>
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>User Name</th>
                                                                <th>Contact</th>
                                                                <th>E-mail</th>
                                                                <th>Company Name</th>
                                                                <th>Area</th>
                                                                <th>Is Verify</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                allUser.filter(val=>{
                                                                    if(searchTerm ===''){
                                                                        return val;
                                                                    }else if(
                                                                        val.name.toLowerCase().includes(searchTerm.toLowerCase()) || val.contact.toLowerCase().includes(searchTerm.toLowerCase()) || val.emailId.toLowerCase().includes(searchTerm.toLowerCase())|| val.companyName.toLowerCase().includes(searchTerm.toLowerCase())|| val.areaName.toLowerCase().includes(searchTerm.toLowerCase())
                                                                    ){
                                                                        return val;
                                                                    }
                                                                }).map((obj, i) => {
                                                                    return (
                                                                        <tr key={obj.userId}>
                                                                            <td>{i + 1}</td>
                                                                            <td>{obj.name}</td>
                                                                            <td>{obj.contact}</td>
                                                                            <td>{obj.emailId}</td>
                                                                            <td>{obj.companyName}</td>
                                                                            <td>{obj.areaName}</td>
                                                                            <td>{obj.isVerify}</td>
                                                                            <td>
                                                                                <NavLink to={`/UserDetail/${obj.userId}`} className="btn btn-outline-info btn btn-sm waves-effect waves-light" tabIndex="-1" role="button" aria-disabled="true" >Details</NavLink>&nbsp;
                                                                            </td>
                                                                        </tr>
                                                                    )
                                                                })
                                                            }

                                                        </tbody>
                                                    </table>
                                                </>
                                            )}
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

export default User