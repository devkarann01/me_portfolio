
import './App.css'
import AboutMe from './components/AboutMe'
import NavbarSection from './components/Navbar'
import HeroSection from './components/HeroSection'
import EducationSection from './components/EducationSection'
// import Particle from './components/ParticleBackground'
import SkillSection from './components/SkillsSection'
import ExperienceSection from './components/ExperienceSection'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Others from './components/Other'
import Gallary from './components/Gallary '
// import Example from './components/Example'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <div className=" bg-slate-950 w-full text-white">
    <Router>
       <NavbarSection/>
           <Routes>
             <Route path="#HeroSection" element={<HeroSection/>}/>
             <Route path="#EducationSection" element={<EducationSection />} />
             <Route path="#AboutUs" element={<AboutMe/>}/>
             <Route path="#ExperienceSection" element={<ExperienceSection />} />
             <Route path="#SkillsSection" element={<SkillSection />} />
             <Route path="#Projects" element={<Projects/>} />
             <Route path='#contact' element={<Contact/>}/>
             
           </Routes>
       </Router>
  <HeroSection id="HeroSection" />
  <AboutMe id="AboutUs"/>
  <SkillSection id="SkillsSection"/>
  {/* <Gallary/> */}
  <Projects id="Projects" />
  <ExperienceSection id="ExperienceSection"/>
  {/* <Others ref={Others}/> */}
  <EducationSection id="EducationSection" />
  <Contact />
  {/* <Example/> */}
  <Footer className="bg-black"/>
    {/* <Particle/> */}

    </div>

  
  )
}

export default App
