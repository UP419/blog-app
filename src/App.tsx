import Navbar from "./Navbar.tsx";
import Home from "./Home.tsx";

function App() {

    return (
        <div className="App">
            <Navbar/>
            <div className="content">
                <Home/>
            </div>
        </div>
    )
}

export default App
