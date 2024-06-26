import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import TopMenu from "./components/ui/Menu/Menus";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import ExercisesRoute from "./pages/exercises/ExercisesRoute";

const App = () => {
  const [challenges] = useState([
    {
      name: "User Registration Form",
      id: "urf1",
      description:
        "Create a user registration form with fields for username, email, and password. Validate inputs and display appropriate error messages",
      component: "Form",
    },
    {
      name: "Responsive Navbar",
      id: "rnv2",
      description:
        "Design a responsive navigation bar with options for home, about, services, and contact. Ensure it adapts well to different screen sizes.",
      component: "ResponsiveNavBar",
    },
    {
      name: "Todo List with Local Storage",
      id: "tlls3",
      description:
        "Build a to-do list that allows users to add, edit, and remove tasks. Persist the tasks using local storage.",
    },
    {
      name: "Accordion Component",
      id: "acc4",
      description:
        "Design an accordion component that allows users to expand and collapse sections to view content.",
    },
  ]);

  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div data-theme={theme}>
      <TopMenu theme={theme} switchThemeFunction={switchTheme} />
      <Routes>
        <Route path="/" element={<Home exercisesPages={challenges} />} />
        <Route path="/exercises/*" element={<ExercisesRoute />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
