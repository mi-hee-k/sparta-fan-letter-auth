import ImgGroup from 'components/UI/ImgGroup';
import React from 'react';
import styled from 'styled-components';

const FanLetterItem = ({ item }) => {
  return (
    <ScFanLetterItem>
      <ImgGroup>
        <img src={`${item.avatar}`} alt={item.nickname} />
      </ImgGroup>
      <ScLetterInfoGroup>
        <span>{item.nickname}</span>
        <span>{item.createdAt}</span>
        <span>To : {item.writedTo}</span>
        <p>{item.content}</p>
      </ScLetterInfoGroup>
    </ScFanLetterItem>
  );
};

const ScFanLetterItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  border: 1px solid #240808;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 3px 3px 2px -1px rgba(0, 0, 0, 0.94);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(102%);
  }
`;

const ScLetterInfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  width: 70%;

  span:nth-child(2) {
    margin-bottom: 20px;
  }

  p {
    text-align: left;
    font-weight: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }
`;

export default FanLetterItem;
