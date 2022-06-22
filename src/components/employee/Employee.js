import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import Helmet from 'react-helmet';
import employee from '../../apis/Employee';

function Employee() {
    const [allEmp, getAllEmp] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);

    //Search
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        employee.getAll().then((response) => {
            const { data: { data } } = response;
            getAllEmp(response.data);
            setIsLoaded(false);
            // console.log(response);
        })
    })
    return (
        <>
            <Helmet>
                <title>Mr.Refill | Employee</title>
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
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Employee</a></li>
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

                                        <h4 className="card-title">Employee</h4>

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
                                                                <th>Employee Name</th>
                                                                <th>Contact</th>
                                                                <th>Area Name</th>
                                                                <th>E-mail</th>
                                                                <th>Action</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                allEmp.filter(val=>{
                                                                    if(searchTerm ===''){
                                                                        return val;
                                                                    }else if(
                                                                        val.name.toLowerCase().includes(searchTerm.toLowerCase()) || val.contact.toLowerCase().includes(searchTerm.toLowerCase()) || val.area.areaName.toLowerCase().includes(searchTerm.toLowerCase()) || val.emailId.toLowerCase().includes(searchTerm.toLowerCase())
                                                                    ){
                                                                        return val;
                                                                    }
                                                                }).map((obj, i) => {
                                                                    return (
                                                                        <tr key={i}>
                                                                            <td>{obj.name}</td>
                                                                            <td>{obj.contact}</td>
                                                                            <td>{obj.area.areaName}</td>
                                                                            <td>{obj.emailId}</td>
                                                                            <td>
                                                                                <NavLink to={`/EmployeeDetail/${obj.userId}`} className="btn btn-outline-info btn btn-sm waves-effect waves-light" tabIndex="-1" role="button" aria-disabled="true" >Details</NavLink>&nbsp;
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

export default Employee