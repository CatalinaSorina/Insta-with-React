import React from 'react';

import Comment from './Comment';

import './CommentSection.css';

class CommentSection extends React.Component {
	constructor() {
		super();
		this.state = {
			comments: []
		};
	}

	componentDidMount() {
		// this.props.comments.map((comment)=>console.log(comment));
		this.setState({
			comments: this.props.comments
		});
	}

	render() {
		return (
			<div className="commentsSection none" id={this.props.id}>
				{this.props.loggedUser}:{' '}
				<input className="newComment" id={this.props.newComment} placeholder="add comment" />
				<details className="allCommentsSection">
					<summary></summary>
					{this.state.comments.map((comment) => (
						<Comment key={comment.id} username={comment.username} comment={comment.text} />
					))}
				</details>
			</div>
		);
	}
}

export default CommentSection;
