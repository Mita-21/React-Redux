import { contadorInitialState } from "../store";
import { TYPES } from "../actions/contadorActions";

function contadorReducer(state= contadorInitialState, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return {contador : state.contador + 1};
    case TYPES.DECREMENT:
      return {contador: state.contador - 1};
    case TYPES.RESET:
        return {contador : 0};
    default:
      return state;
  }
}

export default contadorReducer
