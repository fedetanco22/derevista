import React from 'react'
import Image from 'next/image'

import Button from '../Button/Button'

import styles from './ContentBox.module.scss'

import mainImage from '@/public/images/main.svg'

const ContentBox = (): JSX.Element => {
  return (
    <div className={`${styles.box} flex`}>
      <div className={`${styles.box__content} `}>
        <div>
          <div className={styles.box__subtitle}>El Escultor del pueblo</div>
          <p className={styles.box__title}>
            Atelier De Revista - Social y Cultural
          </p>
          <p className={styles.box__text}>Texto descripcion de la imagen</p>
        </div>
        <Button text="Galería de fotos" />
      </div>
      <div className={styles.box__image}>
        <Image
          src={mainImage}
          priority={true}
          quality={100}
          width="0"
          height="0"
          sizes={`(max-width: 768px) 100vw`}
          style={{ width: '100%', height: 'auto' }}
          alt="el escultor del pueblo"
        />
      </div>
    </div>
  )
}

export default ContentBox
