import { useState } from "react";
import API from "../services/api";
import storageService from "../services/storageService";

function Login() {
    const [username, setUsername] = useState("");
    const [token, setToken] = useState(
    storageService.getToken() || "");
    
const handleLogin = async () => {
    try{
        const response = await API.post("auth/login", {
            username: username
        });
        setToken(response.data.token);

         storageService.saveToken(
         response.data.token);
        alert("Login successful!");

    }catch (error) {
        console.error( error);
        alert("Login failed");
    }
};

const handleLogout = () => {
    storageService.removeToken();
    setToken("");
    alert("Logged out");
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
            <button 
               onClick={handleLogin}>
                Login
            </button>
            <button
              type="button"
               onClick={handleLogout}>
                Logout
            </button>

            {token && (
                <p>
                    Token Received successfully
                </p>
            )}
    </div>
);
}

export default Login;