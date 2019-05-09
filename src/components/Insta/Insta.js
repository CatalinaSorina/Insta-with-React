import React from 'react';
import './Insta.css';

import SearchBar from '../SearchBar/SearchBar';
import posts from '../posts';
import PostContainer from '../PostContainer/PostContainer';

class Insta extends React.Component {
	constructor() {
		super();
		this.state = {
			posts: posts,
			filterPosts: posts
		};
	}

	search = (e) => {
		const textSearch = e.target.value.toLowerCase();
		console.log(textSearch);
		if (textSearch !== '') {
			const filteredPosts = this.state.posts.filter((post) => {
				return (post.username.toLowerCase()).includes(textSearch) || (post.text.toLowerCase()).includes(textSearch) ? post : null;
			});
			this.setState({ filterPosts: filteredPosts });
		} else {
			this.setState({ filterPosts: posts });
		}
	};

	giveLove = (postLikes) => {
		const clicked = postLikes.target;
		// console.log(clicked);
		let clickedText = clicked.textContent.split(' ');
		// console.log(clickedText);
		if (clickedText[0] === '♡') {
			clicked.textContent = '❤️ ' + (Number(clickedText[1]) + 1);
		} else {
			// console.log(clicked.textContent);
			clicked.textContent = '♡ ' + (Number(clickedText[1]) - 1);
		}
	};

	showComments = (comentsId) => {
		const postComments = document.querySelector(comentsId);
		// console.log(postComments.className);
		postComments.classList.toggle('none');
	};

	render() {
		return (
			<div className="Insta">
				<button onClick={this.props.logout}>Log out</button>
				<SearchBar search={this.search} />
				<PostContainer
					posts={this.state.filterPosts}
					giveLove={this.giveLove}
					showComments={this.showComments}
					loggedUser={this.props.username}
				/>
			</div>
		);
	}
}

export default Insta;
