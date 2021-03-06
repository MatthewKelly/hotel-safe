import { KEYPAD_NUMBER_ENTERED, KEYPAD_CLEAR, KEYPAD_ENTER } from "../constants/action-types";

const initialState = {
    keypad: [],
    savedCode: null,
    doorLocked: false,
    invalid : false
  };
export const safe = (state = initialState, action) => {
    switch (action.type) {
      case KEYPAD_NUMBER_ENTERED :
          if (state.keypad.length >= 4 ) {
              return state;
          }
          return { ...state, keypad: [...state.keypad, action.payload], invalid: false};
      case KEYPAD_CLEAR :
          return { ...state, keypad : [], invalid: false};
      case KEYPAD_ENTER: 
          // new code
          if (!state.doorLocked && !state.savedCode && state.keypad.length === 4) {
              return { ...state, savedCode :  state.keypad.slice(), keypad: [], doorLocked: true}
          }
          // matched code
          if (state.doorLocked && state.savedCode 
                  && state.keypad.length === 4 
                  && state.savedCode.toString() === state.keypad.toString()) {
              return { ...state, savedCode: null, keypad: [] , doorLocked: false}
          }
          // code doesn't match
          if (state.doorLocked ) {
              return { ...state, keypad: [], invalid: true};
          }
          return { ...state, keypad: []};
      default:
        return state;
    }
}