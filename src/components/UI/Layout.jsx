import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';

const Layout = () => {
  return (
    <>
      <ScNavBar>
        <Link to='/'>Home</Link>
        <div>
          <Link to='/profile'>내 프로필</Link>
          <span>로그아웃</span>
        </div>
      </ScNavBar>
      <Header />
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
