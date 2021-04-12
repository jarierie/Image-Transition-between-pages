import React from "react";
import meenoi from "../assets/meenoi.jpg";
import styled from "styled-components";
import { animate, motion } from "framer-motion";
import { useSelector } from "react-redux";

const Container = styled(motion.div)`
  display: flex;

  width: 100vw;
  height: 100vh;
  img {
    left: 90px;
    right: 100px;
  }
`;

const Text = styled(motion.p)`
  color: white;
  font-size: 100px;
  z-index: 99;
  opacity: 0;
`;

const SecondPage = () => {
  const state = useSelector((state) => state.state);
  console.log(state);
  return (
    <>
      {" "}
      <Container
        animate={{ backgroundColor: "#0d0d0d" }}
        transition={{ delay: 0.2 }}
      >
        <motion.img
          initial={{
            height: state.height,
            width: state.width,
            x: state.x,
            y: state.y,
          }}
          animate={{
            height: "1000px",
            width: "1000px",
            x: "100px",
            y: "200px",
          }}
          transition={{ duration: 1 }}
          src={meenoi}
          alt=''
        ></motion.img>
        <Text
          initial={{ opacity: 0, x: "-100", y: "-100" }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Nice one
        </Text>
      </Container>{" "}
    </>
  );
};

export default SecondPage;
