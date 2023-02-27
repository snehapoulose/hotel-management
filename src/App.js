import{Routes,Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import HotelList from './components/HotelList';
import Admin from './pages/Admin';
import HotelAdmin from './pages/HotelAdmin';
import HotelAdminPage from './pages/HotelAdminPage';
import HotelInvoice from './pages/HotelInvoice';
import AdminLogin from './pages/AdminLogin';
import User from './pages/User';
import UserList from './components/UserList';

function App() {

  return (
    <div >
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/hotelAdmin' element={<HotelAdmin/>}/>
        <Route path='/hotelList' element={<HotelList/>}/>
        <Route path='/adminLogin' element={<AdminLogin/>}/>
        <Route path='/hotelAdminPage' element={<HotelAdminPage/>}/>
        <Route path='/userList' element={<UserList/>}/>
        <Route path='/hotelInvoice/:id' element={<HotelInvoice/>}/>
      </Routes>
    </div>
  );
}

export default App;
