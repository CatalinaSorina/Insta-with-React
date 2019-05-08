import React from 'react';
import './App.css';

import Insta from './components/Insta/Insta';
import Log from './components/Log/Log';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			log: false,
			username: ''
		};
	}

	render() {
		return (
			<div className="App">
				{this.state.log}? <Insta username={this.state.username} />:<Log />
			</div>
		);
	}
}

export default App;
