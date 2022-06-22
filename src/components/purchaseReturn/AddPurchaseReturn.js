import React, { useState, useEffect } from 'react'
import { NavLink , useNavigate } from 'react-router-dom'
import Helmet from 'react-helmet'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Footer from '../footer/Footer'
import { BASE_URL } from '../../config/Constants'
import axios from 'axios'

function AddPurchaseReturn() {
  const [allPurchase, setAllPurchase] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [purchaseId, setpurchaseId] = useState();
  const [productId, setProductId] = useState();
  const [qty, setQty] = useState();
  const [remark, setRemark] = useState();
  const [purchaseReturnDate, setPurchaseReturnDate] = useState();
  const current = new Date();
  const currentDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  let navigate = useNavigate();

  //for get all User
  const getAllPurchaseId = () => {
    axios.get(`${BASE_URL}/Purchase`).then((response) => {
      // console.log(response.data);
      setAllPurchase(response.data);
    })
  }

  //for All Product
  const getAllProduct = () => {
    axios.get(`${BASE_URL}/Product`).then((response) => {
      // console.log(response.data);
      setAllProduct(response.data);
    })
  }

  useEffect(() => {
    getAllPurchaseId();
    getAllProduct();
  }, [])

  const objPurchaseReturn = {
    purchaseId: purchaseId,
    productId: productId,
    returnAmount: "25000",
    quantity: qty,
    remark: remark,
    createdAt: purchaseReturnDate,
    updatedAt:currentDate,
  }

  const addPurchaseReturn = () => {
    axios.post(`${BASE_URL}/PurchaseReturn`, objPurchaseReturn).then((response) => {
      console.log(response.data);
      navigate("/PurchaseReturn");
    })
  }


  return (
    <>
      <Helmet>
        <title>Mr.Refill | Add Purchase Return</title>
      </Helmet>
      <Header />
      <Sidebar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className='row'>
              <div className='col-lg-3'>
              </div>
              <div className='col-lg-6'>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title mb-4">Add Purchase Return</h4>
                    <form >

                      <div className='row'>
                        <div className="form-group col-lg-6">
                          <label className="control-label">Bill No.</label>
                          <select className="form-control select2-search-disable" value={purchaseId} onChange={(e) => setpurchaseId(e.target.value)}>
                            <option disabled={true} selected >Select Bill No. </option>
                            {
                              allPurchase.map((obj, i) => {
                                return (
                                  <option value={obj.purchaseId} key={i}>{obj.purchaseId} - {obj.userName}</option>
                                )
                              })
                            }
                          </select>
                        </div>

                        <div class="form-group col-lg-6 mb-4">
                          <label>Date</label>
                          <div class="input-group">
                            <input type="date" class="form-control" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-provide="datepicker" value={purchaseReturnDate} onChange={(e) => setPurchaseReturnDate(e.target.value)} />
                            <div class="input-group-append">
                              <span class="input-group-text"><i class="mdi mdi-calendar"></i></span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='row'>
                        <div className="form-group col-lg-6">
                          <label className="control-label">Product Name</label>
                          <select name='productId' value={productId} onChange={(e) => setProductId(e.target.value)} className="form-control select2-search-disable"
                          >
                            <option disabled={true} selected value="">Select Product </option>
                            {
                              allProduct.map((obj, i) => {
                                return (
                                  <option value={obj.productId} key={i}>{obj.productName}</option>
                                )

                              })
                            }
                          </select>
                        </div>

                        <div className="form-group col-lg-6">
                          <label htmlFor="quantity">Quantity</label>
                          <input type="text" name='qty' value={qty} onChange={(e) => setQty(e.target.value)} id="quantity" className="form-control" placeholder='Enter Quentity..' autoComplete='off' />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="fordescription">Remark</label>
                        <textarea id="fordescription" value={remark} onChange={(e) => setRemark(e.target.value)} className="form-control" rows="3" autoComplete='off' placeholder="Enter Remark..." ></textarea>
                      </div>

                      <div className="form-group row justify-content-end">
                        <div className="col-sm-9">
                          <div>
                            <button type='button' onClick={addPurchaseReturn} className="btn btn-primary w-md mr-3" style={{ alignContent: 'center' }}>Add Purchase Return</button>
                            <NavLink to="/PurchaseReturn" className="btn btn-secondary" tabIndex="-1" role="button" aria-disabled="true">Cancle</NavLink>
                          </div>
                        </div>
                      </div>
                    </form>
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

export default AddPurchaseReturn