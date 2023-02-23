import logo from './logo.svg';
import './App.css';
import Cards from './component/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import { Route, Routes } from 'react-router-dom';
import CardDetails from './component/CardDetails';


function App() {
  return (
   <>
     < Header/>
     <Routes>
        <Route to='/' element={<Cards/>} />
        <Route  to='/cart' element={<CardDetails/>} />
     </Routes>
   </>
  );
}

export default App;
