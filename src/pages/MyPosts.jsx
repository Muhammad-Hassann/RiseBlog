import React, { useState, useEffect } from 'react';
import { Heading, PostCard } from '../components';
import appwriteService from '../appwrite/config';
import { useSelector } from 'react-redux';

function MyPosts() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await appwriteService.getPosts([]);
        if (fetchedPosts) {
          setPosts(fetchedPosts.documents);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const userPosts = posts.filter((post) => post.userId === userData?.$id);

  return (
    <div className="w-full py-8 lg:bg-[url('../../post-bg.png')] bg-[url('../../post-m-bg.png')] bg-no-repeat bg-center bg-cover h-full">
      <Heading children="My Posts" />
      <div className="flex justify-center">
        <div className="flex flex-wrap flex-row justify-center w-[80%] gap-8">
            {userPosts.length === 0 ? (
              <h1 className="text-2xl font-bold text-[#7e56f3]">You haven't posted anything yet!</h1>
            ) :   
          userPosts.map((post) => (
            <div key={post.$id} className="p-2 max-w-[300px]">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyPosts;
