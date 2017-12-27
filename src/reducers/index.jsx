const path = `index`;

export const constants = {
  CHANGE_TYPE: `${path}CHANGE_TYPE`
};

export const initialState = {
  box: 'hello box data'
};

export default function boxReducer(state = initialState, action) {
  switch (action.type) {
    case constants.CHANGE_TYPE:
      return {
        box: action.payload
        // ...state
      };
    default:
      return state;
  }
}

export const actions = {
  changeBox: function(text) {
    if (typeof text === 'string') {
      return dispatch =>
        dispatch({
          type: constants.CHANGE_TYPE,
          payload: text
        });
    }
  }
};
