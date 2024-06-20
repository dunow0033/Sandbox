//import { render } from "@testing-library/react";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../App.css';
import axios from 'axios';

export default function AboutScreen() {

    const [data, setData] = useState('');
    const [status, setStatus] = useState('');
    const [statusText, setStatusText] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const { name } = location.state || { name: 'Guest' };

    const handleLogout = () => {
      
      // eslint-disable-next-line no-restricted-globals
        let proceed = confirm("Are you sure you want to logout?");
        if(proceed)
            navigate("/");
    };

    const getUser = async() => {
        try {
            const response = await axios.get('http://localhost:5109/User');
      
            console.log(response);
      
            const { data, status, statusText } = response;
            setData(data);
            setStatus(status);
            setStatusText(statusText);
          } catch (error) {
            console.error('Error fetching user:', error);
          } finally {
            console.log('Request completed');
        }
      };
      
      function handleClick() {
        getUser()
      };

      return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome, {name}!!</h1>
                <h3>{data}</h3>
                <h4>{status}</h4>
                <h4>{statusText}</h4>
                <button 
                    onClick={handleClick}>Submit</button>
                <button
                    onClick={handleLogout}>Logout</button>
            </header>
        </div>
      )
}