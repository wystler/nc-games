import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Reviews from './components/Reviews.jsx'
import Welcome from './components/Welcome.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/category/:category' element={<Reviews />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
