import React, { useState } from 'react';
import { links } from '../Assets/filterImages-links';
import '../CSS/FilterModal.css'

function Filter() {
  const [selectedFilter, setSelectedFilter] = useState();
  return (
    <div className='filter-div'>
      {links.map((item, i)=>(
        <div 
          key={i} 
          className={`links-box ${i == selectedFilter && "selected-box"}`}
          onClick={()=>{
            console.log("selecting key", i);
            setSelectedFilter(i);
          }}
        >
          <img src={item.imgSrc} className='links-image'/>
          <p 
            className={`links-label ${i == selectedFilter && "selected-label"}`}
          >
            {item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Filter;
