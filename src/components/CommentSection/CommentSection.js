import React from 'react';

import Comment from './Comment';

import './CommentSection.css';

class CommentSection extends React.Component {
	constructor() {
		super();
		this.state = {
			comment: '',
			comments: []
		};
	}

	componentDidMount() {
		// this.props.comments.map((comment)=>console.log(comment));
		this.setState({
			comments: this.props.comments
		});
	}

	setComment=(e)=>{
		this.setState({comment:e.target.value});
	}

	addComment=()=>{
		let id=this.generateNewId();
		let newUserComment={
			id:id,
			username:this.props.loggedUser,
			text:this.state.comment
		};
		let moreComments=this.state.comments;
		moreComments.push(newUserComment);
		// console.log(newUserComment);
		this.setState({comments:moreComments});
	}

	generateNewId(){
		// let nr=100*Math.random();
		// nr-=nr%1;
		let nr=1;
		this.state.comments.forEach(comment=>{
			if(Number(comment.id)>=nr){
				nr=Number(comment.id)+1;
			}
			console.log(comment.id+" id si nr: "+nr);
		})
		console.log(nr);
		return nr;
	}

	render() {
		return (
			<div className="commentsSection none" id={this.props.id}>
				{this.props.loggedUser}:{' '}
				<input className="newComment" id={this.props.newComment} placeholder="comment" onChange={this.setComment}/>
				<button className="addComment" onClick={this.addComment}>add</button>
				<div className="allCommentsSection">
					{this.state.comments.map((comment) => (
						<Comment key={comment.id} username={comment.username} comment={comment.text} />
					))}
				</div>
			</div>
		);
	}
}

export default CommentSection;
