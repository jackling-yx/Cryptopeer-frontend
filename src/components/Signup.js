import React from 'react'

const Signup = (props) => {
    return (
        <div className="signup-container">
        
            <form>
                <div className="username-container">
                    <input type="text" className="username-input" placeholder="Username" value={props.signupinfo.username} onChange={props.handleChange} />
                </div>
                <div className="password-container">
                    <input type="text" className="password-input" placeholder="Password" value={props.signupinfo.password} onChange={props.handleChange} />
                </div>
                <div className="email-container">
                    <input type="text" className="password-input" placeholder="email" value={props.signupinfo.email} onChange={props.handleChange} />
                </div>
                <div className="firstname-container">
                    <input type="text" className="password-input" placeholder="First Name" value={props.signupinfo.firstname} onChange={props.handleChange} />
                </div>
                <div className="lastname-container">
                    <input type="text" className="password-input" placeholder="Last Name" value={props.signupinfo.lastname} onChange={props.handleChange} />
                </div>
                <div className="imageUrl-container">
                    <input type="text" className="password-input" placeholder="Image Link" value={props.signupinfo.imageUrl} onChange={props.handleChange} />
                </div>
                <div><input type="submit" value="Sign Up" /></div>
                <div>
                    <p className="prompt-text" > Have an Account? Log in!</p>
                    <input type="submit" value="Log in" onClick={props.toggleLogin} /></div>
            </form>
        </div>
    )
}

export default Signup