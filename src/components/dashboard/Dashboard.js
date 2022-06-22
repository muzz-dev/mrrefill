import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import Sidebar from '../sidebar/Sidebar'
import Header from '../header/Header'
import { BASE_URL, IMAGE_URL } from './../../config/Constants';
import Helmet from 'react-helmet';
import axios from 'axios';
import { NavLink } from 'react-router-dom'
import Routers from '../../routes/Routers'

function Dashboard() {
  const [allRequest, setAllRequest] = useState([]);
  const [allEmployee, setAllEmpoyee] = useState([]);
  const [allCustomer, setAllCustomer] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);


  const getAllRequest = () => {
    axios.get(`${BASE_URL}/ExchangeCartridge`).then((response) => {
      setAllRequest(response.data);
      setIsLoaded(false);
    })
  }

  const getAllEmployee = () => {
    axios.get(`${BASE_URL}/UserListing/GetEmployeeList`).then((response) => {
      setAllEmpoyee(response.data);
    })
  }

  const getAllCustomer = () => {
    axios.get(`${BASE_URL}/UserListing/List/GetUserList`).then((response) => {
      setAllCustomer(response.data);
    })
  }

  const getAlProduct = () => {
    axios.get(`${BASE_URL}/Product`).then((response) => {
      setAllProduct(response.data);
    })
  }

  useEffect(() => {
    getAllRequest();
    getAllEmployee();
    getAllCustomer();
    getAlProduct();
  })


  return (
    <>
      <Helmet>
        <title>Mr.Refill | Dashboard</title>
      </Helmet>
      <Header />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                  <h4 className="mb-0 font-size-18">Dashboard</h4>
                  <div className="page-title-right">
                    <ol className="breadcrumb m-0">
                      <li className="breadcrumb-item"><a href="javascript: void(0);">Dashboards</a></li>
                      <li className="breadcrumb-item active">Mr.Refill</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-4">
                <div className="card overflow-hidden">
                  <div className="bg-soft-primary">
                    <div className="row">
                      <div className="col-7">
                        <div className="text-primary p-3">
                          <h5 className="text-primary">Welcome Back !</h5>
                          <p>Mr.Refill</p>
                        </div>
                      </div>
                      <div className="col-5 align-self-end">
                        <img src="assets/images/profile-img.png" alt="" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                  <div className="card-body pt-0">
                    <div className="row">
                      <div className="col-sm-5">
                        <div className="avatar-md profile-user-wid mb-4">
                          <img src={`${IMAGE_URL}/assets/images/users/avatar-1.png`} alt="" className="img-thumbnail rounded-circle mb-0" />
                        </div>
                        <h5 className="font-size-15 text-truncate mb-0">Administrator</h5>
                        <p className="text-muted mb-0 text-truncate">admin@mrrefill.com</p>
                      </div>

                      <div className="col-sm-7">
                        <div className="pt-4">
                          <div className="row">
                            <div className="col-6">
                              <h5 className="font-size-15">2022-'23</h5>
                              <p className="text-muted mb-0">Financial Year</p>
                            </div>
                            <div className="col-6">
                              <h5 className="font-size-15" style={{color:"green"}}>&#8377;10,000</h5>
                              <p className="text-muted mb-0">Profit/Loss</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card mini-stats-wid">
                      <NavLink to={Routers.REQUEST}>
                        <div className="card-body">
                          <div className="media">
                            <div className="media-body">
                              <p className="text-muted font-weight-medium">Requests</p>
                              <h4 className="mb-0">{allRequest.length}</h4>
                            </div>
                            <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                              <span className="avatar-title">
                                <i className="bx bx-copy-alt font-size-24"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mini-stats-wid">
                      <NavLink to={Routers.EMPLOYEE}>
                        <div className="card-body">
                          <div className="media">
                            <div className="media-body">
                              <p className="text-muted font-weight-medium">Employee</p>
                              <h4 className="mb-0">{allEmployee.length}</h4>
                            </div>

                            <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                              <span className="avatar-title rounded-circle bg-primary">
                                <i className="bx bx-archive-in font-size-24"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mini-stats-wid">
                      <NavLink to={Routers.USER}>
                        <div className="card-body">
                          <div className="media">
                            <div className="media-body">
                              <p className="text-muted font-weight-medium">Customer</p>
                              <h4 className="mb-0">{allCustomer.length}</h4>
                            </div>

                            <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                              <span className="avatar-title rounded-circle bg-primary">
                                <i className="bx bx-purchase-tag-alt font-size-24"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="card mini-stats-wid">
                      <div className="card-body">
                        <div className="media">
                          <div className="media-body">
                            <p className="text-muted font-weight-medium">Purchase</p>
                            <h4 className="mb-0">&#8377;48,235</h4>
                          </div>

                          <div className="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                            <span className="avatar-title">
                              <i className="bx bx-copy-alt font-size-24"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mini-stats-wid">
                      <div className="card-body">
                        <div className="media">
                          <div className="media-body">
                            <p className="text-muted font-weight-medium">Sales</p>
                            <h4 className="mb-0">&#8377;35,700</h4>
                          </div>

                          <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                            <span className="avatar-title rounded-circle bg-primary">
                              <i className="bx bx-archive-in font-size-24"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card mini-stats-wid">
                      <NavLink to={Routers.PRODUCT}>
                      <div className="card-body">
                        <div className="media">
                          <div className="media-body">
                            <p className="text-muted font-weight-medium">Product</p>
                            <h4 className="mb-0">{allProduct.length}</h4>
                          </div>
                          <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                            <span className="avatar-title rounded-circle bg-primary">
                              <i className="bx bx-purchase-tag-alt font-size-24"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      </NavLink>
                    </div>
                  </div>
                </div>

              </div>
            </div>


            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title mb-4">Latest Requests</h4>
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

                        <div className="table-responsive">
                          <table className="table table-centered table-nowrap mb-0">
                            <thead className="thead-light">
                              <tr>
                                <th>#</th>
                                <th>Customer Name</th>
                                <th>Area</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Problem</th>
                                <th>Cartridge Name</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                allRequest.filter(val => {
                                  if (val.status == 'pending') {
                                    return val;
                                  }
                                }).map((obj, i) => {
                                  return (
                                    <tr key={i}>
                                      <td>{i + 1}</td>
                                      <td>{obj.userName}</td>
                                      <td>{obj.areaName}</td>
                                      <td>{obj.requestDate}</td>
                                      <td>
                                        {(obj.status === 'pending') ?
                                          <span className="badge badge-danger" style={{ fontSize: "12px" }}>PENDING</span>
                                          : <span className="badge badge-success" style={{ fontSize: "12px" }}>ASSIGN</span>}
                                      </td>
                                      <td>{obj.remark}</td>
                                      <td>{obj.cartridgeName}</td>
                                      <td>
                                        <NavLink to={`/RequestDetail/${obj.exchangeId}`} >
                                          <button class="btn btn-primary btn-sm btn-rounded waves-effect waves-light" type='button'>
                                            Details
                                          </button>
                                        </NavLink>
                                      </td>
                                    </tr>
                                  )
                                })
                              }
                            </tbody>
                          </table>
                        </div>
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

export default Dashboard