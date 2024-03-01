import react from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Analytics from "./component/Analytics";
import Newslater from "./component/Newslater";
import Cards from "./component/Cards";
import Footer from "./component/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newslater />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
