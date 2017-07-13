import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([ action.payload.data ]);   // both lines are equivalent
      return [ action.payload.data, ...state ];   // new array, don't mutate state directly!
      break;
    default:

  }
  return state;
}
