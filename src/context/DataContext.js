import React from 'react';
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

const DataContextProvider = ({ children }) => {
  return (
    <ProjectPageContext.Provider value={projectsPage}>
      <ProjectCardContext.Provider value={projectsCard}>
        <SkillsContext.Provider value={skills}>
          <WorkspaceContext.Provider value={workspace}>
            <WelcomeContext.Provider value={welcome}>
              {children}
            </WelcomeContext.Provider>
          </WorkspaceContext.Provider>
        </SkillsContext.Provider>
      </ProjectCardContext.Provider>
    </ProjectPageContext.Provider>
  );
};

export default DataContextProvider;
