import React from 'react';
import { Carousel } from 'antd';
import { useState } from 'react';
import './slider.scss'
const Slider = () => {
    const [dotPosition, setDotPosition] = useState('right');
    const handlePositionChange = ({ target: { value } }) => {
        setDotPosition(value);
    };
    return (
        <>
            <Carousel dotPosition={dotPosition} className="slidercc p-3">
                <div>
                    <div className='contentStyle slider-main'>
                        <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/main-banner-2_830x550.jpg?v=1655455867;" alt="" />
                        <div className='py-5'>
                            <p>super charged for pros</p>
                            <h1>special sale</h1>
                            <span>from $999.00 or $41.62/mo. <br />
                                for 24mo. footnote*
                            </span> <br />
                            <button>Buy Now</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='contentStyle slider-main'>
                        <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/main-banner-1_830x550.jpg?v=1655701492;" alt="" />
                        <div className='py-5'>
                            <p>super charged for pros</p>
                            <h1>special sale</h1>
                            <span>from $999.00 or $41.62/mo. <br />
                                for 24mo.footnote*
                            </span> <br />
                            <button className='btn btn-primary'>Buy Now</button>
                        </div>
                    </div>
                </div>
            </Carousel>
        </>
    );
};
export default Slider;