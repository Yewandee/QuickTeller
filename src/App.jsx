import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Card from './components/Card';
import { useState } from 'react';
import BuyAirtimeData from './components/BuyAirtimeData';

function App() {
 const [active, setActive] = useState('Card')

 const showDashboard = (component) =>{
  setActive(component);
 }

  return (
    <div className="app">
      <Header />
      <Sidebar showDashboard= {showDashboard}/>
      <main className="app__content">
        {active === 'Card' && <Card/>}
        {active === 'BuyAirtimeData' && <BuyAirtimeData/>}
      </main>
      <div className="footer">OK</div>
    </div>
  )
}

export default App
