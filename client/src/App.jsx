import { BrowserRouter ,Routes,Route} from "react-router-dom";
import { Home } from "./pages/home";
import { Route_des } from "./pages/Route_des";
import { Map } from "./pages/Map";
import { Contact_Us } from "./pages/contact";
import { Navbar } from "./Components/Navbar";
import { Services } from "./pages/Services";



const App = () =>{
  return (  
  <>
  <BrowserRouter>
    <Navbar/>
  <Routes>
    <Route path="/" element={ <Home/>} />
    <Route path="/route" element={ <Route_des/>} />
    <Route path="/map" element={ <Map/>} />
    <Route path="/services" element={ <Services/>} />
    <Route path="/contact_us" element={ <Contact_Us/>} />
  </Routes>
  </BrowserRouter>
  
  </>
  );
}

export default App;