import React from 'react'
import { MdAddShoppingCart } from "react-icons/md";

const product = ({product}) => {
  return (
    <div className="max-w-[402px] relative hover:mt-[-20px] duration-150 justify-between">
       <div className="text-Center flex justify-center">
         <button className="bg-[#D1A070] font-gupter font-medium text-base py-5 px-10 relative z-50 rounded-[25px] items-center flex gap-3 ">
            Add to Cart <MdAddShoppingCart/>
        </button>
       </div>
        <div className="w-full h-[302px] z-[-1] absolute top-10  bg-[#C4A586]/60">
        <div className="mt-[40px] ml-[84px] font-black">
         <h3 className="text-[24px] h-[73px] font-habibi">{product.name}</h3>
        <div className="flex gap-[50px] ml-[58px] font-gupter">
        <h3 className="text-[24px] font-bold text-black">{product.discountprice}</h3>
        <del className="text-[22px] text-[#72696A]">{product.price}</del>
        </div>
      </div>
        <img className="mx-auto mt-[10px]" src={product.image} alt="img" />
    </div>
    </div>
  )
}

export default product