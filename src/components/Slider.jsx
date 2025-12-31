import React from "react";
import Container from "./container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SliderArea from "./sliderarea/";
import SliderImage from "../assets/slide1.jpg";
import SliderImage2 from "../assets/slide2.jpg";
import SliderImage3 from "../assets/slide3.png";
import SliderImage4 from "../assets/slide4.png";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";



function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="cursor-pointer absolute right-[90px] bottom-[-40px] w-[33px] h-[33px] hover:text-[#C4A586]"
    >
    <FaArrowCircleRight size={35} />

    </button>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="cursor-pointer absolute right-[140px] bottom-[-40px] mr-[25px] w-[33px] h-[33px] hover:text-[#C4A586]"
    >
      <FaArrowCircleLeft size={35} className=""/>

    </button>
  );
}

const SliderComponent = () => {
 var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
     nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
      autoplay:false,
    autoplaySpeed: 3000,
   
  };
    let SliderItems = [
        {
            title:'Let’s See What Our Customer Say',
            pera:'graphic design, Lorem ipsum is a place holder text commonly used to demo nstrate the visual form of a document or a typeface without relying .',
            name:'Istiak Mahmud',
            date:' 18 September 2025',
            img:SliderImage,
        },
        {
            title:'Let’s See What Our Customer Say',
            pera:'graphic design, Lorem ipsum is a place holder text commonly used to demo nstrate the visual form of a document or a typeface without relying .',
            name:'Jessika',
            date:' 18 September 2025',
            img:SliderImage2,
        },
        {
            title:'Let’s See What Our Customer Say',
            pera:'graphic design, Lorem ipsum is a place holder text commonly used to demo nstrate the visual form of a document or a typeface without relying .',
            name:'',
            date:' 18 September 2025',
            img:SliderImage3,
        },
         {
            title:'Let’s See What Our Customer Say',
            pera:'graphic design, Lorem ipsum is a place holder text commonly used to demo nstrate the visual form of a document or a typeface without relying .',
            name:'Istiak Mahmud',
            date:' 18 September 2025',
            img:SliderImage4,
        },
    ]

  return (
    <section className="mt-10 mb-40">
      <Container>
        <Slider {...settings}>
    {SliderItems.map((item)=>(
        <SliderArea details={item}/>
    ))}
    
   </Slider>
             
        
        
      </Container>
    </section>
  );
};

export default SliderComponent;
