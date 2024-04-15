import Navbar from "./Navbar.tsx";
import Home from "./Home.tsx";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NewBlog from "./NewBlog.tsx";
import BlogDetails from "./BlogDetails.tsx";

function App() {

    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/create">
                            <NewBlog/>
                        </Route>
                        <Route path="/blogs/:id">
                            <BlogDetails/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App
