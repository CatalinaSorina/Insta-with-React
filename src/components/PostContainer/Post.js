import React from 'react';

import CommentSection from '../CommentSection/CommentSection';

// ❤️
const Post = (props) => {
	return (
		<div className="post">
			<div className="userPost">
				<span>
					<img className="userPic" src={props.userImg} alt="user" />
					<sup className="username">{props.username}:</sup>
				</span>
				<div className="userCommentPost">{props.text}</div>
			</div>
			<img className="postImg" src={props.img} alt="no pic" />
			<div className="postFrequency">
				<button>♡ {props.likes}</button>
				<button onClick={() => props.showComments('#comments' + props.commentsId)}>
					💬 {props.commentsNumber}
				</button>
				👁 {props.seen}
			</div>
			<CommentSection
				id={'comments' + props.commentsId}
				newComment={'comment' + props.commentsId}
				key={'comments' + props.commentsId}
				comments={props.comments}
			/>
		</div>
	);
};

export default Post;
