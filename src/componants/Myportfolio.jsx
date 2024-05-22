import React from 'react';
import toast from 'react-hot-toast';
import cards from '../../public/cardinfo.json';
import Cards from '../Cards';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";





function MyPortfolio() {

  const filterdata =cards.filter((item)=>item.visibality==="1")

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
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  $(document).ready(function(){
    $("python").click(function(){
      if (!$(this).data("clicked")) {
        toast.success("Currently working on it");
        $(this).data("clicked", true);
      }
    });
  });
  return (
    <div name="portfolio" className="portfolio container mx-auto px-4 md:px-20 py-20">
         <h1 className='text-center'>Portfolio</h1><hr className='About-hr' /><br />
      <div className="portfolio w-48">

      <div className="slider-container space-x-5">
      <Slider {...settings}>
      {
          filterdata.map((item)=>(<Cards item={item} key={item.id} />))
        }
        
      </Slider>
    </div>
       
        {/* Add more cards as needed */}
      </div><br /><br /><br /><hr className='About-hr'/>
    </div>
  );
}

export default MyPortfolio;
