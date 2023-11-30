import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import Layout from 'components/UI/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Navigate replace to={'/'} />} />
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Login />} />
          <Route path='home' element={<Home />} />
          <Route path='details/:id' element={<Details />} />
          <Route path='profile' element={<Profile />} />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
