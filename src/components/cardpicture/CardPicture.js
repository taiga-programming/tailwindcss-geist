import React from 'react'
import { Image } from '@geist-ui/react';


const CardPicture = () => {
  return (
    <div>
      <Image.Browser url="https://note.com" invert>
      <Image width={540} height={246} src="https://assets.st-note.com/production/uploads/images/36700311/profile_dafc2f26c2091e90274a3846646e9d21.jpg?fit=bounds&format=jpeg&quality=85&width=64" />
      </Image.Browser>
    </div>
  
  )
}

export default CardPicture;
