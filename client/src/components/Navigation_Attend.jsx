import React from 'react'
import {Link} from 'react-scroll'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Navigation_Attend = () => {
  const [sticky, setSticky] = useState(false);
  const navigate = useNavigate();
  const {user_id} = useParams();

  
  useEffect(()=>{
    window.addEventListener('scroll', () => {
      (window.scrollY > 100)? setSticky(true) : setSticky(false); 
    })
  });


  return (
    <div className = {`${sticky? 'bg-GreenBrown' : 'bg-transparent'}  w-[100%] mx-auto h-[60px] flex justify-between items-center px-[10%] fixed top-0 left-0 duration-700`} >
      <h1 className={`text-[40px] font-semibold ${sticky? 'text-KindaWhite': 'text-GreenBrown'} duration-700`}>Quizzo</h1>  
      <ul className={`flex space-x-8 text-[20px] ${sticky? 'text-KindaWhite': 'text-GreenBrown'} duration-700 cursor-pointer`}>
        <li onClick={() => navigate(`/home/${user_id}`)}>Home</li>
        <li>Submit</li>
      </ul>
    </div>
  )
}

export default Navigation_Attend
