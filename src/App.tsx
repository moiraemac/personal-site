import React, { useEffect, useState, useRef, useCallback } from 'react';
import './App.css';

import { BiographyFrame, NewsFrame, ResearchFrame, LinksFrame } from './frames'
import Header from './header'
import isNarrow from './hooks/isNarrow';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = isNarrow(450);

  const className = isMobile ? "App App-Mobile" : "App";
  
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY >= 200);
  }, [setScrolled]);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll]);
  return (
    <div className={className}>
      <Header isSmall={scrolled} isMobile={isMobile}/>
      <BiographyFrame />
      <NewsFrame />
      <ResearchFrame />
      <LinksFrame />
    </div>
  );
}

export default App;
