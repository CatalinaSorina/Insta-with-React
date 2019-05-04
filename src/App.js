import React from 'react';
import './App.css';

import SearchBar from './components/SearchBar/SearchBar';
import posts from './components/posts';
import PostContainer from './components/PostContainer/PostContainer';

function App() {
	return (
		<div className="App">
			<SearchBar />
			<PostContainer posts={posts} />
		</div>
	);
}

export default App;
