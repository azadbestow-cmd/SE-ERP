import { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Login clicked for:", username);
    // Yahan hum baad mein loginUser function connect karenge
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