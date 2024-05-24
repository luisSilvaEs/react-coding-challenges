import { Route, Routes } from "react-router-dom";
import TopMenu from "./components/ui/menu/Menus";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <>
      <TopMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
