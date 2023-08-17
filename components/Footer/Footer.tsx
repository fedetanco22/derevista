import React from 'react'
import Image from 'next/image'

import styles from './Footer.module.scss'

import Instagram from '@/public/icons/instagram.svg'

const Footer = (): JSX.Element => {
  return (
    <div className={`${styles.footer} flex-column flex-center`}>
      <p className={styles.footer__informationText}>
        TEL.: 351 8156492 - CITÓN CHARABA 175 - SALDÁN - CORDOBA
      </p>
      <a
        className={styles.footer__content}
        href="https://www.instagram.com/derevista2/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <div className={`${styles.footer__overlapGroup} flex flex-center`}>
          <Image
            className="image"
            alt="Image"
            src={Instagram}
            width={45}
            height={45}
          />
          <div className={styles.footer__textWrapper}>DEREVISTA2</div>
        </div>
      </a>
    </div>
  )
}

export default Footer
