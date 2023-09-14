import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { Link } from 'react-router-dom';
import Cookies from "universal-cookie";
export default function DetailPage() {
    const [postInfo, setPostInfo] = useState(null);
    const cookies = new Cookies();
    const { id } = useParams();
    console.log(id)
    async function loadData() {
        await fetch('http://localhost:3001/api/post/' + id, {
            headers: {
                'Authorization': 'Bearer ' + cookies.get('token')
            }
        }).then(res => {
            res.json().then(post => {
                setPostInfo(post)
            })
        })
    }
    useEffect(() => {
        loadData()
    }, [id]);
    if (!postInfo) return <></>;
    return (
        <div className="post-page">
            <h1>{postInfo.title}</h1>
            <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
            <div className="image">
                <img src={`http://localhost:3001/${postInfo.cover}`} alt="" />
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>
    );
}