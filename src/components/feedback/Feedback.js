import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import axios from 'axios';
import { BASE_URL } from '../../config/Constants';

function Feedback() {
    const [isLoaded, setIsLoaded] = useState(true);
    const [feedback, setFeedback] = useState([]);

    const getFeedback = () => {
        axios.get(`${BASE_URL}/Feedback`).then((response) => {
            setFeedback(response.data);
            console.log(response.data);
            setIsLoaded(false);
        })
    }

    useEffect(() => {
        getFeedback();
    })
    return (
        <>
            <Helmet>
                <title>Mr.Refill | Feedback</title>
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
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Feedback</a></li>
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
                                                <h4 className="card-title text-left">Feedback</h4>
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
                                                    <table id="datatable-buttons" className="table table-bordered dt-responsive nowrap mt-3" style={{ bordercollapse: "collapse", borderspacing: "0", width: "100%" }}>
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Customer Name</th>
                                                                <th>Feedback</th>
                                                                <th>Date</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                feedback.map((obj, i) => {
                                                                    return (
                                                                        <tr key={i}>
                                                                            <td>{i+1}</td>
                                                                            <td>{obj.username}</td>
                                                                            <td>{obj.feedbackText}</td>
                                                                            <td>{obj.date}</td>
                                                                        </tr>
                                                                    );
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

export default Feedback