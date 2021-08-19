import { useReducer } from "react";
import AlertsContext from "./AlertsContext";
import AlertsReducer from "./AlertsReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertsState = (props) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertsReducer, initialState);

  const setAlert = (message, type) => {
    dispatch({
      type: SET_ALERT,
      payload: {
        message,
        type,
      },
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000);
  };

  return (
    <AlertsContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertsContext.Provider>
  );
};
export default AlertsState;
