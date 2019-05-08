import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import posts from './components/posts';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			posts: posts,
			filterPosts: posts
		};
	}

	loggedUser = 'username';

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
			<div className="App">
				<SearchBar search={this.search} />
				<PostContainer
					posts={this.state.filterPosts}
					giveLove={this.giveLove}
					showComments={this.showComments}
					loggedUser={this.loggedUser}
				/>
			</div>
		);
	}
}

export default App;
