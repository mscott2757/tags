import React from 'react';
import './styles/css/App.css';
import { TagsOutputContainer, TagsContainer } from './containers/';
import { TagSearch } from './components';

const App = () => (
  <div className='app-container'>
    <div className='app'>
      <TagSearch />
      <TagsContainer />
      <TagsOutputContainer />
    </div>
  </div>
);

export default App;
