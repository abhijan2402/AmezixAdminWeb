import {Routes, Route} from 'react-router-dom';
import './App.css';
import AdminBoard from './Components/AdminBoard';
import Dashboard from './Pages/Dashboard/Dashboard';
import Categories from './Pages/Categories/Categories';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AdminBoard/>} />
        {/* <Route path='/Dashboard' element={<Dashboard/>} /> */}
        {/* <Route path='/Categories' element={<Categories/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
