import React from 'react';
import styled from 'styled-components';
import Button from 'components/UI/Button';

const AddFanLetter = ({ inputs, submitHandler, inputChangeHandler }) => {
  return (
    <ScFormGroup>
      <ScForm onSubmit={submitHandler}>
        <ScInputGroup>
          <label htmlFor='nickname'>닉네임</label>
          <input
            type='text'
            placeholder='최대 20글자까지 작성할 수 있습니다'
            maxLength={20}
            autoComplete='off'
            name='nickname'
            value={inputs.nickname}
            onChange={inputChangeHandler}
          />
        </ScInputGroup>
        <ScInputGroup>
          <label htmlFor='content'>내용</label>
          <textarea
            type='text'
            placeholder='최대 100글자까지만 작성할 수 있습니다'
            maxLength={100}
            name='content'
            value={inputs.content}
            onChange={inputChangeHandler}
          />
        </ScInputGroup>
        <ScInputGroup>
          <label htmlFor='writedTo'>누구에게 팬레터를 보낼까요?</label>
          <select
            name='writedTo'
            id='writedTo'
            value={inputs.writedTo}
            onChange={inputChangeHandler}
          >
            <option value='전체'>멤버선택</option>
            <option value='고죠'>고죠</option>
            <option value='이타도리'>이타도리</option>
            <option value='메구미'>메구미</option>
            <option value='노바라'>노바라</option>
          </select>
        </ScInputGroup>
        <Button>팬레터 등록</Button>
      </ScForm>
    </ScFormGroup>
  );
};

const ScFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 60%;
  margin: 0 auto;
`;

const ScForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(44, 0, 1, 0.9);
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  padding: 20px;
  margin-bottom: 30px;

  button {
    width: 70%;
    padding: 14px;
    background-color: #f2bf27;
    font-weight: bold;
  }
`;

const ScInputGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  text-align: center;
  margin-bottom: 10px;

  input,
  textarea {
    width: 60%;
    padding: 10px;
    border-radius: 10px;
  }

  textarea {
    height: 100px;
    resize: none;
  }

  select {
    padding: 10px;
    width: 60%;
    border-radius: 10px;
  }

  label {
    width: 40%;
    margin-right: 10px;
  }
`;

export default AddFanLetter;
