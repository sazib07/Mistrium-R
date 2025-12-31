import React from 'react'
import Container from './container'
import Flex from './ui/flex'
import BannerImage from "../assets/banner.png"

const Banner = () => {
  return (
    <div>
      <Container>
        <Flex className="flex-col lg:flex-row justify-between">
          <div>
          <h1 className="mt-[36px] mb-[43px] lg:max-w-[710px] lg:h-[156px] font-gupter text-[36px] lg:text-[65px] font-bold  lg:font-normal lg:leading-[76px] tracking-[2%]">Modern Furniture For 
Modern Living Style</h1>
<p className="text-xl font-normal font-gupter text-black lg:max-w-[471px]">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstr ate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
</p>

<p className="text-xl lg:mt-10 mt-5 font-normal font-gupter text-black lg:max-w-[471px] ">
graphic design, Lorem ipsum is a place holder text commonly used to demo nstrate the visual form of a document or a typeface without relying ..
</p>
<Flex className="gap-[33px] mt-[20px] lg:mt-[43px] font-gupter lg:text-[27px]">
 <button className="py-3 px-4 lg:px-[70px] lg:py-[30px] bg-[#C4A586] border ">Register</button>
         <button className="py-3 px-4 lg:px-[70px] lg:py-[30px] border-[2px] border-[#C4A586]">Watch Video’s</button>
</Flex>
         
          </div>
          <div className="">
          <img src={BannerImage} alt="bannerimg" /></div>
        </Flex>
          
      </Container>
    </div>
  )
}

export default Banner