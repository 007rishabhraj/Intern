import React from 'react';
import img from '../assets/istockphoto-1193476717-612x612.jpg';

const Image = () => {
  return (
    <div className='image'>
        <img src={img} alt='todo'/>
    </div>
  )
}

export default Image;