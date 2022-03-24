import {useSelector, useDispatch} from 'react-redux';
import { TYPES } from '../actions/contadorActions';

const Contador = () => {
    
    const contador = useSelector((state) => state.contador);
    const dispatch = useDispatch();

    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <h2>Contador Redux</h2>
        </div>
        <div>
          <h3>{contador}</h3>
        </div>
        <div>
          <button onClick={() => dispatch({ type: TYPES.DECREMENT })}>-</button>
          <button onClick={() => dispatch({ type: TYPES.RESET })}>Volver a 0</button>
          <button onClick={() => dispatch({ type: TYPES.INCREMENT })}>+</button>
        </div>
      </div>
    );
}

export default Contador;
