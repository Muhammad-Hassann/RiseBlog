import React, { useState} from "react";
import { Link } from "react-router-dom";
import {PostCard} from "./index"
import appwriteService from "../appwrite/config";
import parse from "html-react-parser";

function SecondSection() {
  const [posts, setPosts] = useState([]);
  appwriteService.getPosts().then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });
  return (
    <div className='lg:h-screen h-full pb-8 w-full lg:bg-[url("../section.webp")] bg-[url("../section-m.png")] bg-no-repeat bg-center bg-cover flex items-center justify-center flex-col lg:flex-row'>
      <div className="lg:w-1/3 lg:pl-28 w-full flex justify-center mt-6 flex-wrap gap-4 lg:flex-col lg:gap-0">
        <h1 className="lg:text-8xl text-6xl font-extrabold mt-2 ">Best</h1>
        <h1 className="lg:text-8xl text-6xl  font-extrabold mt-2 text-white">Article</h1>
        <h1 className="lg:text-8xl text-6xl font-extrabold mt-2 lg:mb-6 ">Today</h1>
        <div className="w-full m-auto flex justify-center lg:block lg:justify-normal">
        <Link
          to="/all-posts"
          className="text-[#3652e1] bg-white font-bold py-4 px-6 rounded-full ml-4 active:scale-[0.96]"
        >
          See all post
        </Link>
        </div>
      </div>
      <div className="lg:w-2/3 w-full mt-16 flex justify-center flex-wrap gap-6 lg:justify-normal">
      {posts.slice(0, 3).map((post) => (
  <PostCard key={post.id} {...post} />
))}
      </div>
    </div>
  );
}

export default SecondSection;
