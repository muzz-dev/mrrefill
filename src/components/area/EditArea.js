import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import Helmet from 'react-helmet';
import axios from 'axios';
import { BASE_URL } from './../../config/Constants';

function EditArea() {

    const [areaName, setAreaName] = useState('');
    const [isActive, setIsActive] = useState('');
    const [aid, setAreaId] = useState(0);
    const { areaId } = useParams();
    const current = new Date();
    const currentDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    let navigate = useNavigate();

    //Get SingleArea For Prefilled Form
    const getSingleArea = () => {
        axios.get(`${BASE_URL}/Area/${areaId}`).then((res) => {
            setAreaId(res.data.areaId);
            setAreaName(res.data.areaName);
            setIsActive(res.data.isActive);
        })
    }

    useEffect(() => {
        getSingleArea();
    }, []);


    const objArea = {
        areaId: aid,
        areaName: areaName,
        isActive: isActive,
        createdAt: currentDate,
        updatedAt: currentDate,
    }

    const editArea = () => {
           axios.put(`${BASE_URL}/Area/${areaId}`, objArea).then((res)=>{
               console.log(res.objArea);
               navigate("/Area");
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
                <title>Mr.Refill | Edit Area</title>
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
                                        <h4 className="card-title mb-4">Edit Area</h4>

                                        <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                                <label htmlFor="formname">Area Name</label>
                                                <input type="text" value={areaName} name="txtAreaName" onChange={(e) => { setAreaName(e.target.value) }} className="form-control" id="formname" autoComplete='off' placeholder="Enter Area Name..." />
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
                                                        <button type='button' onClick={editArea} className="btn btn-primary w-md mr-3" style={{ alignContent: 'center' }}>Save Changes</button>
                                                        <NavLink to="/Area" className="btn btn-secondary" tabIndex="-1" role="button" aria-disabled="true">Cancle</NavLink>
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

export default EditArea