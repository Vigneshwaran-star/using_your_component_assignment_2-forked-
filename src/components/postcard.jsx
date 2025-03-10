import React from 'react'
import Likebutton from './likebutton'
const Postcard = ({profileImage, username, content,isLiked}) => {
  return (
    <div className='border-2 w-3/4 h-3/4  '>
      <img src={profileImage} className=' h-3/4 w-full ' alt="Profile" />
      <h3 className='font-bold'>{username}</h3>
      <p>{content}</p>
     <Likebutton isLiked={isLiked} />
      
    </div>
  )
}

export default Postcard
