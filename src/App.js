import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import AddData from './pages/AddData';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/add' element={<AddData />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
