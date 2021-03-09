import React from "react";
import { Link } from "react-router-dom";
import animal from "assets/images/homepage/animal.jpg";
import business from "assets/images/homepage/business.jpg";
import community from "assets/images/homepage/community.jpg";
import charity from "assets/images/homepage/charity.jpg";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Pagination, Scrollbar, A11y, Autoplay]);


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
          <div className="align-items-center justify-content-center">
          <Swiper 
          spaceBetween={4}
           slidesPerView={4}
           pagination={{ clickable: true }}
          //  autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false
          //   }}
            speed={8}
           lazyloading={true}
           loop={true}
           >  
            <SwiperSlide>
            <div
              className="align-items-center d-flex justify-content-center  category-slide"
              style={{ backgroundImage: `url(${animal})` }}
            >
              <h4 className="text-category text-white">Animals</h4>
            </div>
            </SwiperSlide>
            <SwiperSlide>    
            <div
              className="align-items-center d-flex justify-content-center category-slide"
              style={{ backgroundImage: `url(${business})` }}
              >
              <h4 className="text-category d-flex ">Business</h4>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div
              className="align-items-center d-flex justify-content-center category-slide"
              style={{ backgroundImage: `url(${charity})`}}
            >
              <h4 className="text-category">Charity</h4>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div
              className="d-flex align-items-center justify-content-center category-slide"
              style={{ backgroundImage: `url(${community})` }}
            >
              <h4 className="text-category">Community</h4>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div
              className="align-items-center d-flex justify-content-center  category-slide"
              style={{ backgroundImage: `url(${animal})` }}
            >
              <h4 className="text-category text-white">Animals</h4>
            </div>
            </SwiperSlide>
            <SwiperSlide>    
            <div
              className="align-items-center d-flex justify-content-center category-slide"
              style={{ backgroundImage: `url(${business})` }}
              >
              <h4 className="text-category d-flex ">Business</h4>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div
              className="align-items-center d-flex justify-content-center category-slide"
              style={{ backgroundImage: `url(${charity})`}}
            >
              <h4 className="text-category">Charity</h4>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div
              className="d-flex align-items-center justify-content-center category-slide"
              style={{ backgroundImage: `url(${community})` }}
            >
              <h4 className="text-category">Community</h4>
            </div>
            </SwiperSlide>
         </Swiper>
          </div>
       </div>
    </>
  );
}

export default Categories;
