import { useEffect } from 'react';
import { useState } from 'react';
import "./PostContainer.css";
import Post from '../Post/Post'; 

export default function PostContainer() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPost(data))
        .catch(err => console.log(err))
        .finally(() => console.log("Completado"))
    }, [])


  return (
    <section className='postContainer'>
        {
            post.map((p) => {
                return (
                    <Post key={p.id} data={p} />
                )
            })
        }
    </section>
  )
}
