import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
  return (
    // BEM naming convention
    <div className="app">
      
      <Header />
    

    <div className="app__body">
        <Sidebar />
        <Feed />

   
       
        {/* Feed */}
        {/* Widgets */}   
        </div>     
    </div>
  );
}

export default App;
