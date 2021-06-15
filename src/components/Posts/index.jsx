import React from 'react'
import "./posts.css"

import PostCard from '../PostCard'
import Adverts from "../Adverts"



function Posts() {
    return (
        <div className="post-container">
            <h1>Posts</h1>
            <div className="post-container-div">
                <div className="post-items">
                    <textarea rows="5" placeholder="Whats on Your Mind....." className="post-textarea" />
                    <div className="post-items-div">
                        <button className="post-button">Add Image</button>
                        <button className="post-button">Submit Post</button>
                    </div>

                    <div className="recent-post">
                        <h3>Recent Posts</h3>
                        <PostCard />
                        <PostCard />
                        <PostCard />
                    </div>
                </div>
                <div className="post-ads">
                    <div>
                        <h3>Sponsored Advert</h3>
                        <Adverts />
                        <Adverts />
                        <Adverts />
                        <Adverts />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts
