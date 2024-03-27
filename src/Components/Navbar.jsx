import React, { useState } from 'react';

function Navbar({ sections }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div id='navbar' className='w-full h-10 p-20 flex justify-between items-center'>
      <div className='flex items-center'>
        <img src='/Images/profile-pic.png' className='w-[5vw]' alt='Profile' />
        <span className='text-white text-3xl mx-5'>Shahid Khan</span>
      </div>
      <div className='hamburger' onClick={handleClick}>
        <i className={clicked ? 'fas fa-times text-white text-3xl cursor-pointer' : 'fas fa-bars text-white text-3xl cursor-pointer'} />
      </div>
      <div className={`absolute top-24 right-20 bg-black-background w-36 p-2 z-10 ${clicked ? 'block' : 'hidden'}`}>
        <ul>
          {sections.map((section, index) => (
            <li key={index} className='text-white py-2'>
              <a href={`#${section.toLowerCase()}`} onClick={handleClick}>{section}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
