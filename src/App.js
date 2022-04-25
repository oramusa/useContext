import {useState, createContext} from 'react';
import './App.css';
import Login from './Login';
import User from './User';
 export  const AppContext=createContext(null);
function App() {
  const [userName, setUserName]=useState('');


  return (
    <div className='zap'>
    <AppContext.Provider value={{userName,setUserName}} >
     <Login />
     <User />
    </AppContext.Provider>
    </div>
  );
}

export default App;
