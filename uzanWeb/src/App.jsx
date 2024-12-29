import './App.css';
import { ThemeProvider } from './contexts/theme-provider';
import LanguageContextProvider from './contexts/LanguageContext';
import Header from './components/section/Header';
import Navigation from './components/section/Navigation';
import Hero from './components/section/Hero';

function App() {
  return (
    <LanguageContextProvider>
      <ThemeProvider defaultTheme='light' storageKey='theme'>
        <Header></Header>
        <Navigation></Navigation>
        <Hero></Hero>
      </ThemeProvider>
    </LanguageContextProvider>
  );
}

export default App;
