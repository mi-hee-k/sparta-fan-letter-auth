import api from '../axios/api';
import Button from 'components/UI/Button';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from 'redux/modules/AuthSlice';
import { toast } from 'react-toastify';

import styled from 'styled-components';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginState, setLoginState] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
    nickname: '',
  });

  const toggleHandler = () => {
    setLoginState((isLogin) => !isLogin);
  };

  const inputHandler = (e) => {
    const { name, value } = e.target;
    const { id, password, nickname } = inputs;

    if (loginState) {
      // 회원가입 시 유효성 검사
      if (id.length === 0 || password.length === 0 || nickname.length === 0) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    } else {
      // 로그인 시 유효성 검사
      if (id.length === 0 || password.length === 0) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    }

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // 유효성 검사
  let regId = /^[a-zA-Z]{4,10}$/;
  let regPw = /^[a-zA-Z0-9]{4,15}$/;
  let regNickname = /^[a-zA-Z가-힣0-9]{1,10}$/;

  // 회원가입
  const registerHandler = async () => {
    const newUser = {
      id: inputs.id,
      password: inputs.password,
      nickname: inputs.nickname,
    };

    if (
      !regId.test(inputs.id) ||
      !regPw.test(inputs.password) ||
      !regNickname.test(inputs.nickname)
    ) {
      return;
    }

    try {
      await api.post('/register', newUser);
      setLoginState((loginState) => !loginState);
      setInputs({
        id: '',
        password: '',
      });
      toast.success('🙆‍♀️ 회원가입 성공!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } catch (error) {
      toast.error(error.response.data.message, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  // 로그인
  const loginHandler = async () => {
    const userInfo = {
      id: inputs.id,
      password: inputs.password,
    };

    if (
      !loginState &&
      (!regId.test(inputs.id) || !regPw.test(inputs.password))
    ) {
      return;
    }

    try {
      const { data } = await api.post('/login', userInfo);
      dispatch(login(data));
      toast.success('🙆‍♀️ 로그인 성공!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      navigate('/');
    } catch (error) {
      toast.error(error.response.data.message, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  return (
    <ScFormWrapper>
      <ScForm>
        <h1>{loginState ? '회원가입' : '로그인'}</h1>
        <div>
          <label htmlFor='id'>아이디</label>
          <input
            type='text'
            name='id'
            value={inputs.id}
            onChange={inputHandler}
            placeholder='영문(4~10글자)'
          />
        </div>
        <div>
          <label htmlFor='password'>비밀번호</label>
          <input
            type='password'
            name='password'
            value={inputs.password}
            onChange={inputHandler}
            placeholder='영문, 숫자포함(4~15글자)'
          />
        </div>
        {loginState && (
          <div>
            <label htmlFor='pw'>닉네임</label>
            <input
              type='text'
              name='nickname'
              value={inputs.nickname}
              onChange={inputHandler}
              placeholder='영문, 숫자, 한글(1~10글자)'
            />
          </div>
        )}
        {loginState ? (
          <Button type='button' onClick={registerHandler} disabled={isValid}>
            회원가입
          </Button>
        ) : (
          <Button type='button' onClick={loginHandler} disabled={isValid}>
            로그인
          </Button>
        )}
        <span onClick={toggleHandler}>
          {loginState ? '로그인' : '회원가입'}
        </span>
      </ScForm>
    </ScFormWrapper>
  );
};

const ScFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const ScForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  border-radius: 10px;
  width: 50%;

  margin: 0 auto;
  padding: 30px;

  h1 {
    margin-bottom: 30px;
  }

  div {
    margin-bottom: 20px;
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

  button:first-child {
    margin-bottom: 30px;
  }

  button {
    width: 30%;
    margin-bottom: 20px;
  }

  span {
    cursor: pointer;
  }
`;

export default Login;
