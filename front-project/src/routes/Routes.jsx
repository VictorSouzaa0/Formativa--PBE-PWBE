import {BrowserRouter, Routes, Route} from 'react-router';
import {HomePage }from '../pages/Home';
import {Login }from '../pages/Login';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {<Route path="/home" element={<HomePage/>}/>  }
      </Routes>
    </BrowserRouter>
  );
}