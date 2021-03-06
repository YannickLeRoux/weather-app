import { FETCH_WEATHER } from '../actions/index';

export default (state=[], action) => {
  if( action.error) {
    return state;
  }
  switch(action.type) {
    case FETCH_WEATHER:
      return [...state, action.payload.data];
    default:
      return state;
  }

}