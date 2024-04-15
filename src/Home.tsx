import {useEffect, useState} from "react";
import BlogList from "./BlogList.tsx";

const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    // json server for database - npx json-server --watch data/db.json --port 8000

    useEffect(() => {
            fetch("http://localhost:8000/blogs")
                .then(res => {
                    if (!res.ok) {
                        throw Error("Something wrong!");
                    }
                    return res.json()
                })
                .then(data => {
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setError(err.message);
                    setIsPending(false);
                })
        }, []
    );
    // if deps array is empty, useEffect function only runs after initial render

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={"Blogs List"}/>}
        </div>
    )
}


export default Home;