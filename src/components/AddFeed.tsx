import React, { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import useStore from '../store/useStore';

const AddFeed: React.FC = () => {
  const [url, setUrl] = useState('');
  const addFeed = useStore((state) => state.addFeed);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (url) {
      await addFeed(url);
      setUrl('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <Input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter RSS feed URL"
        required
      />
      <Button type="submit">Add Feed</Button>
    </form>
  );
};

export default AddFeed;