import React from 'react';
import Layout from '../components/Layout';
import FeedItem from '../components/FeedItem';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-4">
        <FeedItem 
          title="科技爱好者周刊（第 309 期）：无人驾驶出租车的前景" 
          image="/path/to/image1.jpg"
          source="阮一峰的网络日志"
          time="4d"
        />
        <FeedItem 
          title="AI 编程助手测评：GitHub Copilot vs 豆包 MarsCode" 
          image="/path/to/image2.jpg"
          source="阮一峰的网络日志"
          time="3w"
        />
      </div>
    </Layout>
  );
};

export default Home;