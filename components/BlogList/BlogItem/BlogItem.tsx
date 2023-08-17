import React from 'react'
import Image from 'next/image'

import styles from './BlogItem.module.scss'

import Text from '@/components/Text/Text'

interface BlogItem {
  id: string
  image: string
  title: string
  subtitle: string
  text: string
}
export interface BlogItemProps {
  data: BlogItem
}

const BlogItem = ({ data }: BlogItemProps): JSX.Element => {
  const { image, title, subtitle, text } = data
  return (
    <div className={`${styles.blogItem} flex`}>
      <div className={styles.blogItem__image}>
        <Image
          src={image}
          priority={true}
          quality={85}
          width="0"
          height="0"
          sizes={`(max-width: 768px) 100vw`}
          style={{ width: '100%', height: 'auto' }}
          alt={title}
        />
      </div>
      <div className={`${styles.blogItem__content} `}>
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
        </div>
      </div>
    </div>
  )
}

export default BlogItem
