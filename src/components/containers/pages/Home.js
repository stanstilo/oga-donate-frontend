import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedCauses from 'components/FeaturedCauses'
import Categories from 'components/Categories'
import Navbar from 'components/Navbar';
import BuyToSupport from 'components/BuyToSupport'
import Footer from './../../Footer';
import ImageSlider from 'components/ImageSlider';

const Home = () => (
   <>
   <Navbar/>
   <ImageSlider />
   <Categories />
   <FeaturedCauses />
   <BuyToSupport /> 
   <Footer />
   </>
);

export default Home;
