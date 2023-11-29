import React from 'react';
import styled from 'styled-components';

const ScImgGroup = styled.figure`
  margin-right: 20px;

  img {
    width: 128px;
    height: 128px;
    border-radius: 50%;
  }
`;

const ImgGroup = ({ children }) => {
  return <ScImgGroup>{children}</ScImgGroup>;
};

export default ImgGroup;
