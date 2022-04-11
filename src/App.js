import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Messages from "./Components/Messages/Messages";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Properties from "./Components/Properties/Properties";
import {
    BrowserRouter,
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Router>
                <div className='AppWrapper'>
                    <Header/>
                    <Navbar/>
                    <div className='AppWrapperContent'>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/messages" component={Messages}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/properties" component={Properties}/>
                    </div>
                </div>
            </Router>
        </BrowserRouter>
    );
}

export default App;
