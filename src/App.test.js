import {createStore} from 'redux';
import rootReducer from './reducers/index';
import {KEYPAD_NUMBER_ENTERED, KEYPAD_ENTER, KEYPAD_CLEAR} from './constants/action-types';

function enterKeys(store, keys) {
  for (let key of keys) {
    let enterKeyAction = { type: KEYPAD_NUMBER_ENTERED, payload: key };
    store.dispatch(enterKeyAction);
  }
}
let enterAction = { type: KEYPAD_ENTER };

it('Should unlock door when correct events received', () => {
    let store = createStore(rootReducer);
    // enter 4 keys
    enterKeys(store, ['1', '2', '3', '4']);

    // press enter
    store.dispatch(enterAction);

    // expect door to be locked
    expect(store.getState().doorLocked).toEqual(true);

    enterKeys(store, ['1', '2', '3', '4']);

    store.dispatch(enterAction);

    // expect door to be unlocked
    expect(store.getState().doorLocked).toEqual(false);
});

it('Should be in invalid state if wrong keys are entered', () => {
    let store = createStore(rootReducer);
    // enter 4 keys
    enterKeys(store, ['1', '2', '3', '4']);
    // press enter
    store.dispatch(enterAction);

    // expect door to be locked
    expect(store.getState().doorLocked).toEqual(true);

    enterKeys(store, ['1', '2', '3', '5']);

    store.dispatch(enterAction);

    // expect door to be unlocked
    expect(store.getState().doorLocked).toEqual(true);
    expect(store.getState().invalid).toEqual(true);
});

it('Should not lock door if theres less than 4 digits entered', function() {
    let store = createStore(rootReducer);
    // enter 3 keys
    enterKeys(store, ['1', '2', '3']);

    // press enter
    store.dispatch(enterAction);

    expect(store.getState().doorLocked).toEqual(false);
});


it('Clear action should clear keys', function() {
    let store = createStore(rootReducer);
    // enter 3 keys
    enterKeys(store, ['1', '2', '3']);
    let clearAction = { type: KEYPAD_ENTER };
    // press enter
    store.dispatch(enterAction);

    expect(store.getState().keypad).toEqual([]);
});

it('Should take a maximum of 4 digits', function() {
    let store = createStore(rootReducer);
    // enter 6 keys
    enterKeys(store, ['1', '2', '3', '4', '5', '6']);
    // expect only the first four to be registered
    expect(store.getState().keypad).toEqual(['1','2','3','4']);
})  

