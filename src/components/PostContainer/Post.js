import React from 'react';

import CommentSection from '../CommentSection/CommentSection';

// ❤️
const Post = (props) => {
	return (
		<div className="post">
			<div>
				<img className="userPic" src={props.userImg} alt="user" /> {props.username}:
			</div>
			<img className="postImg" src={props.img} alt="no pic" />
			<div className="postFrequency">
				♡ {props.likes} 💬 {props.commentsNumber} 👁 {props.seen}
			</div>
			<CommentSection key={'comments' + props.commentsId} comments={props.comments} />
		</div>
	);
};

export default Post;
