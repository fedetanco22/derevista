// pages/blog.tsx

import React, { useRouter } from 'next/router'
import Image from 'next/image'

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

  if (!blogPost) {
    return <div>BlogPage post not found.</div>
  }

  return (
    <div>
      <ContentBox data={blogPost} />
      <div className="container grid grid-cols-1 gap-1">
        {blogPost.image_list.map((photo, idx) => {
          return (
            <div key={idx}>
              <Image
                src={photo}
                alt={'photo'}
                quality={100}
                width="0"
                height="0"
                sizes={`(max-width: 768px) 100vw`}
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BlogPage
