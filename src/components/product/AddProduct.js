import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import axios from 'axios';
import Helmet from 'react-helmet';
import { BASE_URL, ProductImagePath } from './../../config/Constants';

function AddProduct() {
  const [productName, setProductName] = useState();
  const [categoryId, setCategoryName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [ProductImageName, setProductImageName] = useState();
  const [isActive, setIsActive] = useState();
  const [allCategory, getAllCategory] = useState([]);
  let navigate = useNavigate();

  //htmlFor product imgae
  let ProductFileName = "28052022013224682pintrest.jpg";
  const imagesrc = ProductImagePath + ProductFileName;

  const ProductFileSelected = (event) => {
    event.preventDefault();
    ProductFileName = event.target.files[0].name;
    const formData = new FormData();
    formData.append(
      "myFile",
      event.target.files[0],
      event.target.files[0].name
    );
    axios.post(`${BASE_URL}/Product/ProductFile`, formData).then((response) => {
      setProductImageName(response.data);
      console.log(response);
    })
  }

  //Get All Category
  useEffect(() => {
    axios.get(`${BASE_URL}/Category`).then((response) => {
      // console.log(response.data);
      getAllCategory(response.data);
      // console.log(allCategory);
    })
  })

  const objProduct = {
    productName: productName,
    categoryId: categoryId,
    description: description,
    price: price,
    imageUrl: ProductImageName,
    isActive: isActive,
  }

  const addProduct = () => {
    axios.post(`${BASE_URL}/Product`, objProduct).then((response) => {
      console.log(response);
      navigate("/Product");

    })
  }

  //radiobutton
  const handleChange = e => {
    const target = e.target;
    if (target.checked) {
      setIsActive(target.value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(isActive);
  };
  //////////
  return (
    <>
      <Helmet>
        <title>Mr.Refill | Add Product</title>
      </Helmet>
      <Header />
      <Sidebar />
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <div className='row'>
              <div className='col-lg-3'>
              </div>
              <div className='col-lg-6'>
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title mb-4">Add Product</h4>
                    <form onSubmit={handleSubmit}>

                      <div className="form-group">
                        <label htmlFor="formname">Product Name</label>
                        <input type="text" value={productName} onChange={(e) => { setProductName(e.target.value) }} className="form-control" id="formname" autoComplete='off' placeholder="Enter Product Name..." />
                      </div>

                      <div className="form-group">
                        <label className="control-label">Category Name</label>
                        <select className="form-control select2-search-disable" value={categoryId} onChange={(e) => { setCategoryName(e.target.value) }}>
                          <option disabled="true" selected >Select Category Name</option>
                          {
                            allCategory.map((object) => {
                              return (
                                <option value={object.categoryId}>{object.categoryName}</option>
                              )
                            })
                          }
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="fordescription">Description</label>
                        <textarea id="fordescription" value={description} onChange={(e) => { setDescription(e.target.value) }} className="form-control" rows="3" autoComplete='off' placeholder="Enter Description..." ></textarea>
                      </div>

                      <div className="form-group">
                        <label htmlFor="formname">Price</label>
                        <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} className="form-control" id="formname" autoComplete='off' placeholder="Enter Price..." />
                      </div>

                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="formname">Image</label>
                            <input type="file" onChange={ProductFileSelected} className="form-control" id="formname" autoComplete='off' />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <img src={imagesrc} width='100px' height='100px' />
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="d-block mb-3">Is Active</label>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input type="radio" value="Y" checked={isActive == 'Y'} onChange={handleChange} id="customRadioInline1" name="customRadioInline1" className="custom-control-input" />
                          <label className="custom-control-label" htmlFor="customRadioInline1">Yes</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                          <input type="radio" value="N" checked={isActive == 'N'} onChange={handleChange} id="customRadioInline2" name="customRadioInline1" className="custom-control-input" />
                          <label className="custom-control-label" htmlFor="customRadioInline2">No</label>
                        </div>
                      </div>

                      <div className="form-group row justify-content-end">
                        <div className="col-sm-9">
                          <div>
                            <button type='button' onClick={addProduct} className="btn btn-primary w-md mr-3" style={{ alignContent: 'center' }}>Add Product</button>
                            <NavLink to="/Product" className="btn btn-secondary" tabIndex="-1" role="button" aria-disabled="true">Cancle</NavLink>
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

export default AddProduct