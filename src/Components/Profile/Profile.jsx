import React from "react";
import s from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts.jsx";
import ProfileInfo from "./ProfInfo/Profileinfo";

function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile;