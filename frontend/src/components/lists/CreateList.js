import React, {useState, useEffect} from 'react'
import axios from 'axios'

const CreateList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() =>{
        axios.post('http://localhost:27010/routes/lists').then(res => {
            console.log(res);
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return(
        <div>
            <ul>
                {
                    posts.map(post => <li key={post.id}>{post.title}</li>)
                }
                </ul>
        </div>
    );
}

export default CreateList