import React from 'react';
import './styles/css/App.css';
import TagsOutputContainer from './containers/TagsOutputContainer';
import TagsContainer from './containers/TagsContainer';
import TagCategoryContainer from './containers/TagCategoryContainer';

const App = () => {
  return (
    <div className='app-container'>
      <div className='app'>
        <div className='app-title'>
          <h3>Mason Chan</h3>
        </div>
        <div className='tag-categories'>
          <TagCategoryContainer id='cameras' />
          <TagCategoryContainer id='colorFilms' />
          <TagCategoryContainer id='bwFilms' />
          <TagCategoryContainer id='locations' />
        </div>
        <TagsContainer />
        <TagsOutputContainer />
      </div>
    </div>
  )
}

export default App;
