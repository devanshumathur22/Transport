import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Slider from "./Pages/Slider";
import Relocation from "./Pages/Relocation";
import Features from "./Pages/Features";
import Banner from "./Pages/Banner";
import AboutUs from "./Pages/AboutUS";
import Delivery from "./Pages/Delivery";
import Map from "./Pages/Map";
import Branches from "./Pages/Branches";
import ContactUs from "./Pages/ContactUs";
import CallUs from "./Pages/CallUs";

// Services
import Packing from "./Services/Packing";
import Household from "./Services/Household";
import Insurance from "./Services/Insurance";
import Car from "./Services/Car";
import Local from "./Services/Local";
import Loading from "./Services/Loading";
import Warehouse from "./Services/Warehouse";
import Escort from "./Services/Escort";
import Office from "./Services/Office";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <CallUs />
              <Relocation />
              <Features />
              <Banner />
              <Delivery />
              <Map />
            </>
          }
        />

        <Route path="/about" element={<AboutUs />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Services */}
        <Route path="/packing" element={<Packing />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/local" element={<Local />} />
        <Route path="/car" element={<Car />} />
        <Route path="/warehouse" element={<Warehouse />} />
        <Route path="/office" element={<Office />} />
        <Route path="/household" element={<Household />} />
        <Route path="/escort" element={<Escort />} />
        <Route path="/insurance" element={<Insurance />} />
      </Routes>

      <Footer />
    </>
  );
}
