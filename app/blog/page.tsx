'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'
import { BLOG_POSTS } from '../data/blogs'
import { AnimatedBackground } from '@/components/ui/animated-background'

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = { duration: 0.3 }

const ITEMS_PER_PAGE = 3

export default function AllBlogsPage() {
  const [currentPage, setCurrentPage] = useState(1)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentPosts = BLOG_POSTS.slice(startIndex, endIndex)

  const totalPages = Math.ceil(BLOG_POSTS.length / ITEMS_PER_PAGE)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const renderPagination = () => {
    if (totalPages <= 1) return null

    const pages = []
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`mx-2 rounded-md px-3 py-1 ${
            currentPage === i
              ? 'bg-gray-200 text-black'
              : 'text-gray-800 dark:bg-gray-700 dark:text-gray-200'
          }`}
        >
          {i}
        </button>,
      )
    }
    return <div className="mt-2 flex justify-center">{pages}</div>
  }

  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <div className="px-2 mb-2 flex cursor-pointer justify-between text-base font-medium">
        <div>Blogs</div>
      </div>
      <div className="flex flex-col">
        <AnimatedBackground
          enableHover
          className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
          transition={{
            type: 'spring',
            bounce: 0,
            duration: 0.2,
          }}
        >
          {currentPosts.map((post) => (
            <Link
              key={post.uid}
              className="rounded-xl px-3"
              href={post.link}
              data-id={post.uid}
              style={{ textDecoration: 'none' }}
            >
              <div className="flex flex-col">
                <h4 className="dark:text-zinc-100">{post.title}</h4>
                <p className="text-zinc-500 dark:text-zinc-400">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </AnimatedBackground>
        {renderPagination()}
      </div>
    </motion.section>
  )
}
