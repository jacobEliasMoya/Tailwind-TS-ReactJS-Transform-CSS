import React,{useEffect} from 'react';
import MainContainer from './layout/MainContainer';
import Nav from './layout/Nav';
import IntroMenu from './layout/IntroMenu';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { importData } from './store/features/ImportCssSlice';

const App:React.FC = () => {

  const dispatch = useAppDispatch();
  const stateBool = useAppSelector((state)=>state.appStart.appOn);
  const jsonCSSPath = '/cssProperties.json';
  const cssPropFectch = async (path:string) => {
    await fetch(path).then(result=>result.json()).then(data=>dispatch(importData(data)));
    
  };



  useEffect(() => {
    if(stateBool){
      cssPropFectch(jsonCSSPath);
    }
  }, [stateBool])

  return (
    <div className="App">
      <Nav/>
      {!stateBool?<IntroMenu/>:<MainContainer/>}
    </div>
  );
  
}

export default App;
