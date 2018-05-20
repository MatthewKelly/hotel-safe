import { KEYPAD_NUMBER_ENTERED, KEYPAD_CLEAR, KEYPAD_ENTER } from "../constants/action-types";
const initialState = {
  keypad: [],
  savedCode: null,
  doorLocked: false
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case KEYPAD_NUMBER_ENTERED :
        if (state.keypad.length >= 4 ) {
            return state;
        }
        return { ...state, keypad: [...state.keypad, action.payload]};
    case KEYPAD_CLEAR :
        return { ...state, keypad : []};
    case KEYPAD_ENTER: 

        if (!state.doorLocked && !state.savedCode && state.keypad.length === 4) {
            return { ...state, savedCode :  state.keypad.slice(), keypad: [], doorLocked: true}
        }
        if (state.doorLocked && state.savedCode 
                && state.keypad.length === 4 && state.savedCode.toString() === state.keypad.toString()) {
            return { ...state, savedCode: null, keypad: [] , doorLocked: false}
        }
        return { ...state, keypad: []};
    default:
      return state;
  }
};
export default rootReducer;