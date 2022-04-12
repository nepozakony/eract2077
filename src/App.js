import React from "react";

import './App.css';

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Messages from "./Components/Messages/Messages";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";

import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";


function App() {
    return (
        <Router>
            <div className='AppWrapper'>
                <Header/>
                <Navbar/>
                <div className='AppWrapperContent'>
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/messages" element={<Messages/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}


export default App;