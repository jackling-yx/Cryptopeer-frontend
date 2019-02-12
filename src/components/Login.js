import React from 'react'

const Login = (props) => {
    return (
        <div className="login-container">
            <form>
                <div className="username-container">
                    <input type="text" className="username-input" placeholder="Username" value={props.logininfo.username} onChange={props.handleChange} />
                </div>
                <div className="password-container">
                    <input type="text" className="password-input" placeholder="Password" value={props.logininfo.password} onChange={props.handleChange} />
                </div>
                <div>
                    <input type="button" value="Log In" onSubmit={props.handleSubmit}/>
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