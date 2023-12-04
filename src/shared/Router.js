import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Details from '../pages/Details';
import Login from 'pages/Login';
import Profile from 'pages/Profile';
import Layout from 'components/UI/Layout';
import { useSelector } from 'react-redux';

// 로그인이 되어 있으면, 홈을 비롯한 정상적인 페이지를 보여주고
// 로그인이 되어 있지 않으면, 로그인 화면으로 보내주기
// -> 로그인 여부로 분기 처리를 해야 한다.

const Router = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Home />} />
              <Route path='details/:id' element={<Details />} />
              <Route path='profile' element={<Profile />} />
              <Route />
            </Route>
          </>
        ) : (
          <>
            <Route path='/' element={<Layout />}>
              <Route path='/' element={<Login />} />
              <Route path='*' element={<Navigate replace to={'/'} />} />
            </Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
