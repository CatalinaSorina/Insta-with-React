import React from 'react';

import Post from './Post';
import posts from '../posts';
import './PostContainer.css';

const PostContainer = () => {
	return (
		<div className="postContainer">
			{posts.map((post) => (
				<Post
					key={post.id}
					userImg={post.userimg}
					username={post.username}
					img={post.imageUrl}
					likes={post.likes}
					commentsNumber={post.comments.length}
					seen={post.seen}
                    comments={post.comments}
                    commentsId={post.id}
				/>
			))}
		</div>
	);
};

export default PostContainer;
