import useLocalStorage from '@/hooks/useLocalStorage';
import React, { useEffect, useState } from 'react';
import { useContext, createContext } from 'react';
import axios from 'axios';

export const LanguageContext = createContext();

export default function LanguageContextProvider({ children }) {
  const [lang, setLang] = useLocalStorage('lang', 'tr'); //default tr
  const [language, setLanguage] = useState({});

  useEffect(() => {
    document.documentElement.lang = lang;

    axios.get(`/languages/${lang}.json`).then((res) => {
      setLanguage(res.data);
    });
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, language }}>
      {children}
    </LanguageContext.Provider>
  );
}
