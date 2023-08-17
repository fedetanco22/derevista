import React from 'react'

import Text from '../Text/Text'
import Divider from '../Divider/Divider'

import data from '@/data/blogData.json'

const BlogList = (): JSX.Element => {
  return (
    <div className="container">
      <Text as="h2" variant="headline-2" fontWeight="bold">
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
