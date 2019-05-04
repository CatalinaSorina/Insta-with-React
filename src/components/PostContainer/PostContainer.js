import React from 'react';

import Post from './Post';
import posts from '../posts';
import './PostContainer.css';

const PostContainer = () => {
	return (
		<div>
			{posts.map((post) => (
				<Post
					key={post.id}
					userImg={post.userimg}
					username={post.username}
					img={post.imageUrl}
					likes={post.likes}
					commentsNumber={post.comments.length}
					comments={post.comments}
				/>
			))}
		</div>
	);
};

export default PostContainer;
