import React from 'react';
import styled from 'styled-components';
import Button from 'components/UI/Button';

const Tab = ({ clickHandler, selectedMember }) => {
  return (
    <TabGroup>
      <Button onClick={clickHandler} $active={selectedMember === '전체'}>
        전체
      </Button>
      <Button onClick={clickHandler} $active={selectedMember === '고죠'}>
        고죠
      </Button>
      <Button onClick={clickHandler} $active={selectedMember === '이타도리'}>
        이타도리
      </Button>
      <Button onClick={clickHandler} $active={selectedMember === '메구미'}>
        메구미
      </Button>
      <Button onClick={clickHandler} $active={selectedMember === '노바라'}>
        노바라
      </Button>
    </TabGroup>
  );
};

const TabGroup = styled.div`
  background-color: transparent;
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export default Tab;
