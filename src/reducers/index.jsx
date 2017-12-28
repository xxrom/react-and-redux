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
    console.log('actions changeBox');
    if (typeof text === 'string') {
      console.log('>> dispatch');
      return {
        type: constants.CHANGE_TYPE,
        payload: text
      };
      // return dispatch =>
      //   dispatch({
      //     type: constants.CHANGE_TYPE,
      //     payload: text
      //   });
    }
  },
  changeBoxDispatch: function(text) {
    console.log('actions changeBoxDispatch');
    if (typeof text === 'string') {
      console.log('>> dispatch');
      return {
        type: constants.CHANGE_TYPE,
        payload: text
      };
    }
  }
};
