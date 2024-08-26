import React, { useState } from 'react'

const HomeForm = ({ title, content, setTitle, setContent, handleSubmit }) => {

  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-2'>
            <label className='text-[14px] md:text-[24px] font-semibold'>Title:</label>
            <input className='border px-2 py-2 rounded-[10px] text-[14px] md:text-[24px]'
                type='text'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </div>

        <div className='flex flex-col gap-2'>
            <label className='text-[14px] md:text-[24px] font-semibold'>Content:</label>
            <input className='border px-2 py-2 rounded-[10px] text-[14px] md:text-[24px]'
                type='text'
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
        </div>

        <div>
            <button className='bg-teal-500 w-full py-2 rounded-2xl text-white text-[14px]' type='submit'>Add Post</button>
        </div>
    </form>
  )
}

export default HomeForm