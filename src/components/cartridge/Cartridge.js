import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import cartridge from '../../apis/Cartridge';
import Helmet from 'react-helmet';
import axios from 'axios';
import { BASE_URL, CartridgeImagePath } from './../../config/Constants';

function Cartridge() {

    const [allCartridge, getCartridge] = useState([]);
    const [cartridgeDelete, setcartridgeDelete] = useState();
    const [isLoaded, setIsLoaded] = useState(true);

    //Search
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        try {
            cartridge.getAll().then((response) => {
                const { data: { data } } = response;
                // console.log(response.data);
                getCartridge(response.data);
                setIsLoaded(false);
            })
        } catch (error) {
            console.error();
        }
    })

    const deleteCartridge = (cId) => {
        axios.delete(`${BASE_URL}/Cartridge/${cId}`).then((res) => {
            setShow(false);
            console.log(res);
        })
        // console.log(cId);
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (cId) => {
        setcartridgeDelete(cId);
        setShow(true)
    };
    return (
        <>
            <Helmet>
                <title>Mr.Refill | Cartridge</title>
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
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Cartridge</a></li>
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
                                                <h4 className="card-title text-left">Cartridge</h4>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div className="text-right card-title">
                                                    <NavLink to="/AddCartridge" className="btn btn-primary" tabIndex="-1" role="button" aria-disabled="true">Add Cartridge</NavLink>
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
                                                <>
                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-6">
                                                        </div>
                                                        <div className="col-sm-12 col-md-6">
                                                            <div>
                                                                <input
                                                                    type="text" className="form-control form-control-md mb-3 mt-0" placeholder="Search Here ..." style={{ "float": "right", width: "350px" }}
                                                                    onChange={(e) => {
                                                                        setSearchTerm(e.target.value);
                                                                    }}
                                                                />

                                                            </div>
                                                        </div>
                                                    </div>
                                                    <table id="datatable-buttons" className="table table-bordered dt-responsive nowrap" style={{ bordercollapse: "collapse", borderspacing: "0", width: "100%" }}>
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Cartridge Name</th>
                                                                <th>Price</th>
                                                                <th>Description</th>
                                                                <th>Image</th>
                                                                <th>Model Name</th>
                                                                <th>Type</th>
                                                                {/* <th>Is Active</th> */}
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                allCartridge.filter(val=>{
                                                                    if(searchTerm ===''){
                                                                        return val;
                                                                    }else if(
                                                                        val.cartridgeName.toLowerCase().includes(searchTerm.toLowerCase()) || val.description.toLowerCase().includes(searchTerm.toLowerCase()) || val.modelName.toLowerCase().includes(searchTerm.toLowerCase())|| val.typeName.toLowerCase().includes(searchTerm.toLowerCase())
                                                                    ){
                                                                        return val;
                                                                    }
                                                                }).map((obj, i) => {
                                                                    return (
                                                                        <tr key={i}>
                                                                            <td>{i + 1}</td>
                                                                            <td>{obj.cartridgeName}</td>
                                                                            <td>{obj.price}</td>
                                                                            <td>{obj.description}</td>
                                                                            <td><a href={`${CartridgeImagePath}` + obj.imageUrl} target='_blank'><img src={`${CartridgeImagePath}` + obj.imageUrl} height="75px" width="75px"></img></a></td>
                                                                            <td>{obj.modelName}</td>
                                                                            <td>{obj.typeName}</td>
                                                                            {/* <td>{obj.isActive}</td> */}
                                                                            <td>
                                                                                <NavLink to={`/EditCartridge/${obj.cartridgeId}`} className="btn btn-outline-primary btn btn-sm waves-effect waves-light" tabIndex="-1" role="button" aria-disabled="true" >Edit</NavLink>&nbsp;
                                                                                <button type="button" onClick={() => { handleShow(obj.cartridgeId) }} className="btn btn-outline-danger btn btn-sm waves-effect waves-light open-dialog" >Delete</button>

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
                                                                                        <Button variant="primary" onClick={() => deleteCartridge(cartridgeDelete)}>
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
                                                </>
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

export default Cartridge