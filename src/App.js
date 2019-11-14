import React, { useState } from 'react';
import {
  Container,
} from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import Pages from './Pages';
import Cards from './Cards';
import Sort from './Sort';
import json from './UIE-InterviewProject'

library.add(faImage);

const App = () => {

  const [data, setData] = useState(json);

  return (
    <Container>
      <Sort data={data} setData={setData}/>
      <Cards data={data}/>
      <Pages />
    </Container>
  );
}

export default App;
