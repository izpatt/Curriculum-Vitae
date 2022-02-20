import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Education from './components/education';
import Contact from './components/contact';
import Experience from './components/experience';
import Skills from './components/skills';
import HonorsAwards from './components/honorsAwards';
import Seminars from './components/seminars';
import Licenses from './components/licenses';
import CharacterReferences from './components/characterReferences';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Contact />
    <Education />
    <Experience />
    <Skills />
    <HonorsAwards />
    <Seminars />
    <Licenses />
    <CharacterReferences />
  </React.StrictMode>,
  document.getElementById('root')
);

