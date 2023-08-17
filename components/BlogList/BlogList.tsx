import React from 'react'

import Text from '../Text/Text'
import Divider from '../Divider/Divider'

import data from '@/data/blogData.json'

const BlogList = (): JSX.Element => {
  return (
    <div className="container">
      <Text as="h2" variant="headline-1" fontWeight="bold" color="primary">
        Secciones
      </Text>
      <Divider />
      {data.map((blog, idx) => {
        return <div key={idx}>{blog.title}</div>
      })}
    </div>
  )
}

export default BlogList
