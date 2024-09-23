import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Service from "./pages/service.jsx";
import Contact from "./pages/contact.jsx";
import Mainnavbar from "./components/navbar.jsx";

const App = ()=>{
  return(
    <>
      <BrowserRouter>
      <Mainnavbar></Mainnavbar>
        <Routes>
          <Route path="/" element={<Home></Home>}> </Route>
          <Route path="/about" element={<About></About>}> </Route>
          <Route path="/service" element={<Service></Service>}> </Route>
          <Route path="/contact" element={<Contact></Contact>}> </Route>
        </Routes>

      </BrowserRouter>        
    </>
  )
}

export default App;