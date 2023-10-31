import React from 'react';
import './LoginArea.css';
import { Link } from 'react-router-dom';
const LoginArea = ({ user }) => {
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <div className="login-area-container">
            <div className="login-area-title">
                <p>Admin Login</p>
            </div>
            <div className="login-area-body">
                <form>
                    <input
                        onChange={(e) => setUserName(e.target.value)}
                        type="text" placeholder="Username" />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" placeholder="Password" />
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            user.login(userName, password);
                            window.location.reload(false)
                        }}
                        type="submit" value="submit">
                        Login
                    </button>
                </form>
                {/* <div className="login-area-footer">
                    <Link to="admin/forgot-password">Forgot Password?</Link> | <Link to="admin/register">Register</Link> | <Link to="/">Back to Home</Link>
                </div> */}
            </div>
        </div>

    );
};

export default LoginArea;
