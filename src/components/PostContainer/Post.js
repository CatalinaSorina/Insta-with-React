import React from 'react';

import CommentSection from '../CommentSection/CommentSection';

// ❤
const Post = (props) => {
	return (
		<div className="post">
			<div>
				<img className="userPic" url={props.userImg} alt="user:" /> {props.username}
			</div>
			<img url={props.img} alt="no pic" />
			<div>
				{props.likes} ♡ {props.commentsNumber} ✉
			</div>
			<CommentSection comments={props.comments} />
		</div>
	);
};

export default Post;
