import React from 'react'
import Container from './container'
import LoginImage from '../assets/loginImage.png'
import LoginImage2 from'../assets/slide3.png'
import { FaArrowRightLong } from "react-icons/fa6";

const Login = () => {
  return (
    <section className="mt-30 mb-30">
        <Container>
            <div className="flex flex-col lg:flex-row">
              
            <div>
        <h5 className="lg:py-[15px] py-[10px] px-[20px] border border-[#C4A586] rounded-[30px] text-[16px] font-gupter font-bold text-[#C4A586] mx-auto lg:mx-0 lg:w-[240px] lg:h-[50px] w-[250px] h-[40px] text-center">See Your Interior Design</h5>
       <h2 className="lg:w-[349px] w-[300px] lg:h-[78px] lg:text-[30px] text-[22px] font-gupter font-bold mt-[25px] ml-[15px] lg:ml-0 text-center lg:text-start">Sign up fo the notification for add a new product’s</h2>
       
    <div className="flex flex-col lg:flex-row justify-inline lg:mt-[16px]">
 <input type="email" placeholder ="Your Business Email" className="bg-[#D9D9D9] lg:mt-[30px] mt-[20px] lg:w-[520px] lg:h-[78px] lg:text-[18px] font-medium font-gupter text-black lg:py-[20px] py-[15px] px-[5px] lg:px-[10px] p-2.5 rounded-[13px] relative"/>
        <button className="bg-[#C4A586] lg:text-[20px] text-[15px] absolute font-bold font-gupter text-[#FFFFFF] rounded-s-[10px] lg:w-[188px] w-[100px] h-[50px] lg:h-[68px] lg:ml-[240px] ml-[180px] lg:mt-[35px] mt-[22px]">Get Started</button>
    <div className="lg:h-[68px] lg:w-[96px] w-[15px] h-[50px] bg-[#C4A586]/44 lg:py-[25px] lg:px-[40px] py-[18px] px-[22px] absolute lg:mt-[35px] mt-[22px] lg:ml-[415px] ml-[280px] rounded-e-[15px]">
       <FaArrowRightLong/>
    </div>
        
    </div>
       </div>
    
       <div className="flex flex-col lg:flex-row relative justify-between lg:mt-[190px] mt-[30px]">
        <img className="w-[90px] h-[90px] rounded-[70px] border border-[#72696A] lg:ml-[96px] ml-[10px]  " src={LoginImage2} alt="" />
        <h5 className="text-center text-[19px] font-medium font-gupter flex gap-[10px] mt-[25px] ml-[10px]">Watch Video’s <FaArrowRightLong /></h5>
       </div>
       <div className="relative">
<img className="lg:ml-[200px] ml-[110px]" src={LoginImage} alt="" />
       </div>
            </div>
      
        </Container>
    </section>
    
  )
}

export default Login