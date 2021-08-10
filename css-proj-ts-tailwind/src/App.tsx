import React from 'react';
import MainContainer from './layout/MainContainer';
import Nav from './layout/Nav';

const App:React.FC = () => {
  return (
    <div className="App">
      <Nav/>
      <MainContainer/>
    </div>
  );
}

export default App;
