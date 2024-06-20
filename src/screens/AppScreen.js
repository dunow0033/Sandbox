import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
//import { TextInput } from "react-native-gesture-handler";

export default function AppScreen() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [errors, setErrors] = useState({ });

    const handleLogin = () => {
        if(!username) {
            setErrors({ username: "Username cannot be empty"});
        } else {
            setErrors({ });
            navigate("/about", { state: {name: username }});
        }
    };

    const handleGuestLogin = () => {
        navigate("/about", { name: "Guest" });
    };

    return (
        <div className="container">
            <h1 className="text">Login Screen</h1>
            <input
                className="input"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && <p className="errorText">{errors.username}</p>}
                <button className="button" onClick={handleLogin}>Login</button>
                <button className="button googleButton">Login with Google</button>
                <button className="button facebookButton">Login with Facebook</button>
                <button className="button guestButton" onClick={handleGuestLogin}>Login As Guest</button>
        </div>
    )
}