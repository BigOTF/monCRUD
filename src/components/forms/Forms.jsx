import React from 'react'
import HomeForm from './HomeForm'

const Forms = ({ title, setTitle, content, setContent, handleSubmit}) => {
  return (
    <section className='px-6 py-5'>
        <HomeForm title={title} setTitle={setTitle} content={content} setContent={setContent} handleSubmit={handleSubmit}/>
    </section>
  )
}

export default Forms