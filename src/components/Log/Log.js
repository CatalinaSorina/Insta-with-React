import React from 'react';

class Log extends React.Component {
    constructor(){
        super();
        this.state = {
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

    render() {
        return (
            <div className="login">
                <div>
                    <label>User name:</label>
                    <input id="user" onChange={this.setUser}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input id="pass" onChange={this.setPass}/>
                </div>
                <button className="logBt" onClick={()=>this.props.log(this.state.username)}>log in</button>
                <button onClick={this.props.registerNow}>Register now.</button>
            </div>
        )
    }
}

export default Log;