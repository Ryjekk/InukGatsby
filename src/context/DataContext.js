import React, { useReducer } from 'react';
// Data
import { projectsCard } from '../db/projectsCard';
import { projectsPage } from '../db/projectsPage';
import { skills } from '../db/skills';
import { workspace } from '../db/workplace';
import { welcome } from '../db/welcome';
// Context
export const ProjectCardContext = React.createContext();
export const ProjectPageContext = React.createContext();
export const SkillsContext = React.createContext();
export const WorkspaceContext = React.createContext();
export const WelcomeContext = React.createContext();

// export const GlobalStateContext = React.createContext();
// export const GlobalDispatchContext = React.createContext();

// const initialState = {
//   theme: 'dark',
//   bg: 'first'
// };
//
// function reducer(state, action) {
//   switch (action.type) {
//     case 'TOGGLE_THEME': {
//       return {
//         ...state,
//         theme: state.theme === 'dark' ? 'light' : 'dark',
//         bg: state.bg === 'second' ? 'first' : 'second'
//       };
//     }
//     default:
//       return null;
//   }
// }

const DataContextProvider = ({ children }) => {
  // const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <ProjectPageContext.Provider value={projectsPage}>
      <ProjectCardContext.Provider value={projectsCard}>
        <SkillsContext.Provider value={skills}>
          <WorkspaceContext.Provider value={workspace}>
            <WelcomeContext.Provider value={welcome}>
              {/*<GlobalStateContext.Provider value={state}>*/}
              {/*  <GlobalDispatchContext.Provider value={dispatch}>*/}
              {children}
              {/*  </GlobalDispatchContext.Provider>*/}
              {/*</GlobalStateContext.Provider>*/}
            </WelcomeContext.Provider>
          </WorkspaceContext.Provider>
        </SkillsContext.Provider>
      </ProjectCardContext.Provider>
    </ProjectPageContext.Provider>
  );
};

export default DataContextProvider;
