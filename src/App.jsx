import { Routes, Route } from "react-router-dom";
import Navbar from "../src/Components/Navbar";
import Footer from "../src/Components/Footer";
import Slider from "../src/Pages/Slider";
import Callus from "../src/Pages/CallUs"; 
import Relocation from "../src/Pages/Relocation";
import Features from "../src/Pages/Features";
import Banner from "../src/Pages/Banner";
import AboutUs from "../src/Pages/AboutUS";
import Delivery from "../src/Pages/Delivery";
import Map from "../src/Pages/Map"
import Branches from "../src/Pages/Branches";
import ContactUs from "../src/Pages/ContactUs"
import Packing from "../src/Services/Packing";
import Household from "../src/Services/Household"
import Insurance from "../src/Services/Insurance"
import Car from "../src/Services/Car"
import Local from "../src/Services/Local"
import Loading from "../src/Services/Loading"
import Warehouse from "../src/Services/Warehouse"
import Escort from "../src/Services/Escort"
import Office from "../src/Services/ Office"
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
              <Callus />
              <Relocation />
              <Features />
              <Banner />
              <Delivery />
              <Map/>           
            </>
          }
        />
        
        <Route path="/about" element={<AboutUs />} />     
        <Route path="/branches" element={<Branches />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* services */}
        <Route path="/Packing" element={<Packing  />}/>
        <Route path="/Loading" element={<Loading  />}/>
        <Route path="/Local" element={<Local/>}/>
        <Route path="/Car" element={<Car />}/>
        <Route path="/Warehouse" element={<Warehouse  />}/>
        <Route path="/Office" element={<Office />}/>
        <Route path="/Household" element={<Household  />}/>
        <Route path="/Escort" element={<Escort />}/>
        <Route path="/Insurance" element={<Insurance />}/>

      </Routes>
      <Footer />
    </>
  );
}
