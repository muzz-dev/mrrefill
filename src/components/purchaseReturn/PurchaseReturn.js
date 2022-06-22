import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Helmet from 'react-helmet'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Sidebar from '../sidebar/Sidebar'
import axios from 'axios';
import { BASE_URL } from './../../config/Constants';

function PurchaseReturn() {
  const [allPurchaseReturn, setAllPurchaseReturn] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);


  useEffect(() => {
    axios.get(`${BASE_URL}/PurchaseReturn`).then((response) => {
      setAllPurchaseReturn(response.data);
      setIsLoaded(false);
    })
  }, [])
 

  return (
    <>
      <Helmet>
        <title>Mr.Refill | Purchase Return</title>
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
                      <li className="breadcrumb-item"><a href="javascript: void(0);">Purchase Return</a></li>
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
                        <h4 className="card-title text-left">Purchase Return</h4>
                      </div>
                      <div className='col-lg-6'>
                        <div className="text-right card-title">
                          <NavLink to="/AddPurchaseReturn" className="btn btn-primary" tabIndex="-1" role="button" aria-disabled="true">Add Purchase Return</NavLink>
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
                              <th>Bill No.</th>
                              <th>Return Bill No.</th>
                              <th>Dealer Name</th>
                              <th>Amount</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              allPurchaseReturn.map((obj, i) => {
                                return (
                                  <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{obj.purchaseId}</td>
                                    <td>{obj.purchaseReturnId}</td>
                                    <td>{obj.userName}</td>
                                    <td>2500</td>
                                    <td>
                                      <NavLink to={`/PurchaseReturnDetail/${obj.purchaseId}`} className="btn btn-outline-info btn btn-sm waves-effect waves-light" tabIndex="-1" role="button" aria-disabled="true" >Detail</NavLink>&nbsp;
                                    </td>
                                  </tr>
                                )
                              })
                            }

                          </tbody>
                        </table>
                      )}

                    {/* purchaseId (), return Bill No(return Id) , dealer Name , Date, AMount , Action(Detail) */}

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

export default PurchaseReturn