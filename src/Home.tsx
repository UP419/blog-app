import {useEffect, useState} from "react";
import BlogList from "./BlogList.tsx";

const Home = () => {

    const [blogs, setBlogs] = useState([
        {title: "LOTR1", body: " Body1", author: "Tolkien", id: 1},
        {title: "Title2", body: " Body2", author: "Paulo", id: 2},
        {title: "LOTR3", body: " Body3", author: "Tolkien", id: 3}
    ]);

    const [name, setName] = useState("mario");

    const handleDelete = (id) => {
        console.log(id)
        const filteredBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(filteredBlogs);
    }

    useEffect(() => {
            console.log("Use effect usage!")
            console.log(name);
        }, [name]
    );
    // if deps array is empty, useEffect function only runs after initial render

    return (
        <div className="home">
            <BlogList blogs={blogs} title={"Blogs List"} handleDelete={handleDelete}/>
            <button onClick={() => setName("Luigi")}>Change name</button>
            <p>{name}</p>
        </div>
    )
}


export default Home;