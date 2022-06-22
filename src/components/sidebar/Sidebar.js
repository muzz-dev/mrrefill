import React from 'react'
import {Link} from 'react-router-dom'
import Routers from '../../routes/Routers'

function Sidebar() {
  return (
    <>
         <div className="vertical-menu">
                <div data-simplebar className="h-100">
                    <div id="sidebar-menu">
                        <nav>
                            <ul className="metismenu list-unstyled" id="side-menu" style={{marginTop: "18px"}}>
                            <li class="menu-title" key="t-menu">Exchange Cartridge Module</li>
                                <li>
                                    <Link to={Routers.DASHBOARD} className="waves-effect">
                                        <i className="bx bx-home-circle"></i>
                                        <span key="t-calendar">Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={Routers.REQUEST} className="waves-effect">
                                        <i className="bx bx-calendar"></i>
                                        <span key="t-calendar">Requests</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={Routers.AREA} className="waves-effect">
                                        <i className="bx bx-map"></i>
                                        <span key="t-calendar">Area</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={Routers.COMPANY} className="waves-effect">
                                        <i className="bx bx-building"></i>
                                        <span key="t-calendar">Company</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={Routers.MODEL} className="waves-effect">
                                        <i className="bx bx-cube"></i>
                                        <span key="t-calendar">Model</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={Routers.CARTRIDGE} className="waves-effect">
                                        <i className="bx bx-printer"></i>
                                        <span key="t-calendar">Cartridge</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={Routers.EMPLOYEE} className="waves-effect">
                                        <i className="bx bx-group"></i>
                                        <span key="t-calendar">Employee</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={Routers.USER} className="waves-effect">
                                        <i className="bx bx-user"></i>
                                        <span key="t-calendar">Users</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={Routers.VIEWFEEDBACK} className="waves-effect">
                                        <i className="bx bx-message-alt"></i>
                                        <span key="t-calendar">Feedback</span>
                                    </Link>
                                </li>

                                <li class="menu-title" key="t-apps">Inventory Module</li>
                                <li>
                                    <Link to={Routers.PRODUCT} className="waves-effect">
                                        <i className="bx bx-box"></i>
                                        <span key="t-calendar">Product</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={Routers.PURCHASE} className="waves-effect">
                                        <i className="bx bx-shopping-bag"></i>
                                        <span key="t-calendar">Purchase</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={Routers.PURCHASERETURN} className="waves-effect">
                                        <i className="dripicons-return"></i>
                                        <span key="t-calendar">Purchase Return</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={Routers.SALES} className="waves-effect">
                                        <i className="mdi mdi-point-of-sale"></i>
                                        <span key="t-calendar">Sales</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={Routers.SALESRETURN} className="waves-effect">
                                        <i className="dripicons-return"></i>
                                        <span key="t-calendar">Sales Return</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Sidebar