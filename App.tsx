import { StatusBar } from 'expo-status-bar';
import Home from './src/views/Home/Home';
import { Container } from './styles';

export default function App() {
  return (
    <Container >
      <Home></Home>
      <StatusBar style="light" />
    </Container>
  );
}

