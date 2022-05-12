import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import style from './App.module.scss'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< UsersContainer />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
