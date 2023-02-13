import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
        </div>
        <div>
            avatar + desc
        </div>
        <div>
            My posts
            <div>
                New posts
            </div>
            <div className={classes.posts}>
                <div className={classes.item}>
                    Post 1
                </div>
                <div className={classes.item}>
                    Post 2
                </div>
            </div>
        </div>

    </div>
}

export default Profile;