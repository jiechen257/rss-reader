import React from 'react';
import useStore from '../store/useStore';

const FeedList: React.FC = () => {
  const feeds = useStore(state => state.feeds);

  return (
    <ul className="space-y-2">
      {feeds.map(feed => (
        <li key={feed.id} className="p-2 bg-gray-100 rounded">
          {feed.title || feed.url}
        </li>
      ))}
    </ul>
  );
}

export default FeedList;