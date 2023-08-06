import React from "react";
import Slider from "../../components/Slider/Slider";
import ShortCard from "../../components/ShortCard/ShortCard";
import ProductCard from "../../components/ProductCard/ProductCard";
import SliderCard from "../../components/SliderCard/SliderCard";
import MainProduct from "../../components/MianProduct/MainProduct";
import SpecialProduct from "../../components/SpecialProduct/SpecialProduct";
import CompanySlider from "../../components/CompanySlider/CompanySlider";
import HeroSec from "../../components/HerSec/HeroSec";

const Home = (props) => {
    return (
        <>
            <div className="container-fluid flex-wrap">
                <div className="row ">
                    <div className="col-12">
                        <HeroSec/>
                    </div>
                    <div className="col-lg-12">
                        <Slider />
                    </div>
                    <div className="col-12">
                        <ShortCard />
                    </div>
                </div>
            </div>
            {/* hero setion end  */}

            <div className="container-fluid bg-light">
                {/* services row */}
                <div className="row services-section-row py-4 px-2">
                    <div className="col-lg-3 col-md-6 col-sm-12 my-2">
                        <div className="card card-div">
                            <div className="row inner-row">
                                <div className="col-3">
                                    <div className="img-div">
                                        <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/service-01_70x.png?v=1654865803" alt="" /></div>
                                </div>
                                <div className="col-9">
                                    <div>
                                        <h5>free shipping</h5>
                                        <p>from all orders <br />
                                            over $100
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 my-2">
                        <div className="card card-div">
                            <div className="row inner-row">
                                <div className="col-3">
                                    <div className="img-div">
                                        <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/service-02_70x.png?v=1654865804" alt="" />
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div>
                                        <h5>daily surprise
                                            offer
                                        </h5>
                                        <p>save upto 25% <br />
                                            off
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 my-2">
                        <div className="card card-div">
                            <div className="row inner-row">
                                <div className="col-3">
                                    <div className="img-div">
                                        <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/service-03_70x.png?v=1654865803" alt="" /></div>
                                </div>
                                <div className="col-9">
                                    <div>
                                        <h5>support 24/7</h5>
                                        <p>shop with an <br />
                                            expert
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 my-2">
                        <div className="card card-div">
                            <div className="row inner-row">
                                <div className="col-3">
                                    <div className="img-div">
                                        <img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/service-05_70x.png?v=1654865803" alt="" /></div>
                                </div>
                                <div className="col-9">
                                    <div>
                                        <h5>secure payments</h5>
                                        <p>100% protectd <br />
                                            payments
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* product card row */}
                <div className="row product-card-row  p-4">
                    <div className="col bg-white p-3 productCard-main-col">
                        <ProductCard />
                    </div>
                </div>

                {/* featured collection row */}
                <div className="row feature-collection-row px-3 py-4">
                    <div className="col-lg-3 col-md-6 col-sm-12 my-3">
                        <SliderCard
                            img="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/24-01_260x.jpg?v=1655098000"
                            name="Sony"
                            h1="Kids headphones bulk 10 pack multi colored"
                            amount="30.00"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 my-3">
                        <SliderCard
                            img="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/19_00_260x.jpg?v=1655097265"
                            name="Sony"
                            h1="Olympus pen E-PL9 kit with 14-42"
                            amount="100.00"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 my-3">
                        <SliderCard
                            img="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/15_00_260x.jpg?v=1655096656"
                            name="Havells"
                            h1="Honor T1 7.0 1 GB RAM 8 GB ROM"
                            amount="150.00"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 my-3">
                        <SliderCard
                            img="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/12_00_260x.jpg?v=1655096387"
                            name="Bajaj"
                            h1="Beoplay A1 Portable Bluetooth Speaker"
                            amount="60.00"

                        />
                    </div>
                </div>

                {/* product card */}
                <div className="row product-card-row px-3 py-4">
                    <div className="col-lg-3 col-md-6 col-sm-6 my-3">
                        <MainProduct
                            img="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/subbanner-01.jpg?v=1655701528"
                            heading="big screen"
                            desc="smart watches series 7"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 my-3">
                        <MainProduct
                            img="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/subbanner-02.jpg?v=1654920168"
                            heading="big screen"
                            desc="smart watches series 7"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 my-3">
                        <MainProduct
                            img="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/subbanner-03.jpg?v=1654920181"
                            heading="big screen"
                            desc="smart watches series 7"
                        />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 my-3">
                        <MainProduct
                            img="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/subbanner-04.jpg?v=1654920192"
                            heading="big screen"
                            desc="smart watches series 7"
                        />
                    </div>
                </div>

                {/* special product */}
                <div className="row special-product-row px-3">
                    <div className="col-6">
                        <SpecialProduct />
                    </div>
                    <div className="col-6">
                        <SpecialProduct />
                    </div>
                </div>

                {/* company slider */}
                <div className="row p-4 company-slider">
                    <div className="col p-0">
                        <CompanySlider />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;
