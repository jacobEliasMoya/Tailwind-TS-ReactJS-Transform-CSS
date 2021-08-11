import React from 'react';
import MainContainer from './layout/MainContainer';
import Nav from './layout/Nav';
import IntroMenu from './layout/IntroMenu';
import { useAppSelector } from './app/hooks';


const App:React.FC = () => {

  const stateBool = useAppSelector((state)=>state.appStart)

  return (
    <div className="App">
      <Nav/>
      {!stateBool?<IntroMenu/>:<MainContainer/>}
    </div>
  );
}

export default App;
