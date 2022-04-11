import React from "react";
import s from './Post.module.css'

function Post (props) {
    return (
        <div className={s.item}>
            <img src="https://goo.su/mZQPW" alt=""/>
            {props.message}
            <div>
                <span>Like
                </span>
                { props.likesCount }
            </div>
        </div>
    )
}

export default Post;