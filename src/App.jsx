import React from 'react';
import './styles/App.scss';
import { TagSearch, Tags, TagsOutput, Notification } from './components';

const App = () => (
  <div className='app-container'>
    <div className='app'>
      <Notification />
      <TagSearch />
      <Tags />
      <TagsOutput />
    </div>
  </div>
);

export default App;
