import { combineReducers} from 'redux'
import { safe } from './safeReducer';
const rootReducer = combineReducers({safe});
export default rootReducer;