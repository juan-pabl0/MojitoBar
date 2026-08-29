import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import './index.css';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center h-screen">
      <h1 className="text-3xl text-indigo-300 h-1.5 ">Hello, Vite!</h1>
    </div>
  );
};

export default App;
