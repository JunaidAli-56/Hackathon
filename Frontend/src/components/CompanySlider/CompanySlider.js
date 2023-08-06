import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./CompanySlider.scss";

const CompanySlider = () => {
    return (
        <>
            <Swiper watchSlidesProgress={true} slidesPerView={4} className="mySwiper">
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/brand-04_131x119@2x.png?v=1655725508" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/brand-03_131x119@2x.png?v=1655725508" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/brand-09_131x119@2x.png?v=1655725508" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/brand-05_131x119@2x.png?v=1655725508" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/brand-02_131x119@2x.png?v=1655725508" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/brand-06_131x119@2x.png?v=1655725508" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/brand-01_131x119@2x.png?v=1655725508" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/brand-08_131x119@2x.png?v=1655725508" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/brand-07_131x119@2x.png?v=1655725508" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default CompanySlider;
