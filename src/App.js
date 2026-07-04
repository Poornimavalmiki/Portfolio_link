import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

// import {HashRouter,Routes,Route} from 'react-router-dom'
// import Home from './pages/Home';
// import AboutPage from './pages/AboutPage';
// import SkillsPage from './pages/SkillsPage';
// import ContactPage from './pages/ContactPage';
// import ExperiencePage from './pages/ExperiencePage';
// import EducationPage from './pages/EducationPage';
// import ProjectPage from './pages/ProjectPage';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <HashRouter basename={process.env.PUBLIC_URL}>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/about' element={<AboutPage/>}/>
//           <Route path='/skills' element={<SkillsPage/>}/>
//           <Route path='/contact' element={<ContactPage/>}/>
//           <Route path='/experience' element={<ExperiencePage/>}/>
//           <Route path='/education' element={<EducationPage/>}/>
//           <Route path='/project' element={<ProjectPage/>}/>
//         </Routes>
        
//         </HashRouter>
       
//       </header>
//     </div>
//   );
// }

// export default App;
