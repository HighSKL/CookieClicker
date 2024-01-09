import { useEffect, useState } from 'react';
import './App.css';
import FallingCookie from './Assets/Common/fallingCookie';
import MainPage from './Components/mainPage/mainPage';
import NavigationMenu from './Components/NavigationMenu/NavigationMenu';

function App() {

  let random = (max: number = 100) => Math.floor(Math.random() * max)

  const [isFallingCookieCathed, setIsFallingCookieCathed] = useState(false)

  const catchCookie = () => {
    setIsFallingCookieCathed(true)
  }

  useEffect(()=>{
    setTimeout(()=>{
      setIsFallingCookieCathed(false)
    }, random(30))
  }, [isFallingCookieCathed])

  return (
    <div className="App">
      {!isFallingCookieCathed&&<FallingCookie destroyFunc={catchCookie}/>}
      <MainPage />
      <NavigationMenu />
    </div>
  );
}

export default App;
