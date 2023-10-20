import React from "react";
import Link from "../Header/Link";

function FooterLinks() {
  return (
    <div className="lg:flex gap-x-6">
    {/* Resource */}
      <div className="flex flex-col items-center justify-center mt-8">
        <h2 className="text-md mb-3 uppercase m-auto font-semibold tracking-wider">
          Resources
        </h2>
        <ul>
          <Link linkName="Home" goTo="" textSize="text-sm" />
          <Link linkName="About" goTo="about" textSize="text-sm" />
        </ul>
      </div>
      <hr className='lg:hidden w-[90%] my-2 border-2 border-gray-400 mx-auto' />
    {/* Resource */}
      <div className="flex flex-col items-center justify-center mt-8">
        <h2 className="text-md mb-3 uppercase m-auto font-semibold tracking-wider">
          Follow Us
        </h2>
        <ul>
          <Link linkName="Github" target='_blank' goTo="https://github.com/mouryasuraj" textSize="text-sm" />
          <Link linkName="Discord" target='blank' goTo="https://discord.com/" textSize="text-sm" />
        </ul>
      </div>
      <hr className='lg:hidden w-[90%] my-2 border-2 border-gray-400 mx-auto' />
    {/* Resource */}
      <div className="flex flex-col items-center justify-center mt-8">
        <h2 className="text-md mb-3 uppercase m-auto font-semibold tracking-wider">
          Legal
        </h2>
        <ul>
          <Link linkName="Priviacy Policy" goTo="#" textSize="text-sm" />
          <Link linkName="Terms & Conditions" goTo="#" textSize="text-sm" />
        </ul>
      </div>
    </div>
  );
}

export default FooterLinks;
