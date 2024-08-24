import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import parse from 'html-react-parser'

function PostCard({$id, content ,title, featuredImage}) {
  const id = $id.toString()
  return (
    <Link to={`/post/${id}`}>
        <div className='w-72 h-96 rounded-xl border-4 border-[#EFEFEF] shadow-xlnpm run dev bg-white hover:scale-105 duration-200'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-t-lg h-44 w-full object-cover object-center' />

            </div>
            <h2
            className='text-lg font-bold p-4 mb-4'
            >{title}</h2>
            <Link
            to={`/post/${id}`}
            className='text-white bg-[#3652e1] font-bold py-2 px-4 rounded-full ml-4'
            >
              See Post
            </Link>
            {/* <p>{parse(content.substring(0, 20))}</p> */}
        </div>
    </Link>
  )
}


export default PostCard