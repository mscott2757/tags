import React from 'react';
import './styles/css/App.css';
import { TagSearch, Tags, TagsOutput } from './components';

const App = () => (
  <div className='app-container'>
    <div className='app'>
      <TagSearch />
      <Tags />
      <TagsOutput />
    </div>
  </div>
);

export default App;
