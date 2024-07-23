import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import AddFeed from '@/components/AddFeed';
import FeedList from '@/components/FeedList';
import ItemList from '@/components/ItemList';
import useStore from '@/store/useStore';

const App: React.FC = () => {
  const { fetchFeeds, fetchItems } = useStore();

  useEffect(() => {
    fetchFeeds();
    fetchItems();
  }, [fetchFeeds, fetchItems]);

  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-4">RSS Reader</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Add New Feed</h3>
          <AddFeed />
          <h3 className="text-xl font-semibold mt-4 mb-2">Your Feeds</h3>
          <FeedList />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Latest Items</h3>
          <ItemList />
        </div>
      </div>
    </Layout>
  );
}

export default App;