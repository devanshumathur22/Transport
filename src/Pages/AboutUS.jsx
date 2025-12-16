import navimg from "../assets/nav.jpg";
import hero from "../assets/hero.jpeg"

export default function AboutUs() {
  return (
    <>
   <section
  className="h-80 bg-fixed bg-center bg-cover flex items-center justify-center"
  style={{
    backgroundImage:"url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600')",}}>
  <h1 className="text-white text-4xl md:text-3xl font-bold tracking-wider">
    ABOUT US
  </h1>
</section>

       <section className="max-w-6xl  px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
     <div>
          <img
            src={hero}
            alt="About Packers"
            className="w-2xl h-72 "/>
        </div>
         <div>
          <h2 className="text-3xl font-bold mb-4">ABOUT US</h2>
          <div className="w-16 h-auto bg-sky-500 mb-6"></div>

          <p className=" mb-4  ">
            <strong>Mahi Packers and Movers</strong> is the pioneer in introducing
            the concept of offering value added packing services as well as
            distribution services through road.
          </p>

          <p className="  mb-4">
            Further <strong>Mahi Packers and Movers</strong> offers you all types
            packing as well as loading and unloading services even for premium
            and high value & time critical fragile items in a committed time
            frame with maximum reliability.
          </p>

          <p className="mb-6">
            <strong>Mahi Packers and Movers</strong> is the first of its kind
            which specialize itself in household packing and distribution all
            over India with more than 1000 employees and 50 branches.
          </p>

          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="list-disc pl-5  space-y-2">
            <li>Door step packing</li>
            <li>Door step Loading and Unloading</li>
            <li>Unpacking and Adjusting</li>
            <li>Escorting</li>
            <li>Lorry supply as per requirement</li>
            <li>Insurance</li>
            <li>Car Carrier Services</li>
            <li>Transportation Service</li>
          </ul>

            <h3 className="text-xl font-semibold mb-4 mt-6">Types of Packing</h3>
          <ul className="list-disc pl-5  space-y-2">
            <li>Lamination Packing: In lamination Packing, first we wrap the goods with polythene then bubble sheets and corrugated sheet and lastly laminate the whole goods with stretch film.
Materials to be Used <br />Polythene, Corrugated sheets, bubble sheet, stretch Film, thermocoal.</li>
            <li>Crate (Wooden) Packing:In crate packing we usually do lamination packing first than crating the materials as per gods shape size & weight with professional carpenters and quality wood.
Materials to be Used Polythene, Corrugated sheets, stretch film, Wooden Strip.
</li>
</ul>
            
        </div>
        </section>
    </>
  );
}
