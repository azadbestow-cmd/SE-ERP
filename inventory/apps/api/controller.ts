import React from 'react';

export default function DashboardUI() {
  return (
    <div style={{ padding: '30px', backgroundColor: '#f0f2f5', minHeight: '100vh', fontFamily: 'Arial' }}>
      <h1 style={{ color: '#1a73e8' }}>Antigravity Dashboard</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        <div style={cardStyle}><h3>Total Stock</h3><p>150 Items</p></div>
        <div style={cardStyle}><h3>Active Visitors</h3><p>5 People</p></div>
        <div style={cardStyle}><h3>Pending Tasks</h3><p>3 Alerts</p></div>
      </div>

      <div style={{ marginTop: '30px', padding: '20px', background: '#fff', borderRadius: '10px' }}>
        <h3>Quick Action</h3>
        <button style={btnStyle}>Scan New QR Code</button>
      </div>
    </div>
  );
}

const cardStyle = { padding: '20px', background: '#fff', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' };
const btnStyle = { padding: '10px 20px', background: '#1a73e8', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' };