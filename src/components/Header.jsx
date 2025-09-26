import React from 'react'
import Container from "./container"
import ListItem from "./ui/listItem"
import { LiaSearchDollarSolid } from "react-icons/lia";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaUserTie } from "react-icons/fa6";
import Flex from './ui/flex'
import { FaBarsStaggered } from "react-icons/fa6";


const Header = () => {
  
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
        <header>
            <nav>
                <Container>
                    <Flex className=" items-center justify-between mt-[20px]" >
                        <img className="w-[200px] lg:w-auto " src="images/Logo.png" alt="logo" />
                        <ul className="hidden lg:flex lg:gap-10 ">
                            {
                                navItems.map((item) => (
                                    <ListItem className="nav_item" item={item} />
                                ))
                            }
                        </ul>
                        
                        <div className="flex gap-[10px] lg:gap-[33px]">
                            
                            <LiaSearchDollarSolid lg:size={35} size={30} className="text-black" />

                            <div className="relative text-black after:content-[''] after:absolute after:top-[-13px] after:right-[-5px] after:w-[17px] after:h-[17px] after:rounded-full after:bg-red-500 ">
                                <RiDeleteBinLine lg:size={35} size={30}  />
                            </div>

                            <FaUserTie lg:size={35} size={30}  className="text-black" />
                               
                        </div>
                        <FaBarsStaggered  className="lg:hidden  "/>
 
                    </Flex>
                </Container>

            </nav>
        </header>
    )
}

export default Header