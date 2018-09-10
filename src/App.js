import React from 'react';
import './styles/css/App.css';
import { TagCategoriesContainer, TagsOutputContainer, TagsContainer } from './containers/';

const App = () => {
  return (
    <div className='app-container'>
      <div className='app'>
        <TagCategoriesContainer />
        <TagsContainer />
        <TagsOutputContainer />
      </div>
    </div>
  )
}

export default App;
