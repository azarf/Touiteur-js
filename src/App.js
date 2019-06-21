import React from 'react';
import './App.css';
import Header from './components/Header';
import Sendmessageform from './components/Sendmessageform';
import Touitcontainer from './components/Touitcontainer';
import Trending from './components/Trending';

class App extends React.Component {
  
  render(){
  return (
   <div className="App">
      <Header/>
      <Sendmessageform/>
      <div className='row pt-5 px-3'>
      <div className='col-3'>
      <Trending/>
      </div>
      <div className='col-9'>
      <Touitcontainer/>
      </div>
      </div>
      </div>
      
      
  );
}
}
export default App;
