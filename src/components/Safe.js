import React from "react";
import { connect } from "react-redux";
import { keypadNumberEntered, keypadClear, keypadEnter } from '../actions/index';
const mapStateToProps = state => {
  return { keypad: state.keypad, doorLocked: state.doorLocked };
};

const mapDispatchToProps = dispatch => {
    return {
      keypadNumberEntered: number => dispatch(keypadNumberEntered(number)),
      keypadClear: () => dispatch(keypadClear()),
      keypadEnter: () => dispatch(keypadEnter())
    };
  };
const ConnectedSafe = ({ keypad, doorLocked, keypadNumberEntered, keypadClear, keypadEnter }) => (
  <div>
    <div class="row">
        <button onClick={() => keypadNumberEntered(1)}>1</button>
        <button onClick={() => keypadNumberEntered(2)}>2</button>
        <button onClick={() => keypadNumberEntered(3)}>3</button>
    </div>
    <div class="row">
        <button onClick={() => keypadNumberEntered(4)}>4</button>
        <button onClick={() => keypadNumberEntered(5)}>5</button>
        <button onClick={() => keypadNumberEntered(6)}>6</button>
    </div>
    <div class="row">
        <button onClick={() => keypadNumberEntered(7)}>7</button>
        <button onClick={() => keypadNumberEntered(8)}>8</button>
        <button onClick={() => keypadNumberEntered(9)}>9</button>
    </div>
    <div class="row">
        <button onClick={keypadClear}>CLR</button>
        <button onClick={() => keypadNumberEntered(0)}>0</button>
        <button onClick={keypadEnter}>></button>
    </div>
    <div>
        <h1>Display</h1>
        { keypad.map((number, index) => <span key={index}>{number}</span>) }
    </div>
    <div>Door locked: {doorLocked.toString()}</div>
  </div>
);
const Safe = connect(mapStateToProps, mapDispatchToProps)(ConnectedSafe);
export default Safe;