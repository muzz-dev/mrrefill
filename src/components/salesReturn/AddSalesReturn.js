import React, { useState, useEffect } from 'react'
import { NavLink , useNavigate } from 'react-router-dom'
import Helmet from 'react-helmet'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Footer from '../footer/Footer'
import { BASE_URL } from '../../config/Constants'
import axios from 'axios'

function AddSalesReturn() {
  const [allSales, setAllSales] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [salesId, setSalesId] = useState();
  const [productId, setProductId] = useState();
  const [qty, setQty] = useState();
  const [remark, setRemark] = useState();
  const [salesReturnDate, setSalesReturnDate] = useState();
  const current = new Date();
  const currentDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  let navigate = useNavigate();

  //for get all User
  const getAllSalesId = () => {
    axios.get(`${BASE_URL}/Sales`).then((response) => {
      // console.log(response.data);
      setAllSales(response.data);
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
    getAllSalesId();
    getAllProduct();
  }, [])

  const objSalesReturn = {
    salesId: salesId,
    productId: productId,
    returnAmount: "25000",
    quantity: qty,
    remark: remark,
    createdAt: salesReturnDate,
    updatedAt:currentDate,
  }

  const addSalesReturn = () => {
    axios.post(`${BASE_URL}/SalesReturn`, objSalesReturn).then((response) => {
      console.log(response.data);
      navigate("/SalesReturn");
    })
  }


  return (
    <>
      <Helmet>
        <title>Mr.Refill | Add Sales Return</title>
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
                    <h4 className="card-title mb-4">Add Sales Return</h4>
                    <form >

                      <div className='row'>
                        <div className="form-group col-lg-6">
                          <label className="control-label">Bill No.</label>
                          <select className="form-control select2-search-disable" value={salesId} onChange={(e) => setSalesId(e.target.value)}>
                            <option disabled={true} selected >Select Bill No. </option>
                            {
                              allSales.map((obj, i) => {
                                return (
                                  <option value={obj.salesId} key={i}>{obj.salesId} - {obj.userName}</option>
                                )
                              })
                            }
                          </select>
                        </div>

                        <div class="form-group col-lg-6 mb-4">
                          <label>Date</label>
                          <div class="input-group">
                            <input type="date" class="form-control" placeholder="dd M, yyyy" data-date-format="dd M, yyyy" data-provide="datepicker" value={salesReturnDate} onChange={(e) => setSalesReturnDate(e.target.value)} />
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
                            <button type='button' onClick={addSalesReturn} className="btn btn-primary w-md mr-3" style={{ alignContent: 'center' }}>Add Sales Return</button>
                            <NavLink to="/SalesReturn" className="btn btn-secondary" tabIndex="-1" role="button" aria-disabled="true">Cancle</NavLink>
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

export default AddSalesReturn