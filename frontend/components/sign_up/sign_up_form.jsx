import React from 'react'

class SignUpForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = this.props.newUser; 

        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.signup(this.state); 
    }

    handleUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value 
        })
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    render() {
        return (
            <>
            <h2>Sign Up Form</h2>
            <form onSubmit={this.handleSubmit}>
                <label>Username:
                    <input type="text"
                        value={this.state.username}
                        onChange={(e) => this.handleUsername(e)}/>
                </label>
                <br/>
                <label>Password: 
                    <input type="password"
                        value={this.state.password}
                        onChange={(e) => this.handlePassword(e)}
                    />
                </label>
                <br/>
                <label>Email: 
                    <input type="text"
                        value={this.state.email}
                        onChange={(e) => this.handleEmail(e)}
                    />
                </label>
                <input type="submit" value="Sign Up"/>
            </form>
            </>
        )
    }
}


export default SignUpForm; 