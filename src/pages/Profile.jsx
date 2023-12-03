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
  const [nicknameEditShown, setNicknameEditShown] = useState(false);
  const [avatarEditShown, setAvatarEditShown] = useState(false);

  const accessToken = localStorage.getItem('accessToken');

  // input 닉네임 변경
  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  // input 아바타 변경
  const handleAvatarChange = (e) => {
    setAvatarFile(e.target.files[0]);
  };

  // 닉네임 서버 수정
  const serverUpdateNickname = async () => {
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

  // 아바타 서버 수정
  const serverUpdateAvatar = async () => {
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

  // 아바타 수정
  const editAvatar = (second) => {
    setAvatarEditShown((avatarEditShown) => !avatarEditShown);
  };

  // 아바타 수정 완료
  const completeAvatarEdit = (second) => {
    serverUpdateAvatar();
    setAvatarEditShown((infoEditShown) => !infoEditShown);
  };

  // 아바타 수정 취소
  const cancelAvatarEdit = (second) => {
    setAvatarEditShown(!avatarEditShown);
  };

  // 닉네임 수정
  const editNickname = () => {
    setNicknameEditShown((infoEditShown) => !infoEditShown);
  };

  // 닉네임 수정 완료
  const completeNicknameEdit = () => {
    serverUpdateNickname();
    dispatch(updateNickname(nickname));
    setNicknameEditShown((infoEditShown) => !infoEditShown);
  };

  // 닉네임 수정 취소
  const cancelNicknameEdit = () => {
    setNicknameEditShown(!nicknameEditShown);
  };

  return (
    <ScWrapper>
      <ScProfileWrapper>
        <h1>프로필 관리</h1>
        <ImgGroup>
          <img src={userInfo.avatar} alt='' />
        </ImgGroup>
        {avatarEditShown && (
          <>
            <input type='file' onChange={handleAvatarChange} />
          </>
        )}

        <ScNicknameEditBtnGroup>
          {avatarEditShown ? (
            <>
              <Button onClick={cancelAvatarEdit}>취소</Button>
              <Button onClick={completeAvatarEdit}>수정완료</Button>
            </>
          ) : (
            <span onClick={editAvatar}>프로필 사진 변경</span>
          )}
        </ScNicknameEditBtnGroup>

        <hr />

        {nicknameEditShown ? (
          <input type='text' value={nickname} onChange={handleNicknameChange} />
        ) : (
          <h2>{userInfo.nickname}</h2>
        )}

        <ScNicknameEditBtnGroup>
          {nicknameEditShown ? (
            <>
              <Button onClick={cancelNicknameEdit}>취소</Button>
              <Button onClick={completeNicknameEdit}>수정완료</Button>
            </>
          ) : (
            <span onClick={editNickname}>닉네임 수정</span>
          )}
        </ScNicknameEditBtnGroup>
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

  img {
    box-shadow: 5px 5px 14px -5px rgba(0, 0, 0, 0.43);
    -webkit-box-shadow: 5px 5px 14px -5px rgba(0, 0, 0, 0.43);
    -moz-box-shadow: 5px 5px 14px -5px rgba(0, 0, 0, 0.43);
    margin-bottom: 10px;
  }

  hr {
    width: 80%;
    margin-top: 30px;
    margin-bottom: 30px;
  }
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
  h2 {
    margin-bottom: 20px;
  }
  input {
    margin-bottom: 10px;
  }

  input {
    padding: 10px;
    border: 1px solid #eee;
  }
`;

const ScNicknameEditBtnGroup = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  button:nth-child(1) {
    margin-right: 10px;
  }

  button {
    width: 50%;
  }

  button:first-child {
    background-color: #999999;
  }

  span {
    color: #f2522e;
    font-weight: bold;
    cursor: pointer;
  }

  span:hover {
    filter: brightness(0.8);
  }
`;

export default Profile;
