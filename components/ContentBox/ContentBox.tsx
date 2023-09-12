import React, { FC } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Button from '../Button/Button'
import Text from '../Text/Text'

import styles from './ContentBox.module.scss'

import { BlogPostData } from '@/types/types'

const ContentBox: FC<{ data: BlogPostData }> = data => {
  const { title, subtitle, text, main_image, author_quote } = data.data

  const router = useRouter()

  return (
    <div className={styles.container}>
      <div className={`${styles.box} container`}>
        <div className={`${styles.box__content} flex-column`}>
          <div>
            <Text
              as="h2"
              variant="headline-2"
              color="primary"
              fontWeight="medium"
            >
              {subtitle}
            </Text>
            <Text
              as="h1"
              variant="headline-1"
              color="primary"
              fontWeight="extra-bold"
            >
              {title}
            </Text>

            <Text as="p" variant="body-1" color="light">
              {text}
            </Text>
            <Text as="p" variant="body-1" color="light">
              {author_quote}
            </Text>
          </div>
          {router.route === '/' && (
            <Button onClick={() => router.push('/galeria-fotos')}>
              Galería de fotos
            </Button>
          )}
        </div>
        <div className={`${styles.box__image} images flex flex-center-align `}>
          <Image
            src={main_image}
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
