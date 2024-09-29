
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/header';
import HomePage from './Pages/Homepage';
import News from './Pages/news';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} /> 
          <Route path="/news" element={<News />} />     
        </Routes>
      </Router>
      
    </>
  )
}

export default App
