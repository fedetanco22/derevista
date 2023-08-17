import React from 'react'
import type { NextPage } from 'next'

import ContentBox from '../components/ContentBox/ContentBox'

import BlogList from '@/components/BlogList/BlogList'

const Home: NextPage = () => {
  return (
    <>
      <ContentBox />
      <BlogList />
    </>
  )
}

export default Home
