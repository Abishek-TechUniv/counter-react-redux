import React from 'react';

import Button from '../Button';
import Text from '../Text';

import './App.css';

const App = () => <div>
    <Button text='-' isInc={false}/>
      <Text/>
    <Button text='+' isInc={true}/>
  </div>


export default App;
