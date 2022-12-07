import React, { useEffect, useState, useRef, useCallback } from 'react';
import './App.css';

import { BiographyFrame, NewsFrame, ResearchFrame, TeachingFrame, EducationFrame } from './frames'
import Header from './header'
import isNarrow from './hooks/isNarrow';

const headers = [
  {id: "bio", title: "About Me"},
  {id: "news", title: "News"},
  {id: "education", title: "Education"},
  {id: "research", title: "Research"},
  {id: "teaching", title: "Teaching"},
]

function App() {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = isNarrow(800);

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
      <Header isSmall={scrolled} isMobile={isMobile} links={headers}/>
      <BiographyFrame includeContact={isMobile} />
      <NewsFrame />
      <EducationFrame />
      <ResearchFrame />
      <TeachingFrame />
    </div>
  );
}

export default App;
