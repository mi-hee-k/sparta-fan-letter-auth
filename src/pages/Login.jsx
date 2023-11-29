import Button from 'components/UI/Button';
import React, { useState } from 'react';
import styled from 'styled-components';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleHandler = () => {
    setIsLogin((isLogin) => !isLogin);
  };
  return (
    <ScFormWrapper>
      <>
        <div>
          <label htmlFor='id'>아이디</label>
          <input type='text' />
        </div>
        <div>
          <label htmlFor='pw'>비밀번호</label>
          <input type='password' />
        </div>
        {isLogin && (
          <div>
            <label htmlFor='pw'>닉네임</label>
            <input type='password' />
          </div>
        )}
        <Button>{isLogin ? '회원가입' : '로그인'}</Button>
        <span onClick={toggleHandler}>{isLogin ? '로그인' : '회원가입'}</span>
      </>
    </ScFormWrapper>
  );
};

const ScFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  border-radius: 10px;
  width: 30%;
  margin: 0 auto;
  padding: 30px;

  div {
    margin-bottom: 10px;
  }

  label {
    margin-right: 10px;
    width: 30%;
  }

  input {
    width: 70%;
    padding: 10px;
    border-radius: 10px;
  }

  button {
    width: 30%;
    margin-bottom: 10px;
  }

  span {
    cursor: pointer;
  }
`;

export default Login;
