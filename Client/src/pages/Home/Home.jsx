import React from 'react'
import ProfileSide from '../../components/profileSide/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'
import './Home.css'
import RightSide from '../../components/RightSide/RightSide'
// import   ProfileSide from '../../components/profileSide/ProfileSide'
// import profileSide from '../../components/profileSide/ProfileSide'
export const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <PostSide/>
      <RightSide/>
  
    </div>

  )
}
export default Home