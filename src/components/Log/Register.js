import React from 'react';

import './Register.css';

import users from './users';

class Register extends React.Component {
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            checkPassword:''
        }
    }

    setUser = (e) => {
        this.setState({username:e.target.value});
    }

    setPass = (e) => {
        this.setState({password:e.target.value});
    }

    setCheckPass = (e) => {
        this.setState({checkPassword:e.target.value});
    }

    register=()=>{
        let userRegistered=true;
        users.map((user)=>{
            return this.state.username===user ? alert("User already registered!"):userRegistered=false;
        })
        if(!userRegistered && (this.state.password===this.state.checkPassword)){
            const newUser={
                username:this.state.username,
                password:this.state.password
            };
            users.push(newUser);
            return this.props.register(this.state.username,this.state.password);
        }
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
                    <input type="password" placeholder="password" onChange={this.setPass}/>
                </div>
                <div className="regCredinals">
                    <label>Check password:</label>
                    <input type="password" placeholder="password" onChange={this.setCheckPass}/>
                </div>
                <button className="regBt" onClick={this.register}>save</button>
            </div>
        )
    }
}

export default Register;