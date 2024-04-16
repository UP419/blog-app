import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="not-found">
            <h1>404 Not Found</h1>
            <Link to="/">Homepage</Link>
        </div>
    )

}

export default NotFoundPage;