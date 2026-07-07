import React, { useState } from 'react';

export default function AntigravityDashboard() {
  const [name, setName] = useState('');
  const [stock, setStock] = useState('');

  const addProduct = () => {
    alert(`Product Added: ${name} with ${stock} items!`);
    // Yahan hum database logic connect karenge
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Antigravity ERP - Inventory</h1>
      <div style={{ marginBottom: '20px' }}>
        <input placeholder="Product Name" onChange={(e) => setName(e.target.value)} />
        <input type="number" placeholder="Stock" onChange={(e) => setStock(e.target.value)} />
        <button onClick={addProduct}>Add Product</button>
      </div>
    </div>
  );
}