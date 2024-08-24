import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8 lg:bg-[url("../../post-bg.png")] bg-[url("../../post-m-bg.png")]  bg-no-repeat bg-center bg-cover h-full'>
        <div className='flex justify-center'>
            <h1 className='text-6xl mb-8 font-bold bg-gradient-to-r from-[#3652e1] to-[#7e56f3] bg-clip-text text-transparent'>All Posts</h1>
        </div>
        <div className='flex justify-center '>
            <div className='flex flex-wrap flex-row justify-center  w-[80%] gap-8'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 max-w-[300px]'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </div>
    </div>
  )
}

export default AllPosts