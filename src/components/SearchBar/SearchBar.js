import React from 'react';

import './SearchBar.css';

const SearchBar = (props) => {
	let placehold="Hei "+props.user+"! Search here...";

	return (
		<div className="searchBar">
			<img className="userPic" src="./pics/user.png" alt="user" />
			<input placeholder={placehold} onChange={props.search} />
		</div>
	);
};

export default SearchBar;
