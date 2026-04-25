import React from 'react';
import { Helmet } from 'react-helmet-async';
import { InteractiveCanvas } from '../components/InteractiveCanvas';

const Home: React.FC = () => {
  return (
    <div className="w-full bg-[var(--bg)] flex flex-col select-none transition-colors duration-500">
      <Helmet>
        <title>Aditya Dey | Product & UX Designer</title>
        <meta name="description" content="Melbourne-based Product & UX Designer specializing in structured digital experiences." />
      </Helmet>

      <div className="w-full flex flex-col items-center justify-start relative">
        <InteractiveCanvas />
      </div>
    </div>
  );
};

export default Home;
