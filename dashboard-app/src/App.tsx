import { useState } from 'react';

export default function App() {
  const [inventory] = useState([
    { id: 1, sku: 'MAC-1001', name: 'Industrial Press', type: 'MACHINE', qty: 12, price: 'Rs 450,000', status: 'True' },
    { id: 2, sku: 'SPR-2005', name: 'Hydraulic Valve', type: 'SPARE_PART', qty: 45, price: 'Rs 15,500', status: 'True' },
    { id: 3, sku: 'CON-3099', name: 'Machine Oil 5L', type: 'CONSUMABLE', qty: 120, price: 'Rs 4,200', status: 'True' }
  ]);

  return (
    <div style={{ padding: '40px', backgroundColor: '#121212', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <h2 style={{ color: '#1a73e8', borderBottom: '2px solid #333', paddingBottom: '15px' }}>
        ANTIGRAVITY ERP - Inventory Stock
      </h2>

      <div style={{ marginTop: '30px', backgroundColor: '#1e1e1e', borderRadius: '10px', padding: '20px', border: '1px solid #333' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#2a2a2a', color: '#aaa' }}>
              <th style={{ padding: '15px', borderBottom: '2px solid #444' }}>SKU</th>
              <th style={{ padding: '15px', borderBottom: '2px solid #444' }}>Product Name</th>
              <th style={{ padding: '15px', borderBottom: '2px solid #444' }}>Product Type</th>
              <th style={{ padding: '15px', borderBottom: '2px solid #444' }}>Available Qty</th>
              <th style={{ padding: '15px', borderBottom: '2px solid #444' }}>Selling Price</th>
              <th style={{ padding: '15px', borderBottom: '2px solid #444' }}>Active</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map(item => (
              <tr key={item.id} style={{ borderBottom: '1px solid #333' }}>
                <td style={{ padding: '15px' }}>{item.sku}</td>
                <td style={{ padding: '15px', fontWeight: 'bold' }}>{item.name}</td>
                <td style={{ padding: '15px' }}>{item.type}</td>
                <td style={{ padding: '15px' }}>{item.qty}</td>
                <td style={{ padding: '15px' }}>{item.price}</td>
                <td style={{ padding: '15px', color: item.status === 'True' ? '#4caf50' : '#f44336' }}>
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}