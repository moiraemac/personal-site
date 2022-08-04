import React, { useEffect, useState, useRef, useCallback } from 'react';
import './App.css';

import { BiographyFrame, NewsFrame, ResearchFrame, LinksFrame } from './frames'
import Header from './header'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const handleScroll = useCallback(() => {
    if (window.scrollY >= 200) setScrolled(true)
    else setScrolled(false)
  }, [setScrolled])
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])
  return (
    <div className="App">
      <Header isSmall={scrolled} />
      <BiographyFrame />
      <NewsFrame />
      <ResearchFrame />
      <LinksFrame />
    </div>
  );
}

export default App;
