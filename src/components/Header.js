import React from 'react'
import Face from '../images/Troll Face.png';
import '../index.css';

const Header = () => {
  return (
    <div className='head'>
      <div className='imgmeme'>
        <img src={Face} alt='' className='headimg' />
        <p className='memeg'>Meme Generator</p>
      </div>
      <p className='rc'>React Course - Project 3</p>
    </div>
  )
}

export default Header
