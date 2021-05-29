import React from 'react';
import './App.css';

import { AwardsFrame, BiographyFrame, ContactFrame, CVFrame, ExperienceFrame, PublicationsFrame } from './frames'
import Header from './header'

function App() {
  return (
    <div className="App">
      <Header collapseState={0} />
      <BiographyFrame />
      <ExperienceFrame />
      <AwardsFrame />
      <PublicationsFrame />
      <ContactFrame />
      <CVFrame />
    </div>
  );
}

export default App;
