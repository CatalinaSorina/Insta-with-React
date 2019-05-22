import React from 'react';

import './Log.css';

import users from './users';

class Log extends React.Component {
    constructor(){
        super();
        this.state = {
            username:'',
            password:''
        }
    }

    componentDidMount(){
        // console.log(users);
    }

    checkUser = () => {
        let falseUser=true;
        users.map((user)=>{
            if(user.username===this.state.username){
                if (user.password===this.state.password){
                    falseUser=false;
                   return this.props.log(this.state.username);
                }
                falseUser=false;
                return alert("Wrong password");
            }
            return null;
        })
        return (!falseUser)? null:alert(this.state.username+" may not be registered.");
    }

    setUser = (e) => {
        this.setState({username:e.target.value});
    }

    setPass = (e) => {
        this.setState({password:e.target.value});
    }

    render() {
        return (
            <div className="login">
                <div className="credinals">
                    <label>User name:</label>
                    <input onChange={this.setUser}/>
                </div>
                <div className="credinals">
                    <label>Password:</label>
                    <input type="password" onChange={this.setPass}/>
                </div>
                <div>
                    <button className="logBt" onClick={this.checkUser}>log in</button>
                    <button className="regNowBt" onClick={this.props.registerNow}>Register now.</button>
                </div>
            </div>
        )
    }
}

export default Log;