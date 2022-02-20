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
import './body.css';


ReactDOM.render(
  <React.StrictMode>

  <div class="container">
    <div class="row">
      <div class="col">
      </div>
    <div class="col-10">
      <Header/>
      <Contact />
      <Education />
      <Experience />
      <Skills />
      <HonorsAwards />
      <Seminars />
      <Licenses />
      <CharacterReferences />
    </div>
    <div class="col">
    </div>
    </div>
  </div>

  </React.StrictMode>,
  document.getElementById('root')
);

