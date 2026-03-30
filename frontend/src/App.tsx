import React, { useState, useEffect } from 'react';
import './App.css';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import { Item } from './types/Item';

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  const fetchItems = async () => {
    try {
      const response = await fetch('https://your-backend-url.com/api/items');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setItems(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Error fetching items:', error);
      setItems([]); // Set empty array on error to prevent map errors
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleItemSubmit = async (itemData: Omit<Item, '_id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const url = editingItem 
        ? `https://your-backend-url.com/api/items/${editingItem._id}`
        : 'https://your-backend-url.com/api/items';
      const method = editingItem ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemData),
      });

      if (response.ok) {
        fetchItems();
        setEditingItem(null);
      }
    } catch (error) {
      console.error('Error saving item:', error);
    }
  };

  const handleEdit = (item: Item) => {
    setEditingItem(item);
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`https://your-backend-url.com/api/items/${id}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        fetchItems();
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Small Web Application</h1>
        <p>A simple full-stack app with React and Node.js</p>
      </header>
      
      <main className="App-main">
        <div className="container">
          <div className="form-section">
            <ItemForm 
              onSubmit={handleItemSubmit} 
              editingItem={editingItem}
              onCancel={() => setEditingItem(null)}
            />
          </div>
          
          <div className="list-section">
            <ItemList 
              items={items} 
              onEdit={handleEdit} 
              onDelete={handleDelete} 
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
