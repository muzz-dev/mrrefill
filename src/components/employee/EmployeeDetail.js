import React, { useState, useEffect } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Helmet from 'react-helmet';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_URL } from './../../config/Constants';

function EmployeeDetail() {

  const [allUser, setAllUser] = useState([]);
  const [type, setType] = useState();

  const { userId } = useParams();

  let navigate = useNavigate();
  //get All User
  const getAllUser = () => {
    axios.get(`${BASE_URL}/User/${userId}`).then((response) => {
      // console.log(response.data);
      setAllUser(response.data);
    })
  }

  const objEmployee = {
    userId: allUser.userId,
    name: allUser.name,
    contact: allUser.contact,
    emailId: allUser.emailId,
    address: allUser.address,
    areaId: allUser.areaId,
    isBlock: allUser.isBlock,
    companyName: allUser.companyName,
    gstNumber: allUser.gstNumber,
    isVerify: allUser.isVerify,
    registerBy: "Online",
    createdAt: "May 11 2022",
    updatedAt: "null",
    password: allUser.password,
    type: type,
  }

  //Define either user or Employee
  const editUser = () => {
    axios.put(`${BASE_URL}/User/${userId}`, objEmployee).then((response) => {
      // console.log(response);
      navigate("/Employee");
    })
  }

  useEffect(() => {
    getAllUser();
  })
  return (
    <>
      <Helmet>
        <title>Mr.Refill | Employee Detail</title>
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
                      <li className="breadcrumb-item"><a href="javascript: void(0);">Employee Detail</a></li>
                      <li className="breadcrumb-item active">Mr.Refill</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className='col-lg-2'>
                &nbsp;
              </div>
              <div className="col-xl-8 col-sm-9">
                <div className="card text-center">
                  <div className="card-body">
                    <div className="avatar-sm mx-auto mb-4">
                      <span className="avatar-title rounded-circle bg-soft-primary text-primary font-size-16">
                        D
                      </span>
                    </div>
                    <h4 className="font-size-20"><a href="#" className="text-dark">{allUser.name}</a></h4>
                    <p className="text-muted font-size-14">{allUser.contact}</p>
                    <div className='col-lg-3'>
                      &nbsp;
                    </div>
                    <div>
                      <div className="table-responsive">
                        <table className="table mb-0">
                          <tbody>
                            <tr>
                              <th scope="row"><h5>Address</h5></th>
                              <th scope="row" colSpan={2}><h5>{allUser.address}</h5></th>
                            </tr>
                            <tr>
                              <th scope="row"><h5>E-mail</h5></th>
                              <th scope="row" colSpan={2}><h5>{allUser.emailId}</h5></th>
                            </tr>
                            <tr>
                              <th scope="row"><h5>Area</h5></th>
                              <th scope="row" colSpan={2}><h5>{allUser.areaName}</h5></th>
                            </tr>
                            <tr>
                              <th scope="row"><h5>Is Block</h5></th>
                              <th scope="row" colSpan={2}><h5>{allUser.isBlock}</h5></th>
                            </tr>
                            <tr>
                              <th scope="row"><h5>Role</h5></th>
                              <th scope="row" colSpan={2}>
                                <h5>
                                  <div className="col-sm-10 float-right">
                                    <select className="form-control" value={type} onChange={(e) => { setType(e.target.value) }}>
                                      <option disabled="true" selected>Select</option>
                                      <option>User</option>
                                      <option>Employee</option>
                                    </select>
                                  </div>
                                </h5>
                              </th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className='col-lg-3'>
                      &nbsp;
                    </div>
                    <div className='m-35'>
                      <button type="button" onClick={editUser} className="btn btn-primary btn-md btn-block waves-effect waves-light mb-1" style={{ fontSize: "16px" }}>Define User</button>
                    </div>
                  </div>
                  <div className="card-footer bg-transparent border-top">
                    <div className="contact-links d-flex font-size-20">
                      <div className="flex-fill">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Call"><i className="bx bx-phone"></i></a>
                      </div>
                      <div className="flex-fill">
                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Email"><i className="bx bx-envelope"></i></a>
                      </div>
                    </div>
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

export default EmployeeDetail