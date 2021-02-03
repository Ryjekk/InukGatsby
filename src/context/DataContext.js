import React, { useReducer } from 'react';
// Data
import { projectsCard } from '../db/projectsCard';
import { projectsPage } from '../db/projectsPage';
import { skills } from '../db/skills';
import { workspace } from '../db/workplace';
import { welcome } from '../db/welcome';
// Context
export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
  welcome: welcome,
  skills: skills
};

function reducer(state, action) {
  // switch (action.type) {
  //   case 'TOGGLE_THEME': {
  //     return {
  //       ...state,
  //       theme: state.theme === 'dark' ? 'light' : 'dark',
  //       bg: state.bg === 'second' ? 'first' : 'second'
  //     };
  //   }
  //   default:
  //     return null;
  // }
}

const DataContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default DataContextProvider;
