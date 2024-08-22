import React from 'react'

export default function Card({ post }) {
  return (
    <div key={post.id} className='py-3 flex flex-col '>
      <p className='font-bold text-lg'>{post.title}</p>
      <p className='text-md'>
        By <span className='italic'>{post.author}</span> ON <span className='underline font-bold'>{post.category}</span>
      </p>
      <p className='text-md'>Posted On {post.date}</p>
      <p className='text-[1rem] mt-4'>{post.content}</p>
      {post.tags && post.tags.length > 0 && (
        <div className='flex flex-wrap gap-1 mt-2'>
          {post.tags.map((tag, index) => (
            <span key={index} className='text-blue-500 underline font-bold text-md whitespace-nowrap'>
              {`#${tag}`}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
