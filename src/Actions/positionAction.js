import { POSITION } from "./positionString";

const positionAction = (payload) => {
  return {
    type: POSITION,
    payload,
  };
};

export default positionAction;
