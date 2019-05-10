import React from 'react';

import './Register.css';

class Register extends React.Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:''
        }
    }
    
    setUser = (e) => {
        this.setState({username:e.target.value});
    }

    setPass = (e) => {
        this.setState({password:e.target.value});
    }

    render(){
        return (
            <div className="register">
                <div className="regCredinals">
                    <label>User name:</label>
                    <input placeholder="username" onChange={this.setUser}/>
                </div>
                <div className="regCredinals">
                    <label>Password:</label>
                    <input placeholder="password" onChange={this.setPass}/>
                </div>
                <button className="regBt" onClick={()=>this.props.register(this.state.username,this.state.password)}>save</button>
            </div>
        )
    }
}

export default Register;