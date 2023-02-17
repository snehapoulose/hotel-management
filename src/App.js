import{Routes,Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import HotelList from './components/HotelList';
import Admin from './pages/Admin';
import HotelAdmin from './pages/HotelAdmin';
import User from './pages/User';

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/hotelAdmin' element={<HotelAdmin/>}/>
        <Route path='/hotelList' element={<HotelList/>}/>
      </Routes>
    </div>
  );
}

export default App;
