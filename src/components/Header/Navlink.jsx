import React from "react";
import Link from "./Link";

function Navlink({showMenu}) {


  return (
    <ul className="lg:flex lg:relative duration-300 lg:h-fit lg:pt-0 lg:bg-transparent lg:shadow-none absolute top-0  right-0 bg-white w-1/2 pt-16 shadow-2xl h-[100vh]">
      <i onClick={showMenu}  className="fa-solid fa-xmark text-4xl absolute top-3 right-8 hover:rotate-180 duration-300 ml-6 lg:hidden hover:bg-red-200 px-3 py-1 cursor-pointer" style={{color: '#223658'}}></i>
      <Link linkName='Home' goTo=''  textSize='text-xl'/>
      <Link linkName='About' goTo='about' textSize='text-xl' />
      <Link linkName='Contact' goTo='contact' textSize='text-xl' />
      <Link linkName='Github' goTo='github' textSize='text-xl' />
    </ul>
  );
}

export default Navlink;
