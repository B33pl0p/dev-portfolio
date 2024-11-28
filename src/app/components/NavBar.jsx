import React from 'react'
import Link from 'next/link'
import NavLinks from './NavLinks'
import { FaCode } from "react-icons/fa";
const navlinks = [
    {
        title : "About",
        href : "#about"
    },
    {
        title : "Projects",
        href : "#projects"
    },
    {
        title : "Contact",
        href : "#contact"
    }
]


const NavBar = () => {
  return (
    <nav>
<div className='flex flex-wrap flex-row items-center justify-between mx-auto '>
    <Link href = {"/"} className='text-white lg:text-5xl sm:text-xl md:text-3xl font-semibold '><FaCode /></Link>

    <div className='menu hidden md:block md:wauto id="navbar" '></div>
    <ul className='flex flex-row'>
        <div className='flex flex-row md:w-auto justify-evenly md:space-x-8 lg:space-x-11 lg:text-2xl' >  
            {navlinks.map( (link, index) => (
                <li key = {index}>
                 <NavLinks href={link.href} title={link.title}></NavLinks>
                 </li>
        
)) }
</div>
    </ul>
    </div>        
    </nav>
  )
}

export default NavBar