import React from 'react';
import './App.css';

import Insta from './components/Insta/Insta';
import Log from './components/Log/Log';
import Register from './components/Log/Register';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			log: true,
			reg: false,
			username: ''
		};
	}

	returnComponent = (Component1,Component2,Component3) =>{
		if(this.state.log){
			return Component1;
		}else if(this.state.reg){
			return Component2;
		}
		return Component3;
	}

	register=(user,pass)=>{
		this.setState({reg:false,log:true});
	}

	log=(uname)=>{
		console.log(uname)
		this.setState({reg:false,log:false,username:uname});
		localStorage.setItem('username',uname);
	}

	registerNow=()=>{
		this.setState({log:false,reg:true});
	}

	logout=()=>{
		this.setState({log:true,username:''});
		localStorage.removeItem('username');
		localStorage.clear();
	}

	render() {
		return (
			<div className="App">
				{this.component=this.returnComponent(
					<Log log={this.log} registerNow={this.registerNow}/>,
					<Register register={this.register}/>,
					<Insta username={this.state.username} logout={this.logout} />
				)}
			</div>
		);
	}
}

export default App;
