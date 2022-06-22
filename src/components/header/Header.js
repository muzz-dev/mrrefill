import React,{useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Routers from '../../routes/Routers'
import { IMAGE_URL } from './../../config/Constants';

function Header() {

    let navigate = useNavigate();

    useEffect(() => {
      if (!localStorage.getItem('userId')) {
        navigate("/Error404");
      }
    }, [])

    const logout = ()=>{
        localStorage.clear();
        navigate("/Login");
    }
    const changePassword = () =>{
        navigate("/ChangePassword");
    }
  return (
          <>
               <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        {/* <!-- LOGO --> */}
                        <div className="navbar-brand-box">
                            <Link to={Routers.BASE_URL} className="logo logo-light">
                                <span className="logo-sm">
                                    <img src="htt p://localhost:3000/assets/images/logo-light.svg" alt="" height="22"></img>
                                </span>
                                <span className="logo-lg">
                                    <img src={`${IMAGE_URL}assets/images/logo-light.png`} alt="" height="85" style={{marginTop:"30px"}}></img>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="d-flex">

                       
                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="bx bx-bell bx-tada"></i>
                                <span className="badge badge-danger badge-pill">3</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                                aria-labelledby="page-header-notifications-dropdown">
                                <div className="p-3">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h6 className="m-0" key="t-notifications"> Notifications </h6>
                                        </div>
                                        <div className="col-auto">
                                            <a href="javascript:void(0);" className="small" key="t-view-all"> View All</a>
                                        </div>
                                    </div>
                                </div>
                                <div data-simplebar style={{ maxHeight: "230px" }}>
                                    <a href="javascript:void(0);" className="text-reset notification-item">
                                        <div className="media">
                                            <div className="avatar-xs mr-3">
                                                <span className="avatar-title bg-primary rounded-circle font-size-16">
                                                    <i className="bx bx-cart"></i>
                                                </span>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="mt-0 mb-1" key="t-your-order">Your order is placed</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="javascript:void(0);" className="text-reset notification-item">
                                        <div className="media">
                                            <img src="assets/images/users/avatar-3.jpg"
                                                className="mr-3 rounded-circle avatar-xs" alt="user-pic" />
                                            <div className="media-body">
                                                <h6 className="mt-0 mb-1">James Lemire</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1" key="t-simplified">It will seem like simplified English.</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="javascript:void(0);" className="text-reset notification-item">
                                        <div className="media">
                                            <div className="avatar-xs mr-3">
                                                <span className="avatar-title bg-success rounded-circle font-size-16">
                                                    <i className="bx bx-badge-check"></i>
                                                </span>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="mt-0 mb-1" key="t-shipped">Your item is shipped</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-min-ago">3 min ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="javascript:void(0);" className="text-reset notification-item">
                                        <div className="media">
                                            <img src="assets/images/users/avatar-4.jpg"
                                                className="mr-3 rounded-circle avatar-xs" alt="user-pic" />
                                            <div className="media-body">
                                                <h6 className="mt-0 mb-1">Salena Layfield</h6>
                                                <div className="font-size-12 text-muted">
                                                    <p className="mb-1" key="t-occidental">As a skeptical Cambridge friend of mine occidental.</p>
                                                    <p className="mb-0"><i className="mdi mdi-clock-outline"></i> <span key="t-hours-ago">1 hours ago</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="p-2 border-top">
                                    <a className="btn btn-sm btn-link font-size-14 btn-block text-center" href="javascript:void(0)">
                                        <i className="mdi mdi-arrow-right-circle mr-1"></i> <span key="t-view-more">View More..</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                       
                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img className="rounded-circle header-profile-user" src={`${IMAGE_URL}/assets/images/users/avatar-1.png`}
                                    alt="Header Avatar"/>
                                <span className="d-none d-xl-inline-block ml-1" key="t-henry">Administrator</span>
                                <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item" onClick={changePassword}><i className="bx bx-lock-open font-size-16 align-middle mr-1"></i> <span key="t-lock-screen">Change Password</span></a>
                                {/* <div className="dropdown-divider"></div> */}
                                <a className="dropdown-item text-danger" onClick={logout}><i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger" ></i> <span key="t-logout">Logout</span></a>
                            </div>
                        </div>

                     


                    </div>
                </div>
            </header>
          </>
  )
}

export default Header