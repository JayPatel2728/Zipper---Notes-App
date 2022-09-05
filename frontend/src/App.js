import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './screens/LandingPage/LandingPage';

function App() {
  return (
    <>
      <Header/>
      <main>
        <LandingPage/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
