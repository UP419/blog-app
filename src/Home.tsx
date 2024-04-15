import BlogList from "./BlogList.tsx";
import useFetch from "./useFetch.tsx";

const Home = () => {

    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs")

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={"Blogs List"}/>}
        </div>
    )
}


export default Home;