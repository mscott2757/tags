import React from 'react';
import './styles/css/App.css';
import { TagSearch, Tags, TagsOutput, Notification } from './components';

const App = () => (
  <div className='app-container'>
    <div className='app'>
      <TagSearch />
      <Tags />
      <TagsOutput />
      <Notification />
    </div>
  </div>
);

export default App;
