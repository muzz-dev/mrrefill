import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'
import Footer from '../footer/Footer'
import { NavLink, Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { BASE_URL, ProductImagePath } from '../../config/Constants'

function Product() {
    const [allProduct, getAllProduct] = useState([]);
    const [productDelete, SetProductDelete] = useState();
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {
        axios.get(`${BASE_URL}/Product`).then((response) => {
            getAllProduct(response.data);
            setIsLoaded(false);
            // console.log(response.data);
        })
    })

    //delete
    const DeleteProduct = (pId) => {
        axios.delete(`${BASE_URL}/Product/${pId}`).then((res) => {
            setShow(false);
        })
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (pId) => {
        SetProductDelete(pId);
        setShow(true)
    };

    return (
        <>
            <Helmet>
                <title>Mr.Refill | Product</title>
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
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Product</a></li>
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
                                                <h4 className="card-title text-left">Product</h4>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div className="text-right card-title">
                                                    <NavLink to="/AddProduct" className="btn btn-primary" tabIndex="-1" role="button" aria-disabled="true">Add Product</NavLink>
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
                                                            <th>Product Name</th>
                                                            <th>Category Name</th>
                                                            <th>Description</th>
                                                            <th>Price</th>
                                                            <th>Image</th>
                                                            <th>Is Active</th>
                                                            <th>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            allProduct.map((obj, i) => {
                                                                return (
                                                                    <tr key={i}>
                                                                        <td>{i + 1}</td>
                                                                        <td>{obj.productName}</td>
                                                                        <td>{obj.categoryName}</td>
                                                                        <td>{obj.description}</td>
                                                                        <td>{obj.price}</td>
                                                                        <td><a href={`${ProductImagePath}` + obj.imageUrl} target='_blank'><img src={`${ProductImagePath}` + obj.imageUrl} height="75px" width="75px"></img></a></td>
                                                                        <td>{obj.isActive}</td>
                                                                        <td>
                                                                            <NavLink to={`/EditProduct/${obj.productId}`} className="btn btn-outline-primary btn btn-sm waves-effect waves-light" tabIndex="-1" role="button" aria-disabled="true" >Edit</NavLink>&nbsp;
                                                                            <button type="button" onClick={() => { handleShow(obj.productId) }} className="btn btn-outline-danger btn btn-sm waves-effect waves-light open-dialog" >Delete</button>

                                                                            <Modal
                                                                                show={show}
                                                                                onHide={handleClose}
                                                                                backdrop="static"
                                                                                keyboard={false}
                                                                            >
                                                                                <Modal.Header closeButton>
                                                                                    <Modal.Title><b >Delete</b></Modal.Title>
                                                                                </Modal.Header>
                                                                                <Modal.Body>
                                                                                    <b style={{ fontSize: "18px" }}>Are you sure to delete this record?</b>
                                                                                </Modal.Body>
                                                                                <Modal.Footer>
                                                                                    <Button variant="secondary" onClick={handleClose}> <b style={{ fontSize: "14px" }}>Cancle</b></Button>
                                                                                    <Button variant="primary" onClick={() => { DeleteProduct(productDelete) }}>
                                                                                        <b style={{ fontSize: "14px" }}>Save Changes</b>
                                                                                    </Button>

                                                                                </Modal.Footer>
                                                                            </Modal>
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

export default Product