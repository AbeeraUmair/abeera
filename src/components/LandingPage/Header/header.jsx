import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { FaTruckDroplet } from "react-icons/fa6";
import { MdOutlineShoppingBag } from "react-icons/md";

const Header = () => {
  return (
    <div className="header sm-12 ">
      <div className="header-logo">
        <RxHamburgerMenu className="header-icons" />
        <h1 className="sa  " style={{fontSize:"6vw"}}>SAPPHIRE</h1>
        <div className="header-icon">
          <IoSearch className="header-icons" />
          <FaTruckDroplet className="header-icons" />
          <MdOutlineShoppingBag className="header-icons" />
        </div>
      </div>
    </div>
  ); 
};

export default Header;
