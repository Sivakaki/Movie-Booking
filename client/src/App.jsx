import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";
import { MovieDetails } from "./pages/Moviedetails";
import { MyBookings } from "./pages/MyBookigs";
import { SeatLayout } from "./pages/SeatLayout";
import { Favorite } from "./pages/Favourite";
import { Toaster } from 'react-hot-toast'
import {Footer} from './components/Footer';


const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')


  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:data" element={<SeatLayout />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      {!isAdminRoute && <Footer/> }
    </>
  );
};

export default App;
