import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets.js';
import Login from './components/Login.js';
import { useStateValue } from "./StateProvider";


function App() {
  const [{ user }, dispatch] = useStateValue();


  return (
    // BEM naming convention
    <div className="app">

    {!user ? (
      <Login />)
       : (
         <>
         <Header />
         <div className="app__body">
           <Sidebar />
           <Feed />

           {/* Feed */}
           {/* Widgets */}
           <Widgets />
         </div>  
        </>
       )}
    
    </div>
  );
}

export default App;
