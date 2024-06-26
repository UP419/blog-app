import {useState} from "react";
import {useHistory} from 'react-router-dom';

const NewBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault() //prevents page from being refreshed
        const blog = {title, body, author};
        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log("Added new blog");
            history.push('/');
            setIsPending(false);
        })
    }

    // go one step back: history.go(-1);

    return (
        <div className="new-blog">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea required
                          value={body}
                          onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog author:</label>
                <select value={author}
                        onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Tolkien">Tolkien</option>
                    <option value="Paulo">Paulo</option>
                    <option value="Orwell">Orwell</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled={true}>Adding blog ...</button>}
            </form>
        </div>
    )
}


export default NewBlog;