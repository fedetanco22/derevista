import React from 'react'
import Image from 'next/image'

import Button from '../Button/Button'
import Text from '../Text/Text'

import styles from './ContentBox.module.scss'

import mainImage from '@/public/images/main.svg'

const ContentBox = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={`${styles.box} flex container`}>
        <div className={`${styles.box__content} flex-column flex-around`}>
          <div>
            <Text
              as="h2"
              variant="headline-2"
              color="primary"
              fontWeight="medium"
            >
              El Escultor del pueblo
            </Text>

            <Text
              as="h1"
              variant="headline-1"
              color="primary"
              fontWeight="extra-bold"
            >
              Atelier De Revista - Social y Cultural
            </Text>
            <Text as="p" variant="body-1" color="light">
              Texto descripcion de la imagen
            </Text>
          </div>
          <Button text="Galería de fotos" />
        </div>
        <div className={`${styles.box__image} images`}>
          <Image
            src={mainImage}
            priority={true}
            quality={85}
            width="0"
            height="0"
            sizes={`(max-width: 768px) 100vw`}
            style={{ width: '100%', height: 'auto' }}
            alt="el escultor del pueblo"
          />
        </div>
      </div>
    </div>
  )
}

export default ContentBox
