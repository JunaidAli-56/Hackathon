import React from "react";
import './mainProduct.scss'
const MainProduct = (props) => {
    return (
        <>
            <div class="card main-card-div">
                <img src={props.img} class="card-img-top" alt="..." />
                <div class="card-img-overlay main-card-body ">
                    <h5 class="card-title py-1">{props.heading}</h5>
                    <p class="card-text">{props.desc}</p>
                    <small className="card-text py-0">from $399 or $16.62/mo. from 24/mo.</small>
                </div>
            </div>
        </>

    )
};

export default MainProduct;
