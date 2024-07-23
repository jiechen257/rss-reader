import { create } from 'zustand';
import { Feed, Item } from '@/types';

interface StoreState {
  feeds: Feed[];
  items: Item[];
  addFeed: (url: string) => Promise<void>;
  fetchFeeds: () => Promise<void>;
  fetchItems: () => Promise<void>;
}

const useStore = create<StoreState>((set) => ({
  feeds: [],
  items: [],
  addFeed: async (url) => {
    try {
      const response = await fetch('/api/feeds', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      if (!response.ok) throw new Error('Failed to add feed');
      const feed = await response.json();
      set((state) => ({ feeds: [...state.feeds, feed] }));
    } catch (error) {
      console.error('Failed to add feed:', error);
    }
  },
  fetchFeeds: async () => {
    try {
      const response = await fetch('/api/feeds');
      if (!response.ok) throw new Error('Failed to fetch feeds');
      const feeds = await response.json();
      set({ feeds });
    } catch (error) {
      console.error('Failed to fetch feeds:', error);
    }
  },
  fetchItems: async () => {
    try {
      const response = await fetch('/api/items');
      if (!response.ok) throw new Error('Failed to fetch items');
      const items = await response.json();
      set({ items });
    } catch (error) {
      console.error('Failed to fetch items:', error);
    }
  },
}));

export default useStore;