import logo from './logo.svg';
import Landing from './Containers/Landing';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App min-h-screen h-max bg-black">
        <Landing/>
      </div>
    </ThemeProvider>
  );
}

export default App;
