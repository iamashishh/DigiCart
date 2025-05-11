import React, { useEffect, useState } from 'react';
import Axios from '../utils/axios';

const AdminItemsPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    Axios.get('/admin/items')
      .then(res => {
        setItems(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching items", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center p-4">Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(item => (
          <div key={item._id} className="p-4 border rounded shadow-sm">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p>{item.description}</p>
            <span className="text-sm text-gray-500">ID: {item._id}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminItemsPage;
