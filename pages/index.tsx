import React from 'react'
import type { NextPage } from 'next'

import ContentBox from '@/components/ContentBox/ContentBox'
import BlogList from '@/components/BlogList/BlogList'
import mainData from '@/data/mainContent.json'

const Home: NextPage = () => {
  return (
    <>
      <ContentBox data={mainData[0]} />
      <BlogList />
    </>
  )
}

export default Home
