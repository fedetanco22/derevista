import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from './BlogItem.module.scss'

import Text from '@/components/Text/Text'
import Button from '@/components/Button/Button'
import { BlogPostData } from '@/types/types'
export interface BlogItemProps {
  data: BlogPostData
}

const BlogItem = ({ data }: BlogItemProps): JSX.Element => {
  const { main_image, title, subtitle, text, id, image_list } = data

  const history = useRouter()

  return (
    <div className={`${styles.blogItem} `}>
      <div className={`${styles.blogItem__image} images`}>
        <Image
          src={main_image}
          priority={true}
          quality={85}
          width="0"
          height="0"
          sizes={`(max-width: 768px) 100vw`}
          style={{ width: '100%', height: 'auto', maxHeight: '411px' }}
          alt={title}
        />
      </div>
      <div className={`${styles.blogItem__content} flex-column `}>
        <Text as="h3" variant="headline-2" color="primary" fontWeight="medium">
          {subtitle}
        </Text>

        <Text
          as="h2"
          variant="headline-1"
          color="primary"
          fontWeight="extra-bold"
        >
          {title}
        </Text>
        <Text as="p" variant="body-1" color="light" alignment="justify">
          {text}
        </Text>
        <div>
          {image_list.length != 0 && (
            <Button onClick={() => history.push(`/blogs/${id}`)}>
              <p className={styles.blogItem__readmore}>Ver más</p>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogItem
