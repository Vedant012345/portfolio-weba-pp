import React from 'react';
import cardinfo from '../../public/cardinfo.json'
import Xcards from './Xcards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function MyPortfolio() {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <div name="experience" className="portfolio container mx-auto px-4 md:px-20 py-20">
      <h1 className='text-center'>Experience</h1>
      <hr className='About-hr' /><br />
      <div className="experience space-x-10">
      <div className="slider-container space-x-5">
      <Slider {...settings}>
      { cardinfo.map((item)=>(<Xcards item={item} key={item.id}/>)) }
      </Slider>
    </div>
       
      </div>
      <br /><br /><br />
      <hr className='About-hr' />
    </div>
  );
}

export default MyPortfolio;
