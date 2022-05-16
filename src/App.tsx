import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/profile/:userId' element={<UsersContainer />} />
        <Route path='/' element={< UsersContainer />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
