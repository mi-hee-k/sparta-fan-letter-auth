import axios from 'axios';
import Button from 'components/UI/Button';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginToggle } from 'redux/modules/AuthSlice';
import styled from 'styled-components';

const Login = () => {
  const loginState = useSelector((state) => state.loginState.value);
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    id: '',
    password: '',
    nickname: '',
  });

  const toggleHandler = () => {
    dispatch(loginToggle(loginState));
    // setIsLogin((isLogin) => !isLogin);
  };

  const inputHandler = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   // 유효성 검사
  //   var regId = /^[a-zA-Z]{4,10}$/;
  //   var regPw = /^[a-zA-Z0-9]{4,15}$/;
  //   var regNickname = /^[a-zA-Z가-힣0-9]{1,10}$/;
  //   if (!loginState && (!regId.test(inputs.id) || !regPw.test(inputs.pw))) {
  //     console.log('no');
  //   }
  //   if (
  //     loginState &&
  //     (!regId.test(inputs.id) ||
  //       !regPw.test(inputs.pw) ||
  //       !regNickname.test(inputs.nickname))
  //   ) {
  //     console.log('no');
  //   }

  //   //
  // };

  const registerHandler = async () => {
    const newUser = {
      id: inputs.id,
      password: inputs.password,
      nickname: inputs.nickname,
    };

    try {
      const response = await axios.post(
        'https://moneyfulpublicpolicy.co.kr/register',
        newUser
      );
      console.log(response);
    } catch (error) {
      console.log(error);
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
      localStorage.setItem('key', data.accessToken);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ScFormWrapper>
      <>
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
  width: 50%;
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
