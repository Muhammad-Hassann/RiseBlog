import React from 'react'
import { Heading, PostForm } from '../components'

function AddPost() {
  return (
    <div className=' py-8 lg:bg-[url("../../post-bg.png")] bg-[url("../../post-m-bg.png")]  bg-no-repeat bg-center bg-cover h-full'>
 <Heading children="Add Post" />
<div className='flex justify-center '>
<div className='flex flex-wrap flex-row justify-center  w-[80%] gap-8'>
            <PostForm />
            </div>
            </div>
    </div>
  )
}

export default AddPost