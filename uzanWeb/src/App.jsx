import './App.css';
import { ThemeProvider } from './contexts/theme-provider';
import LanguageContextProvider from './contexts/LanguageContext';
import Header from './components/section/Header';
import Navigation from './components/section/Navigation';

function App() {
  return (
    <LanguageContextProvider>
      <ThemeProvider defaultTheme='light' storageKey='theme'>
        <Header></Header>
        <Navigation></Navigation>
      </ThemeProvider>
    </LanguageContextProvider>
  );
}

export default App;
