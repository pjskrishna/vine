import React, { useEffect } from "react";
import './Posts.css'
// import { PostsData } from '../../Data/PostsData'
import { useSelector, useDispatch } from "react-redux";
import { getTimelinePosts } from "../../actions/PostsAction";
import { useParams } from "react-router-dom";

import Post from '../Post/Post'
const Posts = () => {
  // const params = useParams()
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts, loading } = useSelector((state) => state.postReducer);
  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, []);
  if(!posts) return 'No Posts';
  // if(params.id) posts = posts.filter((post)=> post.userId===params.id)
  
  return (
    <div className="Posts">
    {loading
      ? "Fetching posts...."
      : posts.map((post, id) => {
          return <Post data={post} key={id} />;
        })}
  </div>
  )
}

export default Posts