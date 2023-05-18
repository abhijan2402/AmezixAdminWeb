import {Routes, Route} from 'react-router-dom';
import './App.css';
import AdminBoard from './Components/AdminBoard/AdminBoard';
import Transaction from './Pages/Transaction/Transaction';
import Filter from './Components/Filter/Filter';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AdminBoard/>} />
        <Route path='/Transaction' element={<Transaction/>} />
        <Route path='/Filter' element={<Filter/>}/>
      </Routes>
    </div>
  );
}

export default App;
