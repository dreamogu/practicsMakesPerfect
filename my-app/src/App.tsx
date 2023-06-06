import './App.css';
import DarkMode from './darkmode/DarkMode';
import { ThemeProvider } from './darkmode/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      {' '}
      <DarkMode />
    </ThemeProvider>
  );
}

export default App;
