import React from 'react';

import './SearchBar.css';

const SearchBar = (props) => {
	return (
		<div className="searchBar">
			<input placeholder="search..." onChange={props.search} />
		</div>
	);
};

export default SearchBar;
