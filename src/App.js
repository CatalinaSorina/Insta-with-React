import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import posts from './components/posts';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			posts: posts
		};
	}

	loggedUser = 'username';

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
				<SearchBar />
				<PostContainer
					posts={this.state.posts}
					giveLove={this.giveLove}
					showComments={this.showComments}
					loggedUser={this.loggedUser}
				/>
			</div>
		);
	}
}

export default App;
