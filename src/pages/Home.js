import React, { useEffect, useState } from "react";
import "./Home.css";

import AboutPage from "./AboutPage";
import SkillsPage from "./SkillsPage";
import EducationPage from "./EducationPage";
import ExperiencePage from "./ExperiencePage";
import ProjectPage from "./ProjectPage";
import ContactPage from "./ContactPage";

function Home() {

  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {

    const handleScroll = () => {

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {
          setActiveSection(id);
        }

      });

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <>

      <header className="navbar1">

       <div>
  <img
    src={process.env.PUBLIC_URL + "/3.png"}
    alt="logo"
    style={{ width: "1.5cm", height: "1.5cm" }}
  />
</div>
        <div className="nav-buttons">

          <button
            className={activeSection === "home" ? "active" : ""}
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>

          <button
            className={activeSection === "about" ? "active" : ""}
            onClick={() => scrollToSection("about")}
          >
            About
          </button>

          <button
            className={activeSection === "skills" ? "active" : ""}
            onClick={() => scrollToSection("skills")}
          >
            Skills
          </button>

          <button
            className={activeSection === "education" ? "active" : ""}
            onClick={() => scrollToSection("education")}
          >
            Education
          </button>

          <button
            className={activeSection === "experience" ? "active" : ""}
            onClick={() => scrollToSection("experience")}
          >
            Experience
          </button>

          <button
            className={activeSection === "projects" ? "active" : ""}
            onClick={() => scrollToSection("projects")}
          >
            Projects
          </button>

          <button
            className={activeSection === "contact" ? "active" : ""}
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>

        </div>

      </header>

      <section id="home" className="section page-bg">
       <h1 className="display-2 fw-bold ">
  Hi, I'm <span className="text-primary">Poornima Valmiki</span>
</h1>
      </section>

      <section id="about" className="section page-bg">
        <AboutPage />
      </section>

      <section id="skills" className="section page-bg">
        <SkillsPage />
      </section>

      <section id="education" className="section page-bg">
        <EducationPage />
      </section>

      <section id="experience" className="section page-bg">
        <ExperiencePage />
      </section>

      <section id="projects" className="section page-bg">
        <ProjectPage />
      </section>

      <section id="contact" className="section page-bg">
        <ContactPage />
      </section>

    </>
  );
}

export default Home;
