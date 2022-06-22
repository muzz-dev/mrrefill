import React,{useState,useEffect} from 'react'
import Helmet from 'react-helmet'
import { useParams } from 'react-router-dom';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import { IMAGE_URL, BASE_URL } from './../../config/Constants';
import axios from 'axios';

function SalesReturnDetail() {
    const [salesReturn ,setSalesReturn] =useState();

    const {salesReturnId} =useParams();

    const getSalesReturnDetail = () =>{
      axios.get(`${BASE_URL}/SalesReturn/${salesReturnId}`).then((response)=>{
        setSalesReturn(response.data);
      })
    }
  
    useEffect(()=>{
      getSalesReturnDetail();
    })
  return (
    <>
      <Helmet>
        <title>Mr.Refill | Sales Return Detail</title>
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
                      <li className="breadcrumb-item"><a href="javascript: void(0);">Sales Return Detail</a></li>
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
                    <p className="card-title-desc">
                    </p>
                    <div className="invoice-title">
                      <h4 className="float-right font-size-16">Order # {salesReturn?.salesReturnId}</h4>
                      <div className="mb-4">
                        <img src={`${IMAGE_URL}assets/images/logo-light.png`} alt="" height="70" ></img>
                      </div>
                    </div>
                    <hr></hr>

                    <div className="row">
                      <div className="col-sm-6">
                        <address>
                          <strong>Billed To:</strong><br />
                          {salesReturn?.userName}<br />
                          {salesReturn?.email}<br />
                          +91 {salesReturn?.contact}<br />
                          {salesReturn?.address},<br />
                          Surat
                        </address>
                      </div>
                      <div className="col-sm-6 text-sm-right">
                        <address className="mt-2 mt-sm-0">
                          <strong>Sales Date:</strong><br />
                          {salesReturn?.salesDate}
                        </address>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-6 mt-3">
                        <address>
                          <strong>Problem</strong><br />
                          {salesReturn?.remark}
                        </address>
                      </div>
                      <div className="col-sm-6 mt-3 text-sm-right">
                        <address>
                          <strong>Return Date:</strong><br />
                          {salesReturn?.returnDate}<br /><br />
                        </address>
                      </div>
                    </div>

                    <div className="py-2 mt-3">
                      <h3 className="font-size-15 font-weight-bold">Order summary</h3>
                    </div>

                    <div className="table-responsive">
                      <table className="table table-nowrap">
                        <thead>
                          <tr>
                            <th style={{ width: "70px" }}>No.</th>
                            <th>Item</th>
                            <th className="text-right">Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>01</td>
                            <td>{salesReturn?.productName}</td>
                            <td className="text-right">{salesReturn?.returnAmount}</td>
                          </tr>

                          <tr>
                            <td colspan="2" className="text-right">Sub Total</td>
                            <td className="text-right">{salesReturn?.returnAmount}</td>
                          </tr>
                          <tr>
                            <td colspan="2" className="border-0 text-right">
                              <strong>Total</strong></td>
                            <td className="border-0 text-right"><h4 className="m-0">{salesReturn?.returnAmount}</h4></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="d-print-none">
                      <div className="float-right">
                        <a href="javascript:window.print()" className="btn btn-success waves-effect btn-lg waves-light mr-1"><i className="fa fa-print"></i></a>
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

export default SalesReturnDetail