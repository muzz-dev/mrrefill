import React, { useState, useEffect } from 'react'
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import Helmet from 'react-helmet';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from './../../config/Constants';

function Sales() {
  const [allSales, setAllSales] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    axios.get(`${BASE_URL}/Sales`).then((response) => {
      setAllSales(response.data);
      setIsLoaded(false);
    })
  })
  return (
    <>
      <Helmet>
        <title>Mr.Refill | Sales</title>
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
                      <li className="breadcrumb-item"><a href="javascript: void(0);">Sales</a></li>
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
                        <h4 className="card-title text-left">Sales</h4>
                      </div>
                      <div className='col-lg-6'>
                        <div className="text-right card-title">
                          <NavLink to="/AddSales" className="btn btn-primary" tabIndex="-1" role="button" aria-disabled="true">Add Sales</NavLink>
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
                        <table id="datatable-buttons" className="table table-bordered dt-responsive nowrap" style={{ bordercollapse: "collapse", borderspacing: "0", width: "100%" }}>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Bill No</th>
                              <th>Customer Name</th>
                              <th>Company Name</th>
                              <th>Sales Date</th>
                              <th>Amount</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              allSales.map((obj, i) => {
                                return (
                                  <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{obj.salesId}</td>
                                    <td>{obj.userName}</td>
                                    <td>{obj.companyName}</td>
                                    <td>{obj.salesDate}</td>
                                    <td>{obj.totalPayment}</td>
                                    <td>
                                      <NavLink to={`/EditSales/${obj.salesId}`} className="btn btn-outline-primary btn btn-sm waves-effect waves-light" tabIndex="-1" role="button" aria-disabled="true" >Edit</NavLink>&nbsp;
                                      <NavLink to={`/SalesDetail/${obj.salesId}`} className="btn btn-outline-info btn btn-sm waves-effect waves-light" tabIndex="-1" role="button" aria-disabled="true" >Detail</NavLink>
                                    </td>
                                  </tr>
                                )
                              })
                            }

                          </tbody>
                        </table>
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

export default Sales