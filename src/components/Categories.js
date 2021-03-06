import React from "react";
import { Link } from "react-router-dom";
import animal from "assets/images/homepage/animal.jpg";
import business from "assets/images/homepage/business.jpg";
import community from "assets/images/homepage/community.jpg";
import charity from "assets/images/homepage/charity.jpg";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const Categories = () =>  {
  return (
    <>
      <div className="categories text-center">
        <h1 className="text-capitalize">
          Browse by Category
        </h1>
        <p>
          Find the cause you are looking for by category
        </p>
        </div>

        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-9 mx-auto col-md-6 col-lg-3 my-1 align-items-center d-flex justify-content-center  category-slide"
              style={{ backgroundImage: `url(${animal})` }}
            >
              <h4 className="text-category text-white">Animals</h4>
            </div>
            <div
              className="col-9 mx-auto col-md-6 col-lg-3 my-1 align-items-center d-flex justify-content-center category-slide"
              style={{ backgroundImage: `url(${business})` }}
            >
              <h4 className="text-category text-white d-flex ">Business</h4>
            </div>
            <div
              className="col-9 mx-auto col-md-6 col-lg-3 my-1 align-items-center d-flex justify-content-center category-slide"
              style={{ backgroundImage: `url(${charity})`}}
            >
              <h4 className="text-category text-white">Charity</h4>
            </div>
            <div
              className="col-9 mx-auto col-md-6 col-lg-3 my-1 d-flex align-items-center justify-content-center category-slide"
              style={{ backgroundImage: `url(${community})` }}
            >
              <h4 className="text-category text-white ">Community</h4>
            </div>
          </div>
        </div>
    </>
  );
}

export default Categories;
