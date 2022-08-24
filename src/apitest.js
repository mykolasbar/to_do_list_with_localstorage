import React, { useState, useEffect } from 'react';

function BlogPosts(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:8000/api/posts")
        .then(res => res.json())
        .then(
          (result) => { console.log(result); // <--- check this out in the console
             setPosts(result);  setIsLoaded(true); },
          (error) => { setError(error); setIsLoaded(true); })
    }, [])
  
    if (!isLoaded) {
        return <div>Loading...</div>;
    } else if (error) {
        return <div>Error: {error.message}</div>;
    } else {
      return (
          <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Text</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td>{post.text}</td>
                            <td><button className="btn btn-dark">Delete</button></td>
                        </tr>)
                    )}
                </tbody>
            </table>
          </div>
      );
    }
}
export default BlogPosts;
