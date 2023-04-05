import React from 'react';
import './App.css';
import FallingCookie from './Assets/Common/fallingCookie';
import MainPage from './Components/mainPage/mainPage';
import NavigationMenu from './Components/NavigationMenu/NavigationMenu';
import ShopWindow from './Components/ShopWindow/ShopWindow';

function App() {
  return (
    <div className="App">
      <FallingCookie />
      <MainPage />
      <NavigationMenu />
    </div>
  );
}

export default App;
