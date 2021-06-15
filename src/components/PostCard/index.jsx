import React from 'react'
import "./postcard.css"

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


function PostCard() {
    return (
        <div className="postcard">
            <div className="postcard-details">
                <div className="postcard-info">
                    <img  className="post-card-user" src="https://res.cloudinary.com/doouwbecx/image/upload/v1623246908/Ellipse_1_foqxly.png" />
                    <div>
                        <p>username</p>
                        <p>postTime</p>
                    </div>
                </div>
                <idv>
                    <MoreHorizIcon />
                </idv>
            </div>
            <div className="postcard-image">
                <img src="https://res.cloudinary.com/doouwbecx/image/upload/v1619558693/Rectangle_44_r49mpj.png" />
            </div>
            <div className="postcard-icons">
                <ThumbUpAltIcon />
                <CommentIcon />
            </div>
        </div>
    )
}

export default PostCard
