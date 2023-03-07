import { ThemeProvider } from 'styled-components';
import defaultTHeme from './assets/styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTHeme}>
      <h1>My Contacts</h1>
    </ThemeProvider>
  );
}

export default App;
