import React from 'react';

import './Log.css';

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
                <div className="credinals">
                    <label>User name:</label>
                    <input onChange={this.setUser}/>
                </div>
                <div className="credinals">
                    <label>Password:</label>
                    <input onChange={this.setPass}/>
                </div>
                <div>
                    <button className="logBt" onClick={()=>this.props.log(this.state.username)}>log in</button>
                    <button className="regNowBt" onClick={this.props.registerNow}>Register now.</button>
                </div>
            </div>
        )
    }
}

export default Log;