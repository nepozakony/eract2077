import React from "react";
import s from './myPosts.module.css'
import Post from "./post/Post";

let postsData = [
    {id: 1, message:"egheirg", likesCount:12 },
    {id: 2, message:"rgergreg", likesCount:21 },
    {id: 3, message:"frjigejig", likesCount:23 },
    {id: 4, message:"Gdwuew", likesCount:33 },
    {id: 5, message:"elrkflerg", likesCount:303 },
]


function myPosts () {
    return (
        <div className={s.postList}>
            <h3>MY POSTS</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Cancel</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
                <Post message={postsData[2].message} likesCount={postsData[2].likesCount} />
                <Post message={postsData[3].message} likesCount={postsData[3].likesCount} />
                <Post message={postsData[4].message} likesCount={postsData[4].likesCount} />

            </div>
        </div>
    )
}

export default myPosts;