import React from 'react';
import useStore from '../store/useStore';

const ItemList: React.FC = () => {
  const items = useStore(state => state.items);

  return (
    <ul className="space-y-4">
      {items.map(item => (
        <li key={item.id} className="p-4 border rounded">
          <h4 className="font-bold">{item.title}</h4>
          <p className="text-sm text-gray-600">{new Date(item.pubDate).toLocaleString()}</p>
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Read more
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;