import React from 'react';
// Data
import { projectsCard } from '../db/projectsCard';
import { projectsPage } from '../db/projectsPage';
import { skills } from '../db/skills';
import { workplacePage } from '../db/workplacePage';
import { workplaceCard } from '../db/workplaceCard';
import { welcome } from '../db/welcome';
import { largeCard } from '../db/largeCard';
// Context
export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
  welcome,
  skills,
  projectsCard,
  projectsPage,
  workplacePage,
  workplaceCard,
  largeCard
};

function reducer(state, action) {}

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
