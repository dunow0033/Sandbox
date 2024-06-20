import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutScreen from './screens/AboutScreen';
import AppScreen from './screens/AppScreen';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<AppScreen />} />
                <Route path="/about" element={<AboutScreen />} />
            </Routes>
        </Router>
    )
}

export default App;