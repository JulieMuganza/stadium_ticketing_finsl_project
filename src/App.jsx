import React from 'react'
import image from "./assets/react.svg"
import "./app.css"
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Import your i18n setup
import Homepage from './components/Homepage';


const App = () => {
  return (
    <div className='imageContainer'> 
      < img src ={image} alt="react_logo"/>
    </div>
  )
}

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Homepage />
    </I18nextProvider>
  );
}


export default App
