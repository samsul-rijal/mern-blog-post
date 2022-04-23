import './App.css';
import { Container } from 'react-bootstrap';
import { Header, Footer } from './components';
import { Home } from './pages';
import AddBlog from './pages/AddBlog';

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h2 className='mt-5'>Welcome Mern Blog</h2>
          <Home />
          <AddBlog />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;