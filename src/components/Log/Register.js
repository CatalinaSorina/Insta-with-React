import React from 'react';

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
                <div>
                    <label>User name:</label>
                    <input id="regUser" placeholder="username" onChange={this.setUser}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input id="regPass" placeholder="password" onChange={this.setPass}/>
                </div>
                <button className="regBt" onClick={()=>this.props.register(this.state.username,this.state.password)}>save</button>
            </div>
        )
    }
}

export default Register;