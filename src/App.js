import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import HotelList from "./components/HotelList";
import Admin from "./pages/Admin";
import HotelAdminPage from "./pages/HotelAdminPage";
import HotelInvoice from "./pages/HotelInvoice";
import UserList from "./components/UserList";
import Footer from "./components/Footer";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hotelList"
          element={
            <ProtectedRoute>
              <HotelList />
            </ProtectedRoute>
          }
        />
        <Route path="/hotelAdminPage" element={<HotelAdminPage />} />
        <Route
          path="/userList"
          element={
            <ProtectedRoute>
              <UserList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hotelInvoice/:id"
          element={
            <ProtectedRoute>
              <HotelInvoice />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
function ProtectedRoute(props) {
  // const isAuthenticated = JSON.parse(localStorage.getItem("adminDetails"));
  const userAuthenticated = JSON.parse(localStorage.getItem("usersDetails"));
  // if (
  //   isAuthenticated &&
  //   isAuthenticated.password &&
  //   isAuthenticated.password.length > 0 &&
  //   isAuthenticated.email
  // ) {
  //   return props.children;
  // }
  if (
    userAuthenticated &&
    userAuthenticated.password &&
    userAuthenticated.password.length > 0 &&
    userAuthenticated.email
  ) {
    return props.children;
  }  else {
    return <Navigate to="/" />;
  }
}
