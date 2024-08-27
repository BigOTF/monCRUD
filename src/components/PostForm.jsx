import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin7Fill } from "react-icons/ri";

const PostForm = ({ post, deletePost }) => {

    const PostDetails = () => {
        return (
            post.map((data) => {
                return (
                    <div key={data._id} className='border px-3 py-3 rounded-[10px] flex items-center justify-between'>

                        <div className='flex flex-col gap-3'>
                            <p className='font-bold'>{data.title}</p>
                            <div>
                                {
                                    data.content.map((con) => (
                                        <div key={data._id}>
                                            <p>{con.value}</p>
                                            <p className='italic text-gray-500'>{new Date(con.published).toLocaleString()}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <FaRegEdit className='text-[18px]'/>
                            <RiDeleteBin7Fill className='text-[18px]' onClick={() => deletePost(data._id)}/>
                        </div>
                       
                    </div>
                )
            })
        )
    }

  return (
    <main className='px-6 mt-10 flex flex-col gap-4'>
        <PostDetails />
    </main>
  )
}

export default PostForm