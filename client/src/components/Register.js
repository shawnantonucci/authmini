import React, { Component } from 'react'

const initialUser = {
    username: '',
    password: '',
};

class Register extends Component {
    constructor (props) {
        super(props)
        this.state = {
            user: { ...initialUser },
            message: '',
        }
    }
    
    render () {
        return (
            <form onSubmit={this.submitHandler}>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    value={this.state.user.username}
                />
            </form>
        )
    }
}

export default Register