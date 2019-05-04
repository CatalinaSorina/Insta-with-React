import React from 'react';

import CommentSection from '../CommentSection/CommentSection';

// ❤️
const Post = (props) => {
	return (
		<div className="post">
			<div className="userPost">
				<span>
					<img className="userPic" src={props.userImg} alt="user" />
					<text className="username">{props.username}:</text>
				</span>
				<text className="userCommentPost">{props.text}</text>
			</div>
			<img className="postImg" src={props.img} alt="no pic" />
			<div className="postFrequency">
				<button>♡ {props.likes}</button>
				<button onClick={props.showComments}>💬 {props.commentsNumber}</button>
				👁 {props.seen}
			</div>
			<CommentSection
				id={'comments' + props.commentsId}
				key={'comments' + props.commentsId}
				comments={props.comments}
			/>
		</div>
	);
};

export default Post;
