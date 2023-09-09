import React from 'react'
import Image from 'next/image'

import photos from '@/data/photoGallery.json'

const PhotoGallery = (): JSX.Element => {
  return (
    <div className="container grid grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-1">
      {photos.map(photo => {
        return (
          <div key={photo.id}>
            <Image
              src={photo.image}
              alt={'photo'}
              quality={85}
              width="0"
              height="0"
              sizes={`(max-width: 768px) 100vw`}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        )
      })}
    </div>
  )
}

export default PhotoGallery
