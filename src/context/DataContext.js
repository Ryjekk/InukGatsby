import React from 'react';
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
  // Theme here as well TODO
  welcome,
  skills,
  projectsCard,
  projectsPage,
  workspace,
  theme: 'dark',
  bg: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME': {
      const toggleTheme = () => {
        if (state.theme === 'light') {
          state.bg = 'first';
          setTimeout(() => {
            state.theme = 'dark';
          }, 2000);
        } else {
          state.bg = 'second';
          setTimeout(() => {
            state.theme = 'light';
          }, 2000);
        }
      };

      return {
        ...state,
        theme: state.theme === 'dark' ? 'light' : 'dark',
        bg: state.bg === 'second' ? 'first' : 'second'
      };
    }
    default:
      return null;
  }
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
