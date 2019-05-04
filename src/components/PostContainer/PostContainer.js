import React from 'react';

import Post from './Post';
import './PostContainer.css';

const PostContainer = (props) => {
	return (
		<div className="postContainer">
			{props.posts.map((post) => (
				<Post
					key={post.id}
					userImg={post.userimg}
					username={post.username}
					text={post.text}
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
