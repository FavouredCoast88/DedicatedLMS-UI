import { useState } from "react";
import API from "../services/api";

function Login() {
    const [username, setUsername] = useState("");
    const [token, setToken] = useState("");
    
const handleLogin = async () => {
    try{
        const response = await API.post("auth/login", {
            username: username
        });
        setToken(response.data.token);

        localStorage.setItem("token", response.data.token);
        alert("Login successful!");

    }catch (error) {
        console.error( error);
        alert("Login failed");
    }
};

return (
    <div>
        <h2>Login</h2>
        <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            {token && (
                <p>
                    Token Received successfully
                </p>
            )}
    </div>
);
}

export default Login;