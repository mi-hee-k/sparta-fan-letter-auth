import axios from 'axios';
import Button from 'components/UI/Button';
import ImgGroup from 'components/UI/ImgGroup';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateAvatar, updateNickname } from 'redux/modules/AuthSlice';
import styled from 'styled-components';

const Profile = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.profile);
  const [nickname, setNickname] = useState(userInfo.nickname);
  const [avatarFile, setAvatarFile] = useState();
  const [infoEditShown, setInfoEditShown] = useState(false);
  const accessToken = localStorage.getItem('accessToken');

  console.log(userInfo.avatar);

  // 닉네임 수정
  const editNickname = async () => {
    const { data } = await axios.patch(
      'https://moneyfulpublicpolicy.co.kr/profile',
      { nickname: nickname },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    setNickname(data.nickname);
  };

  // 아바타 수정
  const editAvatar = async () => {
    const formData = new FormData();
    formData.append('avatar', avatarFile);
    const { data } = await axios.patch(
      'https://moneyfulpublicpolicy.co.kr/profile',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    console.log(data.avatar);
    dispatch(updateAvatar(data.avatar));
  };

  // 닉네임 수정
  const infoEditHandler = () => {
    setInfoEditShown((infoEditShown) => !infoEditShown);

    // 수정상태가 아니라면 기존의 content 보여주기
    if (!infoEditShown) {
      setNickname(userInfo.nickname);
    }

    // 수정상태라면 input 보여주고 바뀐 value만 update 하기
    if (infoEditShown) {
      editNickname();
      dispatch(updateNickname(nickname));
    }
  };

  const changeInput = (e) => {
    setNickname(e.target.value);
  };

  return (
    <ScWrapper>
      <ScProfileWrapper>
        <h1>프로필 관리</h1>
        <ImgGroup>
          <img src={userInfo.avatar} alt='' />
        </ImgGroup>
        <input
          type='file'
          onChange={(e) => {
            setAvatarFile(e.target.files[0]);
          }}
        />
        <Button onClick={editAvatar}>아바타 수정</Button>
        {infoEditShown ? (
          <input type='text' value={nickname} onChange={changeInput} />
        ) : (
          <h2>{userInfo.nickname}</h2>
        )}
        <span>유저아이디</span>
        <Button onClick={infoEditHandler}>수정하기</Button>
      </ScProfileWrapper>
    </ScWrapper>
  );
};

const ScWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 100px);
`;

const ScProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 30px;
  width: 50%;
  border-radius: 10px;
  background-color: #fff;

  h1,
  h2,
  span,
  input {
    margin-bottom: 10px;
  }

  input {
    padding: 10px;
    border: 1px solid #eee;
  }
`;

export default Profile;
