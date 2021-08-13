import React,{useEffect} from 'react';
import MainContainer from './layout/MainContainer';
import Nav from './layout/Nav';
import IntroMenu from './layout/IntroMenu';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { importData } from './store/features/ImportCssSlice';
import {CssJsonInt} from './store/features/ImportCssSlice';

const App:React.FC = () => {

  const dispatch = useAppDispatch();
  const stateBool = useAppSelector((state)=>state.appStart.appOn);
  const jsonCSSPath = '/cssProperties.json';

  const cssPropFectch = async (path:string) => {
    await fetch(path).then(result=>result.json()).then(data=>{
      let dataArr:Array<CssJsonInt> = data;
      dataArr.forEach(item =>{
        dispatch(importData(item));
      })
    });
  };

  const nullRet = () =>{
    return;
  }

  useEffect(() => {
    stateBool ? cssPropFectch(jsonCSSPath):nullRet();
  }, [stateBool])

  return (
    <div className="App">
      <Nav/>
      {!stateBool?<IntroMenu/>:<MainContainer/>}
    </div>
  );
  
}

export default App;
