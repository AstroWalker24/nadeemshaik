import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/n-logo-removed.png';
import { navLinksVer1, navLinksVer2 } from '../helpers/helper';

export default function navbar() {
  const [active, setActive] = useState("");
  return (

    // semantic nav element - outer container for navbar
    <nav className='w-full sm:w-full px-6 sm:px-6 flex items-center my-4'>

      {/* inner container for navbar and its items*/}
      <div className='w-full text-white flex items-center sm:justify-between justify-center mx-auto'>

        {/* menu items goes here - part-1 */}
        <ul className='first-list hidden sm:flex justify-between list-none flex-row w-1/3 gap-10 pl-6'>
          {navLinksVer1.map((link) => {
            return (
              <li
                key={link.id}
                className='font-primary bg-primary p-2 rounded-bl-xl rounded-tr-xl cursor-pointer'
                onClick={() => setActive(link.title)}
              >
                <a href="#" className='font-primary text-black'>{link.title}</a>
              </li>
            );
          })}
        </ul>


        {/* Logo goes here */}
        <Link to="/" className='flex items-center gap-2 cursor-pointer' onClick={() => {
          setActive("");
          window.scrollTo(0, 0);
        }}>
          <img src={Logo} alt="Nadeem Shaik" height={100} width={150} />
        </Link>


        {/* menu items goes here part -2 */}
        <ul className='second-list hidden sm:flex w-1/3 list-none justify-between flex-row gap-10 pr-6'>
  {navLinksVer2.map((link) => {
    return (
      <li
        key={link.id}
        className='font-primary bg-primary p-2 rounded-bl-xl rounded-tr-xl cursor-pointer'
        onClick={() => setActive(link.title)}
      >
        <a href="#" className='font-primary text-black'>{link.title}</a>
      </li>
    );
  })}
</ul>
      </div>
    </nav>
  )
}
