import React, { memo, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { getCovid19 } from "../slices/Covid19Slice";
import { useDispatch } from "react-redux";

import dayjs from "dayjs";

const Form = styled.form`
  background-color: #fff;
  display: flex;
  border-top: 1px solid #eee;
  padding: 10px 0;
  margin: 0;
  margin-bottom: 20px;

  input,
  button {
    display: block;
    margin-right: 5px;
    font-size: 16px;
    padding: 0 10px;
    height: 30px;
  }
  button {
    width: 70px;
    font-size: 16px;
    flex: none;
  }
`;

const Top = memo((chartData) => {
  const navigate = useNavigate();
  /*   const dispatch = useDispatch(); */
  // 하루 전 날짜의 데이터 값을 불러오기 위한 설정
  const [targetDt, setTargetDt] = useState({
    date_gte: "",
    date_lte: "",
  });

  // 페이지가  열린 직후와 날짜값이 변경되는 경우 리덕스 액선함수 디스패시 --> Ajax 호출
  /*     React.useEffect(()=>{
      dispatch(getCovid19({targetDt: targetDt}));
  }, [dispatch, targetDt]); */

  // 드롭다운의 선택이 변경된 경우의 리액트
  const onDateChange = useCallback((e) => {
    e.preventDefault();
    // 선택값으로 상태값을 갱신한다. --> React.useEffect()에 의해 액션함수가 디스패치 된다.
    setTargetDt((targetDt) => ({
      ...targetDt,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!(targetDt.date_gte && targetDt.date_lte)) return;
    navigate(
      `/covid/confirmed?date_gte=${targetDt.date_gte}&date_lte=${targetDt.date_lte}`
    );
  };

  return (
    <div>
      <h1>Covid19</h1>
      <Form onSubmit={onSubmit}>
        <input type="date" name="date_gte" onChange={onDateChange} />
        <input type="date" name="date_lte" onChange={onDateChange} />
        <button type="submit">검색</button>
      </Form>
    </div>
  );
});

export default Top;
