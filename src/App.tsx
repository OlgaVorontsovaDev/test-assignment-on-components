import { Container } from './components/Container';
import { MainPage } from './pages/MainPage';
import { ThemeProvider } from './theme/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Container>
        <MainPage />
      </Container>
    </ThemeProvider>
  );
}

export default App;
