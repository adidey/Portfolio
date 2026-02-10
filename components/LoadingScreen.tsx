
import React from 'react';

const LoadingScreen: React.FC<{ visible: boolean }> = ({ visible }) => {
  return (
    <div className={`fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className="w-48 h-px bg-neutral-900 overflow-hidden relative mb-8">
        <div className="absolute inset-0 bg-white animate-loader" />
      </div>
      <p className="text-[10px] uppercase tracking-[0.6em] text-neutral-500 font-medium">System Loading</p>
    </div>
  );
};

export default LoadingScreen;
