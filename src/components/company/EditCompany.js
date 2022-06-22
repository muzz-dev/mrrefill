import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';
import Helmet from 'react-helmet';
import axios from 'axios';
import { BASE_URL } from './../../config/Constants';

function EditCompany() {
    const [companyid, setCompanyId] = useState(0);
    const [companyName, setCompanyName] = useState('');
    const [isActive, setIsActive] = useState('');
    const current = new Date();
    const currentDate = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const { companyId } = useParams();

    let navigate = useNavigate();

    //Get Value htmlFor Prefilled the Form
    useEffect(() => {
        axios.get(`${BASE_URL}/Company/${companyId}`).then((res) => {
            console.log(res);
            setCompanyId(res.data.areaId);
            setCompanyName(res.data.companyName);
            setIsActive(res.data.isActive);
        })
    }, []);

    const objCompany = {
        companyId: companyId,
        companyName: companyName,
        isActive: isActive,
        createdAt: currentDate,
        updatedAt: currentDate, 
    }

    const editCompany = () => {
        axios.put(`${BASE_URL}/Company/${companyId}`, objCompany).then((res) => {
            console.log(res);
            navigate("/Company");
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
                <title>Mr.Refill | Edit Company</title>
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
                                        <h4 className="card-title mb-4">Edit Company</h4>

                                        <form onSubmit={handleSubmit}>

                                        <div className="form-group">
                                                <label htmlFor="formname">Company Name</label>
                                                <input type="text" value={companyName} onChange={(e) => { setCompanyName(e.target.value) }} className="form-control" id="formname" autoComplete='off' placeholder="Enter Company Name..." />
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
                                                        <button type='button' onClick={editCompany} className="btn btn-primary w-md mr-3" style={{ alignContent: 'center' }}>Edit Company</button>
                                                        <NavLink to="/Company" className="btn btn-secondary" tabIndex="-1" role="button" aria-disabled="true">Cancle</NavLink>
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

export default EditCompany