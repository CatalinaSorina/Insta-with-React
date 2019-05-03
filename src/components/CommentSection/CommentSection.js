import React from 'react';

import Comment from './Comment';

class CommentSection extends React.Component {
	constructor() {
		super();
		this.state = {
			comments: []
		};
	}

	// this.setState({comments:this.props.comments});

	render() {
		return (
			<div>
				{this.state.comments.map((comment) => <Comment username={comment.username} comment={comment.text} />)}
			</div>
		);
	}
}

export default CommentSection;
