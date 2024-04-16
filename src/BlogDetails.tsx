import {useHistory, useParams} from 'react-router-dom'
import useFetch from "./useFetch.tsx";

const BlogDetails = () => {
    const {id} = useParams();
    const {data: blog, isPending, error} = useFetch("http://localhost:8000/blogs/" + id);

    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            console.log("Deleted blog");
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={() => handleClick()}>Delete blog</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails;