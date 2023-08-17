import React from 'react'
import type { NextPage } from 'next'

import ContentBox from '../components/ContentBox/ContentBox'
import styles from '../styles/Home.module.scss'

import BlogList from '@/components/BlogList/BlogList'

const Home: NextPage = () => {
  return (
    <main>
      <ContentBox />
      <BlogList />
    </main>
  )
}

export default Home
