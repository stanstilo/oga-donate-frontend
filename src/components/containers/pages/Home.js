import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedCauses from 'components/FeaturedCauses'
import Categories from 'components/Categories'
import BuyToSupport from 'components/BuyToSupport'
import Footer from '../../Footer';
import ImageSlider from 'components/ImageSlider';
import Toolbar from 'components/Navigation/Toolbar';

class Home extends React.Component{
  render(){
     return(
      <>
      <Toolbar />
      <ImageSlider />
      <Categories />
      <FeaturedCauses />
      <BuyToSupport /> 
      <Footer />
      </>
     )
  }
} 
  

export default Home;
