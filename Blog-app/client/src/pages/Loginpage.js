import React from 'react'
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
const Loginpage = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate()
    const cookies = new Cookies();
    async function register(ev) {
        ev.preventDefault();
        const response = await fetch('http://localhost:3001/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        })
        if (response.status === 200) {
            response.json()
                .then((data) => {
                    cookies.set('token', data.token);
                    navigate('/')
                })
        } else {
            response.json().then(data => alert(data.message))
        }

    }
    return (
        <form className="register" onSubmit={register}>
            <h1>Login</h1>
            <input type="text"
                placeholder="username"
                value={username}
                onChange={ev => setUsername(ev.target.value)} />
            <input type="password"
                placeholder="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)} />
            <button>Register</button>
        </form>
    );
}
export default Loginpage