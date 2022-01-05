import Landing from "./Pages/Landing";
import AboutPage from "./Pages/AboutPage";
import ProjectPage from "./Pages/ProjectPage";
import ContactPage from "./Pages/ContactPage";
import CookiePage from "./Pages/CookiePage"
import GlobalStyle from "./GlobalStyle.css"
// import styled from "styled-components";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/projects" element={<ProjectPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/cookie" element={<CookiePage />} />
      </Routes>
    </>
  );
}
export default App
