import React, { useState } from "react";
import { Link } from "react-router-dom";
// import './SliderCard.scss'

const SliderCard = (props) => {
    const [iconState, setIconState] = useState(false);

    const iconChangeHandler = () => {
        (iconState === false) ? setIconState(true) : setIconState(false)
    }
    return (
        <>
            <div className="card feature-card ">
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
                    <div><Link><i className="bi bi-bag"></i></Link></div>
                </div>
                <div className="img-div-outer">
                    <div className="img-div">
                        <img src={props.img} alt="..." className="card-img-top" />
                    </div>
                </div>
                <div className="card-body feature-card-body py-2">
                    <p>{props.name}</p>
                    <h1>{props.h1}</h1>
                    <div className="icon-div">
                        <ul className="m-0 p-0">
                            <li><Link><i className="bi bi-star-fill"></i></Link></li>
                            <li><Link><i className="bi bi-star-fill"></i></Link></li>
                            <li><Link><i className="bi bi-star-fill"></i></Link></li>
                            <li><Link><i className="bi bi-star-half"></i></Link></li>
                            <li><Link><i className="bi bi-star"></i></Link></li>

                        </ul>
                    </div>
                    <span>${props.amount}</span>
                </div>
            </div>
        </>
    )
};

export default SliderCard;
