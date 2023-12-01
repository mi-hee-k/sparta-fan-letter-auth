import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/modules/AuthSlice';

const Layout = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logout());
    navigate('login');
  };
  return (
    <>
      {isLogin && (
        <ScNavBar>
          <Link to='/'>Home</Link>
          <div>
            <Link to='/profile'>내 프로필</Link>
            <span onClick={logoutHandler}>로그아웃</span>
          </div>
        </ScNavBar>
      )}
      <main>
        <Outlet />
      </main>
    </>
  );
};

const ScNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #740501;
  color: #fff;

  div a {
    margin-right: 10px;
  }

  span {
    cursor: pointer;
  }
`;

export default Layout;
