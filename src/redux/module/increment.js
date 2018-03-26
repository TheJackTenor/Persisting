const INCREMENT_ACTION = "INCREMENT_ACTION";
const INCREMENT_ACTION_PRESSED = "INCREMENT_ACTION_PRESSED";

export const incrementActions = Object.freeze({
  increment: value => ({ type: INCREMENT_ACTION, value }),
  isPressed: bool => ({ type: INCREMENT_ACTION_PRESSED, bool })
});

// reducer

const initialState = {
  increment: 0,
  isPressed: false
};

const reducer = (state = initialState, { type, value, bool }) => {
  switch (type) {
    case INCREMENT_ACTION:
      return {
        ...state,
        increment: value
      };
    case INCREMENT_ACTION_PRESSED:
      return {
        ...state,
        isPressed: bool
      };
    default:
      return state;
  }
};

export default reducer;
