import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';
import './PostContainer.css';

const PostContainer = (props) => {
	return (
		<div className="postContainer">
			{props.posts.map((post) => (
				<Post
					id={'post'+post.id}
					key={post.id}
					userImg={post.userimg}
					username={post.username}
					text={post.text}
					img={post.imageUrl}
					giveLove={props.giveLove}
					likes={post.likes}
					showComments={props.showComments}
					commentsNumber={post.comments.length}
					seen={post.seen}
					comments={post.comments}
					commentsId={post.id}
				/>
			))}
		</div>
	);
};

PostContainer.propTypes = {
	posts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			username: PropTypes.string,
			text: PropTypes.string,
			userimg: PropTypes.string,
			imageUrl: PropTypes.string,
			likes: PropTypes.number,
			seen: PropTypes.number,
			timestamp: PropTypes.string,
			comments: PropTypes.arrayOf(
				PropTypes.shape({
					id: PropTypes.string,
					username: PropTypes.string,
					text: PropTypes.string
				})
			)
		})
	)
};

export default PostContainer;
