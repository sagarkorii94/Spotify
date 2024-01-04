import React from 'react';
import LeftMenu from './Components/LeftMenu';
import RightMenu from './Components/RightMenu';
import MainContainer from './Components/MainContainer';
import "./App.css";
function App() {
  return (
    <div className='App'>
      <LeftMenu/>
      <RightMenu/>
      <MainContainer/>  

      <div className='background'></div>
    </div>
  );
}

export default App;
