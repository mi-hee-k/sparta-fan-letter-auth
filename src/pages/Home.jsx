import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

// import { addHandler } from 'redux/modules/FanLettersSlice';
import { selectHandler } from 'redux/modules/SelectedMemberSlice';
import AddFanLetter from 'components/Home/AddFanLetter';
import FanLetterList from 'components/Home/FanLetterList';
import Tab from 'components/Home/Tab';
import Button from 'components/UI/Button';
import styled from 'styled-components';
import axios from 'axios';
import { setFanLetters } from 'redux/modules/FanLettersSlice';
import Header from 'components/UI/Header';

const Home = () => {
  const selectedMember = useSelector((state) => state.SelectedMember);
  const fanLetters = useSelector((state) => state.fanLetters);
  const loginUserInfo = useSelector((state) => state.auth.profile);
  const dispatch = useDispatch();
  // const [fanLetters, setFanLetters] = useState([]);

  console.log(loginUserInfo);

  // 최신 팬레터 리스트 가져오기
  const fetchFanLetters = async () => {
    const response = await axios.get('http://localhost:5000/letters');
    dispatch(setFanLetters(response.data));
  };

  useEffect(() => {
    fetchFanLetters();
  }, []);

  const [expand, setExpand] = useState(true);
  const [inputs, setInputs] = useState({
    nickname: '',
    content: '',
    writedTo: '',
  });
  const [memberClick, setMemberClick] = useState({
    전체: false,
    고죠: false,
    이타도리: false,
    메구미: false,
    노바라: false,
  });

  // 입력창 변경
  const inputChangeHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  // 날짜 포맷팅
  const formattedDate = (currentDate) => {
    return new Intl.DateTimeFormat('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    }).format(currentDate);
  };

  // 팬레터 추가함수
  const submitHandler = async (e) => {
    e.preventDefault();
    if (inputs.content.trim().length === 0) {
      alert('닉네임과 내용을 입력해주세요');
      return;
    }
    if (inputs.writedTo === '' || inputs.writedTo === '전체') {
      alert('멤버를 선택해주세요');
      return;
    }

    const currentDate = new Date();
    const newFanLetter = {
      createdAt: formattedDate(currentDate),
      nickname: loginUserInfo.nickname,
      avatar:
        'https://global.discourse-cdn.com/turtlehead/optimized/2X/c/c830d1dee245de3c851f0f88b6c57c83c69f3ace_2_250x250.png',
      content: inputs.content,
      writedTo: inputs.writedTo,
      id: uuidv4(),
      userId: loginUserInfo.id,
    };

    await axios.post('http://localhost:5000/letters', newFanLetter);

    dispatch(setFanLetters([...fanLetters, newFanLetter]));

    setInputs({
      nickname: '',
      content: '',
    });
  };

  // 팬레터 토글
  const expandToggler = () => {
    setExpand((expand) => !expand);
  };

  // 탭 변경
  const clickHandler = (e) => {
    dispatch(selectHandler(e.target.innerHTML));
    setInputs({
      ...inputs,
      writedTo: e.target.innerHTML,
    });
    setMemberClick({
      ...memberClick,
      [selectedMember]: true,
    });
  };

  return (
    <main>
      {/* 멤버별 팬레터 보기 */}
      <Header />
      <Tab clickHandler={clickHandler} selectedMember={selectedMember} />
      {/* 팬레터 등록 */}
      <AddFanLetter
        loginUserInfo={loginUserInfo}
        inputs={inputs}
        submitHandler={submitHandler}
        inputChangeHandler={inputChangeHandler}
      />
      {/* 팬레터 펼치기 */}
      <ScExpandGroup>
        <Button onClick={expandToggler}>📣 りょういきてんかい --- !!! </Button>
      </ScExpandGroup>
      {/* 팬레터 */}
      {expand && <FanLetterList fanLetters={fanLetters} />}
    </main>
  );
};

const ScExpandGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background-color: #fff;
    border: 3px dashed #000;
    margin-bottom: 30px;
    font-size: 1.5rem;
    width: 30%;
  }
`;

export default Home;
