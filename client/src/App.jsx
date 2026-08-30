import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";
import { MovieDetails } from "./pages/Moviedetails";
import { MyBookings } from "./pages/MyBookigs";
import { SeatLayout } from "./pages/SeatLayout";
import { Favorite } from "./pages/Favourite";
import { Toaster } from "react-hot-toast";
import { Footer } from "./components/Footer";
import { Layout } from "./pages/admin/Layout";
import { DashBoard } from "./pages/admin/DashBoard";
import { AddShows } from "./pages/admin/AddShows";
import { ListShows } from "./pages/admin/ListShows";
import { ListBookings } from "./pages/admin/ListBookigs";

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith("/admin");

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
        <Route path="/admin/*" element={<Layout />}>
          <Route index element={<DashBoard />} />
          <Route path="add-shows" element={<AddShows />} />
          <Route path="list-shows" element={<ListShows />} />
          <Route path="list-bookings" element={<ListBookings />} />
        </Route>
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
