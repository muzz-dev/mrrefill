import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import { Helmet } from 'react-helmet'
import ExchangeCartridge from '../../apis/ExchangeCartridge';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from './../../config/Constants';
function RequestDetail() {

  const [exchnageRequest, getExchangeRequest] = useState([]);
  const [userName, setuserName] = useState('');
  const [address, setAddress] = useState('');
  const [areaId, setareaId] = useState();
  const [areaName, setareaName] = useState('');
  const [remark, setremark] = useState('');
  const [userId, setUserId] = useState('');
  const [datetime, setdatetime] = useState();
  const [paymentMode, setPaymentMode] = useState();
  const [amount, setAmount] = useState();
  const [id, setId] = useState();
  const [areaByEmp, setAreaByEmp] = useState([]);
  const current = new Date();
  const currentDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const { exchangeId } = useParams();

  let navigate = useNavigate();

  //get All Details
  const getAllExchangeCartridgeRequest = () => {
    try {
      axios.get(`${BASE_URL}/ExchangeCartridge/AllocatedRequestDetail/${exchangeId}`).then((response) => {
        console.log(response.data);
        const { data: { data } } = response;
        // console.log(response.data);
        getExchangeRequest(response.data);
        setuserName(response.data.userName);
        setAddress(response.data.address);
        setareaName(response.data.areaName);
        setId(response.data.assignId);
        setremark(response.data.remark);
        setareaId(response.data.areaId);
        setdatetime(response.data.datetime);
        setPaymentMode(response.data.paymentMode);
        setAmount(response.data.amount);
      })
    } catch (error) {
      console.error("Something Wrong Please Check Again");
    }
  }

  const object = {
    exchangeId: exchnageRequest.exchangeId,
    userId: exchnageRequest.userId,
    cartridgeId: exchnageRequest.cartridgeId,
    address: exchnageRequest.address,
    areaId: exchnageRequest.areaId,
    remark: exchnageRequest.remark,
    problemId : exchnageRequest.problemId,
    requestDate: exchnageRequest.requestDate,
    status: "Assign",
    createdAt: exchnageRequest.createdAt,
    updatedAt: exchnageRequest.updatedAt,
    amount: exchnageRequest.amount,
    datetime: exchnageRequest.datetime,
    paymentMode: exchnageRequest.paymentMode,
  }


  //getEmployee By Area
  const getEmployeeByArea = () => {
    axios.get(`${BASE_URL}/User/GetEmployeeAreaWise/${areaId}`).then((response) => {
      // console.log(response.data);
      setAreaByEmp(response.data);
    })
  }

  //for Assign Employee
  const obj = {
    userId: userId,
    exchangeId: exchangeId,
    status: "pending",
    amount: amount,
    paymentMode: paymentMode,
    isPay : "N",
    datetime: datetime,
    createdAt: "May 11 2022  8:27PM",
    updatedAt: currentDate,
  }

  const assignEmployee = () => {
    axios.post(`${BASE_URL}/AssignRequest`, obj).then((response) => {
      console.log(response);
      axios.put(`${BASE_URL}/ExchangeCartridge/${exchnageRequest.exchangeId}`, object).then((result) => {
        console.log(result);
      })
      navigate("/Request");
    })
  }

  useEffect(() => {
    console.log("In Use Effect");
    getAllExchangeCartridgeRequest();
  }, [])

  useEffect(() => {
    getEmployeeByArea();
    // }
  })

  return (
    <>
      <Helmet>
        <title>Mr.Refill | Request Details</title>
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
                      <li className="breadcrumb-item"><a href="javascript: void(0);">Request Detail</a></li>
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

                      </span>
                    </div>

                    <h4 className="font-size-20"><a href="#" className="text-dark">{userName}</a></h4>
                    <div className='col-lg-3'>
                      &nbsp;
                    </div>
                    <div>
                      <div className="table-responsive">
                        <table className="table mb-0">
                          <tbody>
                            <tr>
                              <th scope="row"><h5>Address</h5></th>
                              <th scope="row" colSpan={2}><h5>{address}</h5></th>
                            </tr>
                            <tr>
                              <th scope="row"><h5>Area</h5></th>
                              <th scope="row" colSpan={2}><h5>{areaName}</h5></th>
                            </tr>
                            <tr>
                              <th scope="row"><h5>Remark</h5></th>
                              <th scope="row" colSpan={2}><h5>{remark}</h5></th>
                            </tr>

                            {(id == 0) ?
                              <tr>
                                <th scope="row"><h5>Employee List</h5></th>
                                <th scope="row" colSpan={2}>
                                  <h5>
                                    <div className="col-sm-10 float-right">
                                      <select className="form-control" value={userId} onChange={(e) => { setUserId(e.target.value) }}>
                                        <option selected value=""> Select Employee</option>
                                        {
                                          areaByEmp.map((obj) => {
                                            return (
                                              <option value={obj.userId}>{obj.name}</option>
                                            )
                                          })
                                        }
                                      </select>
                                    </div>
                                  </h5>
                                </th>
                              </tr>
                              :
                              <>
                                <tr>
                                  <th scope="row"><h5>Employee Name</h5></th>
                                  <th scope="row" colSpan={2}><h5>{exchnageRequest.employeeName}</h5></th>
                                </tr>
                                <tr>
                                  <th scope="row"><h5>Employee Contact</h5></th>
                                  <th scope="row" colSpan={2}><h5>{exchnageRequest.employeeContactNumber}</h5></th>
                                </tr>
                                <tr>
                                  <th scope="row"><h5>Payable Amount</h5></th>
                                  <th scope="row" colSpan={2}><h5>{exchnageRequest.amount}</h5></th>
                                </tr>
                                <tr>
                                  <th scope="row"><h5>Payment Mode</h5></th>
                                  <th scope="row" colSpan={2}><h5>{exchnageRequest.paymentMode}</h5></th>
                                </tr>
                                <tr>
                                  <th scope="row"><h5>Closing Date</h5></th>
                                  <th scope="row" colSpan={2}><h5>{exchnageRequest.datetime}</h5></th>
                                </tr>
                              </>
                            }
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className='col-lg-3'>
                      &nbsp;
                    </div>
                    {(id == 0) ?
                      <div className='m-35'>
                        <button type="button" onClick={assignEmployee} className="btn btn-primary btn-md btn-block waves-effect waves-light mb-1" style={{ fontSize: "16px" }}>Allocate Employee</button>
                      </div>
                      : null}
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

export default RequestDetail