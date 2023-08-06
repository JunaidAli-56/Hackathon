import React from "react";
import { BsSearch } from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row bg-primary d-flex align-items-center">
                    <div className="col">
                        <div className="container">
                            <div className="row px-3 py-2  text-white d-flex justify-content-between">
                                <div className="col-5">
                                    <p className="mb-0">Free Shipping Over $100</p>
                                </div>
                                <div className="col-5">
                                    <p className="text-end mb-0">Hotline: <a href="tel:+92 0000000000"
                                        className="text-white text-decoration-none">+92 123 4567890</a>
                                    </p>
                                </div>
                                <div className="col-1 login-button">
                                    <Link to='/auth/login'>
                                        <p>SIGN IN</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* main Nav  start*/}
                <div className="row bg-dark text-white py-2 align-items-center">
                    <div className="col-2">
                        <h3>VOGUE</h3>
                    </div>
                    <div className="col  px-1">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search Product Here..." aria-label="Search Product Here..." aria-describedby="basic-addon2" />
                            <span className="input-group-text bg-primary text-white" id="basic-addon2">
                                <BsSearch />
                            </span>

                        </div>
                    </div>
                    <div className="col-1">
                        <div className="header-uper-links
                            d-flex align-items-center justify-content-between">
                            <div>
                                <Link className="d-flex align-items-center">
                                    <img src="images/cart.svg" alt="cart" />
                                    <div className=" cart d-flex flex-column">
                                        <span className="badge bg-white text-primary">0</span>
                                        <p className="mt-1 text-warning">$500</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>


                </div>
                {/* bottom nav */}
                <div className="row  bg-primary">
                    <div className="col-12">
                        <div className="row menu-bottom d-flex align-items-center">
                            <div className="col-2 dropdown-style py-2">
                                <div className="dropdown">
                                    <a className="btn dropdown-toggle  dropdownBtn" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        SHOP CATEGORIES
                                    </a>

                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                                        <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                        <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-6">
                                <div className="menu-links">
                                    <NavLink to='/'>Home</NavLink>
                                    <NavLink to='/contact'>Contact</NavLink>
                                    <NavLink to='/dashboard'>DashBoard</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Header;
