import React from "react";
import { Link } from "react-router-dom";
import svg from './svg'
const Footer = (props) => {
    const year = new Date().getFullYear()
    return (
        <>
            <footer>
                <div className="container-fluid bg-primary text-white">
                    <div className="row py-4 footer-upper">
                        <div className="col-lg-5 col-md-12 col-sm-12  ps-5 newsletter-div">
                            <div>
                                <img src="images/newsletter.png" alt="newsletters" />
                                <h2 className="ms-2 me-4 text-white">SignUp For Newsletter</h2>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12 col-sm-12 pe-5 input-div">
                            <div>
                                <div class="input-group">
                                    <input type="text" class="form-control  border-0 input-style" placeholder="Your Email" aria-label="Your Email" aria-describedby="button-addon2" />
                                    <button class="btn m-1" type="button" id="button-addon2">SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row footer-lower">
                        <div className="col-lg-3 col-md-3 col-sm-4 col-contact">
                            <h5>contact us</h5>
                            <ul>
                                <li>
                                    <span>
                                        Demo Store <br />
                                        No. 1259 Freedom,<br />
                                        New York, 11111 <br />
                                        United States
                                    </span>
                                </li>
                                <li>
                                    <span>+91-987654321</span>
                                </li>
                                <li><Link to="">demo@example.com</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-info">
                            <h5>information</h5>
                            <ul>
                                <li>
                                    <li><Link>Terms of Service</Link></li>
                                    <li><Link>Shipping Policy</Link></li>
                                    <li><Link>Refund Policy</Link></li>
                                    <li><Link>Privacy Policy</Link></li>
                                    <li><Link>Blogs</Link></li>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-4 col-acc">
                            <h5>account</h5>
                            <ul>
                                <li>
                                    <li><Link>Size Chat</Link></li>
                                    <li><Link>About us</Link></li>
                                    <li><Link>Contact</Link></li>
                                    <li><Link>Search</Link></li>
                                    <li><Link>Faq</Link></li>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-12 col-sm-4 col-quickLinks">
                            <h5>quick links</h5>
                            <ul>
                                <li>
                                    <li><Link>Smart Watches</Link></li>
                                    <li><Link>Headphones</Link></li>
                                    <li><Link>Accessories</Link></li>
                                    <li><Link>Laptops</Link></li>
                                    <li><Link>Tablets</Link></li>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-ourApp">
                            <h5>our app</h5>
                            <span>Download our App and get extra 15% <br />
                                Discount on your first order..!
                            </span>
                            <div className="row ourApp-row">
                                <div className="col">
                                    <Link to='https://play.google.com/store/games'><img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/app-icon-01.png?v=1654931267" alt="" /></Link>
                                </div>
                                <div className="col">
                                    <Link to='https://www.apple.com/app-store/'> <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/app-icon-02.png?v=1654931286" alt="" /></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row icon-row">
                        <div className="col py-3">
                            <ul>
                                <li><Link><i class="bi bi-facebook"></i></Link></li>
                                <li><Link><i class="bi bi-skype"></i></Link></li>
                                <li><Link><i class="bi bi-youtube"></i></Link></li>
                                <li><Link><i class="bi bi-twitter"></i></Link></li>
                                <li><Link><i class="bi bi-pinterest"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row copyright-row pt-4">
                        <hr />
                        <div className="row d-flex justify-content-between">
                            <div className="col-4 col-sm-6 ps-3 py-4">
                                <p> &copy; {year} - All Right Reserved.</p>
                            </div>
                            <div className="col-4 pay-icon d-flex justify-content-end pe-3 pt-4">
                                {svg.map((props, i) => {
                                    return (
                                        <div className="px-1" key={i}>
                                            {props.image}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;
