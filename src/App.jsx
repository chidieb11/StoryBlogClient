import {Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Add from "./pages/addPage/Add";
import Login from "./pages/login /Login";
import Register from "./pages/register/Register";

function App() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path='single' element={<Single/>}/>
                <Route path='new' element={<Add/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path='register' element={<Register/>}/>
            </Routes>
        </div>
    );
}

export default App;
