// pages/blog.tsx

import React, { useRouter } from 'next/router'

import blogData from '@/data/blogData.json'
import ContentBox from '@/components/ContentBox/ContentBox'
import { BlogPostData } from '@/types/types'

// Function to get a blog post by ID
const getBlogPostById = (blogId: string): BlogPostData | undefined => {
  return blogData.find(post => post.id === blogId)
}

const BlogPage = (): JSX.Element => {
  // Specify the return type as JSX.Element
  const router = useRouter()
  const { blogId } = router.query // 'blogId' should match the parameter in the URL

  // Find the blog post based on the 'blogId' parameter
  const blogPost = getBlogPostById(blogId as string)
  console.log('🚀 ~ file: [blogId].tsx:21 ~ BlogPage ~ blogPost:', blogPost)

  if (!blogPost) {
    return <div>BlogPage post not found.</div>
  }

  return (
    <div>
      <ContentBox data={blogPost} />
    </div>
  )
}

export default BlogPage
