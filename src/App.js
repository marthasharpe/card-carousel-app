import React, { useState } from 'react';
import {
  Container,
} from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import Cards from './Cards';
import Sort from './Sort';
import json from './UIE-InterviewProject'

library.add(faImage);

const App = () => {

  const [data, setData] = useState(json);

  return (
    <Container className="align-items-center fluid">
      <Sort data={data} setData={setData}/>
      <Cards data={data}/>
    </Container>
  );
}

export default App;
