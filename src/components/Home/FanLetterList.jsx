import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FanLetterItem from './FanLetterItem';
import { useDispatch, useSelector } from 'react-redux';
import { setFanLetters } from 'redux/modules/FanLettersSlice';

const FanLetterList = () => {
  const dispatch = useDispatch();
  let fanLetters = useSelector((state) => state.fanLetters);
  const selectedMember = useSelector((state) => state.selectedMember);
  const filteredLetters = fanLetters.filter((item) =>
    selectedMember !== '전체' ? item.writedTo === selectedMember : true
  );

  useEffect(() => {
    const storedFanLetters = JSON.parse(localStorage.getItem('fanLetters'));
    if (storedFanLetters) {
      dispatch(setFanLetters(storedFanLetters));
    }
  }, [dispatch]);

  return (
    <ScFanLetterItems>
      {filteredLetters && filteredLetters.length > 0 ? (
        filteredLetters.map((item) => (
          <Link to={`/details/${item.id}`} key={item.id}>
            <FanLetterItem item={item} />
          </Link>
        ))
      ) : (
        <p>'팬레터가 없습니다'</p>
      )}
    </ScFanLetterItems>
  );
};

const ScFanLetterItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: rgba(44, 0, 1, 0.9);
  border-radius: 10px;
  max-width: 60%;
  margin: 0 auto;
  text-align: center;

  p {
    color: #fff;
    font-weight: bold;
  }
`;

export default FanLetterList;
