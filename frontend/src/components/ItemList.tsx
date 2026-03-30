import React from 'react';
import { Item } from '../types/Item';

interface ItemListProps {
  items: Item[];
  onEdit: (item: Item) => void;
  onDelete: (id: string) => void;
}

const ItemList: React.FC<ItemListProps> = ({ items, onEdit, onDelete }) => {
  const getCategoryClass = (category: string) => {
    switch (category) {
      case 'personal': return 'category-personal';
      case 'business': return 'category-business';
      case 'hobby': return 'category-hobby';
      default: return 'category-other';
    }
  };

  return (
    <div className="item-list">
      <h2>Items ({items.length})</h2>
      
      {items.length === 0 ? (
        <div className="empty-state">
          <p>No items found. Add your first item above!</p>
        </div>
      ) : (
        <div className="items-grid">
          {items.map((item) => (
            <div key={item._id} className={`item-card ${item.completed ? 'completed' : ''}`}>
              <div className="item-header">
                <h3 className="item-title">{item.title}</h3>
                <span 
                  className={`category-badge ${getCategoryClass(item.category)}`}
                >
                  {item.category}
                </span>
              </div>
              
              {item.description && (
                <p className="item-description">{item.description}</p>
              )}
              
              <div className="item-meta">
                <small className="item-date">
                  Created: {new Date(item.createdAt).toLocaleDateString()}
                </small>
                {item.completed && (
                  <span className="completed-badge">✓ Completed</span>
                )}
              </div>
              
              <div className="item-actions">
                <button 
                  onClick={() => onEdit(item)} 
                  className="btn btn-sm btn-outline"
                >
                  Edit
                </button>
                <button 
                  onClick={() => onDelete(item._id)} 
                  className="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemList;
