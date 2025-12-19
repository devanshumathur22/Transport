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
import Cta from "../src/Components/Cta"
import Reviews from "./Pages/Review";
import Booking from "./Components/Booking";
import GetQuote from "./Pages/GetQuote";
import Gallery from "./Components/Gallery";

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
      <Cta/>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <CallUs />
              <Relocation />
              <Reviews/>
              {/* <Gallery/> */}
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
        <Route path="/booking" element={<Booking/>} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/gallery" element={< Gallery/>} />



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
