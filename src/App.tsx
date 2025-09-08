
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header';
import HomePage from './Pages/Homepage';
import News from './Pages/news';
import AboutMe from './Pages/AboutMe';
import ContactPage from './Pages/contact';
import MusicPage from './Pages/music';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/news" element={<News />} />
          <Route path="/AboutMe" element={<AboutMe />} /> 
          <Route path="/contact" element={<ContactPage />} />   
          <Route path="/music" element={<MusicPage />} /> 
        </Routes>
      </Router>
      
    </>
  )
}

export default App
