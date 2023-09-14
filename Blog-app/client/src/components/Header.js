import React from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie';
export default function Header() {
    const cookies = new Cookies();
    const logged = cookies.get('token')
    function logout() {
        cookies.remove('token')
    }
    return (
        <header>
            <Link to="/" className="logo">MyBlog</Link>
            <nav>
                {logged && (
                    <>
                        <Link to="/create">Create new post</Link>
                        <a onClick={logout}>Logout </a>
                    </>
                )}
                {!logged && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    );
}