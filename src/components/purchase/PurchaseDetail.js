import React, { useState, useEffect, createContext, useContext, useReducer } from 'react'
import Helmet from 'react-helmet'
import { useParams } from 'react-router-dom';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Footer from '../footer/Footer';
import { BASE_URL, IMAGE_URL } from './../../config/Constants';
import axios from 'axios';

function PurchaseDetail() {

  const [purchaseDetail, setPurchaseDetail] = useState();
  const [productDetail, setProductDetail] = useState();
  const [isLoaded, setIsLoaded] = useState(true);
  var total = 0;

  const { purchaseId } = useParams();

  const getPurchaseDetail = () => {
    axios.get(`${BASE_URL}/PSDetailsExtend/PurchaseDetailsExtend/${purchaseId}`).then((response) => {
      setPurchaseDetail(response.data);
      setIsLoaded(false);
    })
  }

  const getProductDetails = () => {
    axios.get(`${BASE_URL}/PurchaseDetail/${purchaseId}`).then((response) => {
      setProductDetail(response.data);
      setIsLoaded(false);
      // console.log(response);
    })
  }

  useEffect(() => {
    getPurchaseDetail();
    getProductDetails();

    // dispatch({type: "GET_TOTAL"});
    // console.log("abc");
    // }, [state.item]);
  }, []);


  return (
    <>
      <Helmet>
        <title>Mr.Refill | Purchase Detail</title>
      </Helmet>
      <Header />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {(isLoaded) && (purchaseDetail === null || purchaseDetail === "") && (productDetail === null || productDetail === "") ?
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
              : (<>
                <div className="row">
                  <div className="col-12">
                    <div className="page-title-box d-flex align-items-center justify-content-between">
                      <h4 className="mb-0 font-size-18"></h4>

                      <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                          <li className="breadcrumb-item"><a href="javascript: void(0);">Purchase Detail</a></li>
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
                          <h4 className="float-right font-size-16">Order # {purchaseDetail?.purchaseId}</h4>
                          <div className="mb-4">
                            <img src={`${IMAGE_URL}assets/images/logo-light.png`} alt="" height="70" ></img>
                          </div>
                        </div>
                        <hr></hr>

                        <div className="row">
                          <div className="col-sm-6">
                            <address>
                              <strong>Billed From:</strong><br />
                              {purchaseDetail?.userName}<br />
                              {purchaseDetail?.address},<br />
                              Surat
                            </address>
                          </div>
                          <div className="col-sm-6 text-sm-right">
                            <address className="mt-2 mt-sm-0">
                              <strong>Order Date:</strong><br />
                              {purchaseDetail?.purchaseDate}<br /><br />
                            </address>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-6 mt-3">
                            <address>
                              <strong>Contact Details:</strong><br />
                              {purchaseDetail?.emailId}<br />
                              +91 {purchaseDetail?.contact}
                            </address>
                          </div>
                          <div className="col-sm-6 mt-3 text-sm-right">
                            <address>

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
                                <th className="text-right">Quantity</th>
                                <th className="text-right">Unit Price</th>
                                <th className="text-right">Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                productDetail?.map((obj, i) => {
                                  console.log(productDetail)
                                  {
                                    total += parseInt(obj.price) * parseInt(obj.quantity)
                                  }
                                  return (
                                    <tr key={i}>
                                      <td>{i + 1}</td>
                                      <td>{obj.productName}</td>
                                      <td className="text-right">{obj.quantity}</td>
                                      <td className="text-right">{obj.price}</td>
                                      <td className="text-right">{parseInt(obj.price) * parseInt(obj.quantity)}</td>
                                    </tr>
                                  )
                                })
                              }
                              <tr>
                                <td colSpan="4" className="border-0 text-right mt-8">
                                  <h5><strong>Total</strong></h5></td>
                                <td className="border-0 text-right"><h4 className="m-0">&#8377; {total}</h4></td>
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
              </>
              )}


          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PurchaseDetail