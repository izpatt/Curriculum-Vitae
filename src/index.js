import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Education from './education';
import Contact from './contact';
import Experience from './experience';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Contact />
    <Education />
    <Experience />
  </React.StrictMode>,
  document.getElementById('root')
);

