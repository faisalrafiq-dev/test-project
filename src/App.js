import { Container } from 'react-bootstrap';
import './App.css';
import MyNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import News from './components/News';
import Positions from './components/Positions';

function App() {
  return (
    <div className="app">
      <MyNavbar />

      <Container fluid className="main-body">
        <HeroSection />
        <News />
        <Positions />
      </Container>
    </div>
  );
}

export default App;
