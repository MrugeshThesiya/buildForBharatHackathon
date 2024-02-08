import React from 'react'
import {FaStar, FaStarHalf} from "react-icons/fa"
import { AiOutlineStar } from "react-icons/ai"
import "../Components/Star.css"
const Star = ({stars,reviews}) => {
  const ratingStar =  Array.from({length: 5},(elem,index)=>{
        2.4;
        let number = index + 0.5;

    return(
        <span key={index}>
        {
            stars >= index + 1 
            ? <FaStar  className='icon' /> 
            : stars >= number
            ? <FaStarHalf className='icon' /> 
            : <AiOutlineStar className='icon' />
        }
        </span>
    )
    })
  return (
        <div>
            <div className="icon-style d-flex">
                {ratingStar} <p className='mx-2 review-count'>{reviews}</p>
            </div>
        </div>
  )
}

export default Star