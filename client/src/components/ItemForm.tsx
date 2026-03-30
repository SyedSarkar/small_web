import React, { useState, useEffect } from 'react';
import { Item } from '../types/Item';

interface ItemFormProps {
  onSubmit: (item: Omit<Item, '_id' | 'createdAt' | 'updatedAt'>) => void;
  editingItem?: Item | null;
  onCancel: () => void;
}

const ItemForm: React.FC<ItemFormProps> = ({ onSubmit, editingItem, onCancel }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<'personal' | 'business' | 'hobby' | 'other'>('other');

  useEffect(() => {
    if (editingItem) {
      setTitle(editingItem.title);
      setDescription(editingItem.description || '');
      setCategory(editingItem.category);
    } else {
      setTitle('');
      setDescription('');
      setCategory('other');
    }
  }, [editingItem]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      description,
      category,
      completed: false
    });
  };

  return (
    <div className="item-form">
      <h2>{editingItem ? 'Edit Item' : 'Add New Item'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title *</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter item title"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter item description"
            rows={3}
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category *</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value as any)}
            required
          >
            <option value="personal">Personal</option>
            <option value="business">Business</option>
            <option value="hobby">Hobby</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {editingItem ? 'Update Item' : 'Add Item'}
          </button>
          {editingItem && (
            <button type="button" onClick={onCancel} className="btn btn-secondary">
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ItemForm;
