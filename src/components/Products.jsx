import React from 'react'
import Container from './container'
import Flex from './ui/flex'
import Product from './Product'
import ProductImage from '../assets/sofa1.png'
import ProductImage2 from '../assets/sofa2.png'
import ProductImage3 from '../assets/sofa3.png'
import { FaArrowRightLong } from "react-icons/fa6";



const products = () => {
    let productsdata=[
        {
            name:"Sofa",
            discountprice: 500,
            price:800,
            image:ProductImage,
        },

          {
            name:"Sofa",
            discountprice: 500,
            price:800,
            image:ProductImage2,
        },
   {
            name:"Sofa",
            discountprice: 500,
            price:800,
            image:ProductImage3,
        },
          {
            name:"Sofa",
            discountprice: 500,
            price:800,
            image:ProductImage3,
        },

          {
            name:"Sofa",
            discountprice: 500,
            price:800,
            image:ProductImage2,
        },
   {
            name:"Sofa",
            discountprice: 500,
            price:800,
            image:ProductImage,
        },

         
          
    ];
  return (

        <section>
      <Container className="lg:mt-[20px] mt-[60px] flex justify-between h-[70px] ">
            <h1 className="lg:text-[40px] text-[30px] font-bold font-gupter ">Products</h1>
            <Flex className=" lg:gap-[91px] ml-[20px] items-center mt-[42px]">
            <ul className="flex lg:gap-[65px] gap-[10px]">
                <li className="lg:text-[25px] text-[15px] lg:font-medium font-normal font-gupter" >Best Selling</li> 
                <li className="lg:text-[25px] text-[15px] lg:font-medium font-normal font-gupter">Most Popular</li>
            </ul>
                  <a href="#" className="flex font-normal ml-[15px]">see all <FaArrowRightLong className="mt-[5px]"/></a>
            </Flex>
    </Container>

    <Container>
<div className="grid grid-cols-1 lg:grid-cols-3 mt-[40px] lg:mt-[77px] mb-[100px] lg:gap-[30px] h-[3700px] lg:h-[1200px]">
     {productsdata.map((item)=>(
            <Product product={item}/>
        ))}
    </div>
    </Container>
        </section>
   
  )
}

export default products