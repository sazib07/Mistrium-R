import React from 'react'
import Container from './container'
import ListItem from "./ui/listItem"
import Flex from './ui/flex'
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  
    let navItems = [
        {
            name: "Home",
            href: "#"
        },
        {
            name: "About US",
            href: "#"
        },
        {
            name: "Products",
            href: "#"
        },
        {
            name: "FAQ’S",
            href: "#"
        },
        {
            name: "Contact Us",
            href: "#"
        },
    ]
  return (
     <footer>
            <nav>
                <Container>
                    <Flex className="flex-col lg:flex-row items-center justify-between mt-[20px] " >
                        <img className="w-[50px] lg:w-auto" src="images/LogoT.png" alt="logo" />
                        <ul className="flex lg:gap-10 gap-[20px] ">
                            {
                                navItems.map((item) => (

                                    <ListItem className="nav_item" item={item} />
                                ))
                            }
                        </ul>
                        <div className="flex lg:gap-[3px] gap-[10px] lg:mr-[24px] mt-[10px]">
                           <FaFacebookF lg:size={25} className="text-[#C4A586]" />
                            <FaYoutube lg:size={25} className="text-[#C4A586]"/>
                            <FaFacebookF lg:size={25} className="text-[#C4A586]" />
                              <FaYoutube lg:size={25} className="text-[#C4A586]" />
                          
                        </div>
                    </Flex>
                  
                </Container>
             <div className="border-t-[2px] border-[#72696A] mt-[20px] flex gap-[5px]">
                <div className="mx-auto flex mb-[20px] mt-[20px] text-center ">
                  <h6 className="lg:text-[17px] text-[14px] font-medium font-gupter text-black">All Copyright Reserved By  ||   </h6>
                        <h5 className="text-[#C4A586] lg:text-[17px] text-[14px] font-bold font-gupter">SAZIB</h5>
                </div>
                       
                    </div>
            </nav>
        </footer>
   

  )
}

export default Footer