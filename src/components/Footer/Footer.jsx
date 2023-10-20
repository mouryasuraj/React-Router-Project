import React from 'react'
import Logo from '../Header/Logo'
import FooterLinks from './FooterLinks'

function Footer() {
  return (
    <footer className='bg-gray-200 px-4 py-4 lg:py-8 border'>
        <div className='lg:flex md:justify-around'>
            <Logo height='h-16'/>
            <div className=''>
                <FooterLinks  />
            </div>
        </div>
    </footer>
  )
}

export default Footer
