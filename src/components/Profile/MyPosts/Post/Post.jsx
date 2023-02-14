import React from 'react';
//import classes from './Post.module.css';
import classes from './Post.module.css';

const Post = () => {
    return (
                <div className={classes.item}>
                    <img src="https://media.vanityfair.com/photos/5c5325d3cec32271820c6fc1/master/w_1600%2Cc_limit/ava-max-interview.jpg"></img>
                    Post NEW
                </div>
    )
}

export default Post;