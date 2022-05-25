import {Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Add from "./pages/addPage/Add";

function App() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path='single' element={<Single/>}/>
                <Route path='new' element={<Add/>}/>
            </Routes>
        </div>
    );
}

export default App;
