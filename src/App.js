import React from 'react';
import './styles/css/App.css';
import TagsOutputContainer from './containers/TagsOutputContainer';
import TagsContainer from './containers/TagsContainer';

const App = () => {
  return (
    <div className='app-container'>
      <div className='app'>
        <TagsContainer />
        <TagsOutputContainer />
      </div>
    </div>
  )
}

export default App;
