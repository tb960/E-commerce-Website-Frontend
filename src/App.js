import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel'
import Services from './components/Column.jsx';
import Jumbo from './components/jumbotron.jsx';
import Faq from './components/Faq';
import Signup from './components/signup.jsx';
import Overlay from './components/Overlay.jsx';
import Footer from './components/footer.jsx';
import Prefooter from './components/part.jsx';

function App() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Overlay/>
      <Services/>
      <Jumbo/>
      <Faq/>
      <Signup/>
      <Prefooter/>
      <Footer/>
    </div>
    
  );
}

export default App;
