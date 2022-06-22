import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import area from "../../apis/Area";
import Helmet from 'react-helmet';

function Area() {
    const [allArea, getArea] = useState([]);
    const [areaDelete, SetAreaDelete] = useState();
    const [isLoaded, setIsLoaded] = useState(true);

    //Search
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        try {
            area.getAll().then((response) => {
                const { data: { data } } = response;
                // console.log(response.data);
                getArea(response.data);
                setIsLoaded(false);
            })
        } catch (error) {
            console.error();
        }
    })

    //delete
    const DeleteArea = (aId) => {
        area.deleteArea(aId).then((res) => {
            setShow(false);
            console.log(res);
        })
        console.log(aId);
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (aId) => {
        SetAreaDelete(aId);
        setShow(true)
    };


    return (
        <>
            <Helmet>
                <title>Mr.Refill | Area</title>
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
                                            <li className="breadcrumb-item"><a href="javascript: void(0);">Area</a></li>
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
                                                <h4 className="card-title text-left">Area</h4>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div className="text-right card-title">
                                                    <NavLink to="/AddArea" className="btn btn-primary" tabIndex="-1" role="button" aria-disabled="true">Add Area</NavLink>
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
                                                                 onChange = {(e)=>{
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
                                                                <th>Area Name</th>
                                                                <th>Is Active</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                allArea.sort((a,b)=>a.areaName > b.areaName ? 1 : -1).filter(val=>{
                                                                    if(searchTerm ===''){
                                                                        return val;
                                                                    }else if(
                                                                        val.areaName.toLowerCase().includes(searchTerm.toLowerCase()) || val.isActive.toLowerCase().includes(searchTerm.toLowerCase())
                                                                    ){
                                                                        return val;
                                                                    }
                                                                }).map((obj, i) => {
                                                                    return (
                                                                        <tr key={i}>
                                                                            <td>{i + 1}</td>
                                                                            <td>{obj.areaName}</td>
                                                                            <td>{obj.isActive}</td>
                                                                            <td>
                                                                                <NavLink to={`/EditArea/${obj.areaId}`} className="btn btn-outline-primary btn btn-sm waves-effect waves-light" tabIndex="-1" role="button" aria-disabled="true" >Edit</NavLink>&nbsp;
                                                                                {/* <button type="button" onClick={() => { handleShow(obj.areaId) }} className="btn btn-outline-danger btn btn-sm waves-effect waves-light open-dialog" >Delete</button> */}

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
                                                                                        <Button variant="primary" onClick={() => { DeleteArea(areaDelete) }}>
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

export default Area