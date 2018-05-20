import React from "react";
import "../styles/safe.css";
import DialPad from "./DialPad";
import NumberDisplay from "./NumberDisplay";
import IndicatorLight from "./IndicatorLight";
import { connect } from "react-redux";
import { keypadNumberEntered, keypadClear, keypadEnter } from '../actions/index';
const mapStateToProps = state => {
  return { keypad: state.safe.keypad, doorLocked: state.safe.doorLocked, invalid: state.safe.invalid };
};

const mapDispatchToProps = dispatch => {
    return {
      keypadNumberEntered: number => dispatch(keypadNumberEntered(number)),
      keypadClear: () => dispatch(keypadClear()),
      keypadEnter: () => dispatch(keypadEnter())
    };
  };
const ConnectedSafe = ({ keypad, doorLocked, invalid, keypadNumberEntered, keypadClear, keypadEnter }) => (
  <div className="safe">
    <div className="col-40">
       <DialPad keypadEnter={keypadEnter} keypadClear={keypadClear} keypadNumberEntered={keypadNumberEntered}/>
    </div>
    <div className="col-60">
        <div className="display">
            <NumberDisplay keypadEntries={keypad} invalid={invalid}/>
            <IndicatorLight doorLocked={doorLocked}/>
        </div>
    </div>

  </div>
);
const Safe = connect(mapStateToProps, mapDispatchToProps)(ConnectedSafe);
export default Safe;