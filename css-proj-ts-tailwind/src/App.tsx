import React from 'react';
import MainContainer from './layout/MainContainer';
import Nav from './layout/Nav';
import IntroMenu from './layout/IntroMenu';

const App:React.FC = () => {

  return (
    <div className="App">
      <Nav/>
      {/* {introMenu?<IntroMenu/>:<MainContainer/>} */}
    </div>
  );
}

export default App;
