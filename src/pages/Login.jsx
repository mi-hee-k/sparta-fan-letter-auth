import axios from 'axios';
import Button from 'components/UI/Button';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from 'redux/modules/AuthSlice';
import styled from 'styled-components';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginState, setLoginState] = useState(false);
  const [inputs, setInputs] = useState({
    id: '',
    password: '',
    nickname: '',
  });

  const toggleHandler = () => {
    setLoginState((isLogin) => !isLogin);
  };

  const inputHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const regCheck = () => {
    // 유효성 검사
    var regId = /^[a-zA-Z]{4,10}$/;
    var regPw = /^[a-zA-Z0-9]{4,15}$/;
    var regNickname = /^[a-zA-Z가-힣0-9]{1,10}$/;
    if (!loginState && (!regId.test(inputs.id) || !regPw.test(inputs.pw))) {
      return false;
    }
    if (
      loginState &&
      (!regId.test(inputs.id) ||
        !regPw.test(inputs.pw) ||
        !regNickname.test(inputs.nickname))
    ) {
      return false;
    }
    return true;
  };

  const registerHandler = async () => {
    const newUser = {
      id: inputs.id,
      password: inputs.password,
      nickname: inputs.nickname,
    };

    if (regCheck()) {
      // ...
    }

    try {
      await axios.post('https://moneyfulpublicpolicy.co.kr/register', newUser);
      setLoginState((loginState) => !loginState);
      setInputs({
        id: '',
        password: '',
      });
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const loginHandler = async () => {
    const userInfo = {
      id: inputs.id,
      password: inputs.password,
    };

    try {
      const { data } = await axios.post(
        'https://moneyfulpublicpolicy.co.kr/login',
        userInfo
      );
      dispatch(login(data));
      navigate('/');
    } catch (error) {
      alert(error.response.data.message);
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
          <Button type='button' onClick={registerHandler}>
            회원가입
          </Button>
        ) : (
          <Button type='button' onClick={loginHandler}>
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
