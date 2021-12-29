import Landing from "./Pages/Landing";
import AboutPage from "./Pages/AboutPage";
import ProjectPage from "./Pages/ProjectPage";
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
      </Routes>
    </>
  );
}
export default App
