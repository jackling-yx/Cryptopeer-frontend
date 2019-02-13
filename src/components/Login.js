import React from 'react'

const Login = (props) => {
    return (
        <div className="login-container">
            <form onSubmit={props.login}>
                <div className="username-container">
                    <input type="text" className="username-input" placeholder="Username" name="username" value={props.logininfo.username} onChange={props.handleChange} />
                </div>
                <div className="password-container">
                    <input type="password" className="password-input" placeholder="Password" name="password"value={props.logininfo.password} onChange={props.handleChange} />
                </div>
                <div>
                    <input type="submit" value="Log In"/>
                </div>
                <div>
                    <p className="prompt-text">Don't have an Account? Sign up!</p>
                    <input type="button" value="Sign Up" onClick={props.toggleLogin}/>
                </div>
            </form>
        </div>
    )
}

export default Login