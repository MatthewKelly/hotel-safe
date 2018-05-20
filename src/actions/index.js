import { KEYPAD_NUMBER_ENTERED, KEYPAD_CLEAR, KEYPAD_ENTER } from "../constants/action-types";
export const keypadNumberEntered = number => ({ type: KEYPAD_NUMBER_ENTERED, payload: number});
export const keypadClear = () => ({type: KEYPAD_CLEAR});
export const keypadEnter = () => ({type: KEYPAD_ENTER});