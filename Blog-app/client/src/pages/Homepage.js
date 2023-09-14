import Post from "../components/Post";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
export default function IndexPage() {
    const [posts, setPosts] = useState([]);
    const cookies = new Cookies()
    async function loadData() {
        const response = await fetch('http://localhost:3001/api/post', {
            headers: {
                'Authorization': 'Bearer ' + cookies.get('token')
            }
        })
        response.json().then(posts => {
            setPosts(posts)
        })
    }
    useEffect(() => {
        loadData()
    }, []);
    return (
        <>
            {posts.length > 0 && posts.map(post => (
                <Post {...post} />
            ))}
        </>
    );
}