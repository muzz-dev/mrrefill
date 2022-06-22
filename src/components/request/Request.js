import React, { useEffect, useState } from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import { Helmet } from 'react-helmet';
import { NavLink } from "react-router-dom";
import ExchangeCartridge from '../../apis/ExchangeCartridge';

function Request() {

    const [allRequest, getRequest] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);

    //Search
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        try {
            ExchangeCartridge.getAll().then((response) => {
                console.log(response.data);
                const { data: { data } } = response;
                getRequest(response.data);
                setIsLoaded(false);
            })
        } catch (error) {
            console.error("Something Wrong Please Check Again");
        }
    })

    return (
        <>
            <Helmet>
                <title>Mr.Refill | Request</title>
            </Helmet>
            <Header />
            <Sidebar />
            <div className="main-content">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="page-title-box d-flex align-items-center justify-content-between">
                                    <h4 className="mb-0 font-size-18"></h4>
                                    <div className="page-title-right">
                                        <ol className="breadcrumb m-0">
                                            <li className="breadcrumb-item"><a href="#">Request</a></li>
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
                                        <h4 className="card-title">Request</h4>
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
                                                                <th>Customer Name</th>
                                                                <th>Address</th>
                                                                <th>Area</th>
                                                                <th>Status</th>
                                                                <th>Remark</th>
                                                                <th>Date</th>
                                                                <th>Cartridge Name</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                allRequest.filter(val => {
                                                                    if (searchTerm === '') {
                                                                        return val;
                                                                    } else if (
                                                                        val.userName.toLowerCase().includes(searchTerm.toLowerCase()) || val.areaName.toLowerCase().includes(searchTerm.toLowerCase())
                                                                    ) {
                                                                        return val;
                                                                    }
                                                                }).map((obj, i) => {
                                                                    return (
                                                                        <tr key={obj.exchangeId}>
                                                                            <td>{i + 1}</td>
                                                                            <td>{obj.userName}</td>
                                                                            <td>{obj.address}</td>
                                                                            <td>{obj.areaName}</td>
                                                                            <td>
                                                                                {
                                                                                    (obj.status === 'pending') ?
                                                                                        <span className="badge badge-danger" style={{ fontSize: "12px" }}>PENDING</span>
                                                                                        : (obj.isComplete === 'complete') ? <span className="badge badge-info" style={{ fontSize: "12px" }}>COMPLETE</span> : <span className="badge badge-success" style={{ fontSize: "12px" }}>ASSIGN</span>
                                                                                }
                                                                            </td>
                                                                            <td>{obj.remark}</td>
                                                                            <td>{obj.requestDate}</td>
                                                                            <td>{obj.cartridgeName}</td>
                                                                            <td> <NavLink to={`/RequestDetail/${obj.exchangeId}`} className="btn btn-outline-info btn btn-sm waves-effect waves-light" tabIndex="-1" role="button" aria-disabled="true" >Details</NavLink>&nbsp;</td>
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

export default Request