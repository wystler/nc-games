import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Reviews from './components/Reviews.jsx'
import SelectedReview from './components/SelectedReview.jsx'
import ReturnHome from './components/ReturnHome.jsx' 

function App() {

  const username = "cooljmessy"

  return (
    
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path='/' element={<Reviews />} />
            <Route path='/category/:category' element={<Reviews />} />
            <Route path='/review/:review_id' element={<SelectedReview username={username} />} />
            <Route path='*' element={<ReturnHome username={username} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
