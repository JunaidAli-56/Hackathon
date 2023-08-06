import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Progress } from "antd";
import './specialProduct.scss'


let time = new Date().toLocaleTimeString();

const SpecialProduct = (props) => {
    const [iconState, setIconState] = useState(false);

    const iconChangeHandler = () => {
        (iconState === false) ? setIconState(true) : setIconState(false)
    }
    return (
        <>
            <div class="card mb-3 p-2 border-0">
                <div class="row g-0">
                    <div class="col-md-5">
                        <div>
                            <div className="card product-card ">
                                <div className="heart-icon">
                                    <div>
                                        <Link>
                                            <i className={iconState ? "bi bi-heart-fill" : "bi bi-heart"}
                                                onClick={iconChangeHandler}
                                            ></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="other-options">
                                    <div><Link><i className="bi bi-shuffle"></i></Link></div>
                                    <div><Link><i className="bi bi-eye"></i></Link></div>
                                </div>
                                <div className="img-div-outer">
                                    <div className="img-div">
                                        <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/24-01_260x.jpg?v=1655098000" alt="" className="card-img-top" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="row">
                                <div className="col-6">
                                    {/* <RatingStar /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="card-body">
                            <div className="card-body product-card-body py-2">
                                <p>sony</p>
                                <h1>samsung galaxy haw</h1>
                                <div className="icon-div">
                                    <ul className="m-0 p-0">
                                        <li><Link><i className="bi bi-star-fill"></i></Link></li>
                                        <li><Link><i className="bi bi-star-fill"></i></Link></li>
                                        <li><Link><i className="bi bi-star-fill"></i></Link></li>
                                        <li><Link><i className="bi bi-star-half"></i></Link></li>
                                        <li><Link><i className="bi bi-star"></i></Link></li>

                                    </ul>
                                </div>
                                <span>$13.99</span>

                                <div>98 Days <small>{time}</small>
                                </div>

                                <div className="progressbar">

                                    <Progress
                                        percent={95}
                                        status="active"
                                        strokeColor={{
                                            from: '#108ee9',
                                            to: '#87d068',
                                        }}
                                    />
                                    {/* <Button type="primary">Button</Button> */}
                                    <button className="btn btn-primary round-1">Option</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default SpecialProduct;
