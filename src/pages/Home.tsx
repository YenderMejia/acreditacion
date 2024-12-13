import React from 'react';
import Navbar from '../components/Navbar';
import Billboard from '../components/Billboard';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <Billboard />
    </div>
  );
};

export default Home;
