import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { FaTruckDroplet } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";
import Form from './form';


const Header = () => {
  return (
    <div className='header col-12 col-md-4 col-lg-8'>
        <div className='header-logo'>
      <RxHamburgerMenu className='header-icons'/>
      <h1 className='sa'>SAPPHIRE</h1>
      <Form>
        <Form.Group className="">
          <Form.Control type="search" placeholder="FIND YOUR FAVOURITES" />
        </Form.Group>
      </Form>
      <IoSearch className="header-icons" />
      <FaTruckDroplet className="header-icons"/>
      <MdOutlineShoppingBag className="header-icons" />
   </div>     
      </div>

  )
}

export default Header
