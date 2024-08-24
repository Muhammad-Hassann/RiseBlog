import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className=' py-8 lg:bg-[url("../../post-bg.png")] bg-[url("../../post-m-bg.png")]  bg-no-repeat bg-center bg-cover h-full'>
    <div className='flex justify-center'>
    <h1 className='md:text-6xl text-4xl mb-8 font-bold bg-gradient-to-r from-[#3652e1] to-[#7e56f3] bg-clip-text text-transparent'>Add Posts</h1>
</div>
<div className='flex justify-center '>
<div className='flex flex-wrap flex-row justify-center  w-[80%] gap-8'>
            <PostForm />
            </div>
            </div>
    </div>
  )
}

export default AddPost