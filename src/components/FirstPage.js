import React from "react";
import styled from "styled-components";
import meenoi from "../assets/meenoi.jpg";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import positionAction from "../Actions/positionAction";

const Container = styled.div`
  height: 5000px;
`;

const Imahe = styled.img`
  width: 500px;
  height: 500px;
`;

const FirstPage = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();

  const handleClick = () => {
    const position = ref.current.getBoundingClientRect();
    dispatch(positionAction(position));
  };
  return (
    <>
      <Link to='/second'>
        <Container>
          <Imahe onClick={handleClick} ref={ref} src={meenoi} alt=''></Imahe>
        </Container>
      </Link>
    </>
  );
};

export default FirstPage;
