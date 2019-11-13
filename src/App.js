import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import Cards from './Cards';

library.add(faImage);


const App = () => {
  return (
    <div>
      <h1>Sort</h1>
      <Cards />
    </div>
  );
}

export default App;
