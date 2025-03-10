import React from 'react'
import { useState } from 'react'

import { BiSolidLike } from "react-icons/bi";
const Likebutton = ({isLiked}) => {
    const [liked ,setLiked]=useState(isLiked)
  return (
       <button onClick={()=>setLiked(!liked)} className={liked?'text-red-600':'text-gray-600 cursor-pointer '}>
        {liked?<BiSolidLike  size={30} fill='blue'/>:<BiSolidLike size={30} fill='white' stroke='black' strokeWidth={2} />} 
       </button>

  )
}

export default Likebutton
