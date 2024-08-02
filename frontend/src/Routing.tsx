import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './routes/Home/Home.tsx';

function Routing() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
  )
}

export default Routing
