import React from 'react';
import charity from "assets/images/homepage/charity.jpg";
import business from "assets/images/homepage/business.jpg";
import community from "assets/images/homepage/community.jpg";
import { Slide } from 'react-slideshow-image';

const ImageSlider = () => {
    return (
        <>
        <Slide>
        <div className='each-slide'>
        <div className='image-slide'>
        <div
        className="image-slider text-center"
        style={{backgroundImage: `url(${charity})`}}
         >
        <h4 className="text-white fw-bold fs-46 image-slider-text">
          Help People Near You
        </h4>
      </div>
      </div>
      </div>

      <div className='each-slide'>
        <div className='image-slide'>
        <div
        className="image-slider"
        style={{backgroundImage: `url(${business})`}}
         >
        <h4 className="text-white fw-bold fs-46 image-slider-text">
          Help People Near You
        </h4>
      </div>
      </div>
      </div>
    
      <div className='each-slide'>
        <div className='image-slide'>
        <div
        className="image-slider"
        style={{backgroundImage: `url(${community})`}}
        >
        <h4 className="text-white fw-bold fs-46 image-slider-text">
          Help People Near You
        </h4>
      </div>
      </div>
      </div>
      </Slide>
      </>
    )
}

export default ImageSlider
