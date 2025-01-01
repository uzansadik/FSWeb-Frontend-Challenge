import './App.css';
import { ThemeProvider } from './contexts/theme-provider';
import LanguageContextProvider from './contexts/LanguageContext';
import Header from './components/section/Header';
import Navigation from './components/section/Navigation';
import Hero from './components/section/Hero';
import DataContextProvider from './contexts/DataContext';
import Skills from './components/section/Skills';
import Profile from './components/section/Profile';
import Projects from './components/section/Projects';

function App() {
  return (
    <LanguageContextProvider>
      <ThemeProvider defaultTheme='light' storageKey='theme'>
        <Header></Header>
        <DataContextProvider>
          <Navigation></Navigation>
          <Hero></Hero>
          <Skills></Skills>
          <Profile></Profile>
          <Projects></Projects>
        </DataContextProvider>
      </ThemeProvider>
    </LanguageContextProvider>
  );
}

export default App;
