import { useState } from 'react';
import { loginUser } from './auth/login'; // Yeh import add karein

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const user = await loginUser(username, password);
      alert("Welcome " + user.username);
    } catch (error) {
      alert("Login Failed!");
    }
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>SE-ERP Login</h1>
      <input 
        placeholder="Username" 
        onChange={(e) => setUsername(e.target.value)} 
      /><br/><br/>
      <input 
        type="password" 
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)} 
      /><br/><br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;