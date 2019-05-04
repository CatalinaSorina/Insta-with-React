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

	showComments = (comentsId) => {
		const postComments = document.querySelector(comentsId);
		// console.log(postComments.className);
		postComments.classList.toggle('none');
	};

	render() {
		return (
			<div className="App">
				<SearchBar />
				<PostContainer posts={this.state.posts} showComments={this.showComments} />
			</div>
		);
	}
}

export default App;
