import React, { useContext, useEffect, useState } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import { LanguageContext } from './LanguageContext';

export const DataContext = createContext();

function DataContextProvider({ children }) {
  const [hero, setHero] = useState({});
  const [skills, setSkills] = useState([]);
  const [profileInformations, setProfileInformations] = useState([]);
  const [aboutMe, setAboutMe] = useState('');
  const [projects, setProjects] = useState([]);

  const { lang } = useContext(LanguageContext);

  useEffect(() => {
    axios.get('/api/data.json').then((res) => {
      setHero(res.data.hero[lang]);
      setSkills(res.data.skills[lang]);
      setProfileInformations(res.data.profileInformations[lang]);
      setAboutMe(res.data.aboutMe[lang]);
      setProjects(res.data.projects);
      console.log(aboutMe);
    });
  }, [lang]);

  return (
    <DataContext.Provider
      value={{ hero, skills, profileInformations, aboutMe, projects }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
