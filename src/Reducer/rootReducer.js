const initialState = {};

const rootReducer = (state, action) => {
  switch (action.type) {
    case "POSITION":
      return {
        state: action.payload,
      };
  }
};

export default rootReducer;
