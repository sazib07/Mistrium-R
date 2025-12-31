import React from "react";
import StarImage from "../assets/star.png";


const SliderArea = ({ details }) => {
  return (
    <div className="flex gap-10 items-center">
      {/* Slide Image */}
      <div>
        <img
          src={details.img}
          alt={details.title}
          className="w-[400px] lg:w-[477px] h-[120] lg:h-[615px] object-cover rounded-lg "
        />
      </div>

      {/* Slide Text */}
      <div>
        <h1 className=" text-[24px] lg:text-[55px] lg:w-[461px] lg:h-[126px] font-bold font-gupter text-black">
          {details.title}
        </h1>
        <p className="lg:mt-12 lg:w-[560px] lg:h-[164px] lg:text-[20px] text-[12px] text-gray-600 font-habibi">
          {details.pera}
        </p>
       
        <h5 className="mt-6 lg:text-[22px] text-[15px] font-bold font-gupter">
          {details.name}
        </h5>
        <h6 className="lg:text-[16px] text-[12px] text-gray-500 font-habibi">
          {details.date}
        </h6>

        <img src={StarImage} alt="star rating" className="mt-3  " />
      </div>
    </div>
  );
};

export default SliderArea;
