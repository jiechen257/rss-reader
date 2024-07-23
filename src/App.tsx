import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import useStore from '@/store/useStore';

const App: React.FC = () => {
  const { fetchFeeds, fetchItems } = useStore();

  useEffect(() => {
    fetchFeeds();
    fetchItems();
  }, [fetchFeeds, fetchItems]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;