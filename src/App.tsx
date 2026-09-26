/* =========================================
   APP STYLESHEET IMPORT
   Imports the CSS file used to style
   this React portfolio application
   ========================================= */
import './App.css'
import kayodeLogo from './assets/logo_.png'
import logo_image from './assets/image_logo.png'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import project1Image from "./assets/project1-cybersecurity.png";
import project2Image from './assets/bank_image1.png';
import project3Image from './assets/Retinal_image.png';
import project4Image from './assets/Gym_image.png';

/* =========================================
   MAIN APP COMPONENT
   This is the main React component for
   the entire portfolio website
   ========================================= */
function App() {

  /* return() contains the content that
     React displays in the browser */
  return (

    /* Main wrapper for the entire portfolio */
    <div className="portfolio">
      {/* =====================================
          NAVIGATION BAR
          Displays the logo and navigation
          links at the top of the website
          ===================================== */}
      <header className="navbar">

        {/* Personal logo / brand name */}
        <div className="logo">
          <img src={kayodeLogo} alt="Kayode Aina logo" />
        </div>
        {/* Navigation links.
            Each href connects to the id of
            a section elsewhere on the page. */}
        <nav>

          {/* Navigates to the Home section */}
          <a href="#home">Home</a>

          {/* Navigates to the About section */}
          <a href="#about">About</a>

          {/* Navigates to the Skills section */}
          <a href="#skills">Skills</a>

          {/* Navigates to the Projects section */}
          <a href="#projects">Projects</a>

          {/* Navigates to the Experience section */}
          <a href="#experience">Experience</a>

          {/* Navigates to the Contact section */}
          <a href="#contact">Contact</a>
            {/* Download CV button */}
        </nav>
       <a href="/Kayode_Aina_CV.pdf" className="cv-button" download>
          Download CV
      </a>
      </header>
 {/* =========================================
    HOME / HERO SECTION
    This is the first section visitors see
    when they open the portfolio website
    ========================================= */}
    <main>
      <section id="home" className="hero">
      <div className="hero-left">
    {/* Small introduction displayed above the name */}
    <p className="intro">Hello, I'm</p>

    {/* Main professional name */}
    <h1>Kayode Aina</h1>

    {/* Primary professional role/title */}
    <h2>Software Developer | AI & Data Engineering</h2>
    {/* Short professional summary explaining
        the main areas of technology interests */}
    <p className="hero-description">
      Building web, data, and intelligent applications with interests
      in cybersecurity, AI agents, and information systems.
    </p>
    {/* Call-to-action buttons.
        These links take visitors directly to
        Projects or Contact sections. */}
    <div className="hero-buttons">
            {/* Takes visitors to my Projects section */}
            <a href="#projects">View My Projects</a>

            {/* Takes visitors to my Contact section */}
            <a href="#contact">Contact Me</a>
         </div> {/* closes hero-buttons */}
          {/* End of hero-left div */}
          </div> {/* End of hero section */}
          <div className="hero-right">
          <div className="profile-circle">
            <img src={logo_image} alt="Kayode Aina" />
          </div>
              <div className="hero-socials">
                <a href="https://github.com/kayodeaina" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>

                <a href="https://www.linkedin.com/in/kayodeaina/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="mailto:kayodeaina741@gmail.com" aria-label="Email">
                  <FaEnvelope />
                </a>
        </div>
          </div>
  </section>
        {/* ===================================
            ABOUT SECTION
            Introduces my professional background,
            interests and approach to technology
            =================================== */}
      <section id="about" className="about">

         {/* Container controls the width and
              positioning of the About content */}
        <div className="section-container">
          <div className="section-heading-box">
          {/* Small label identifying this section */}
          <p className="section-label">About Me</p>       
            {/* Main heading for the About section */}
          <h2>Building technology with purpose.</h2>
          </div>
                  {/* First paragraph summarises my
                professional and academic background */}
          <p>
            I am a Software Developer with a background in software 
             development and technical communication. My interests include
             full-stack development, data engineering, artificial intelligence,
             cybersecurity, databases, and information systems.
          </p>
          <p>
            I enjoy developing practical solutions that combine
             software engineering, structured information,
             AI and data-driven technologies to solve real-world problems.
          </p>
        </div>
      </section>
        {/* ===================================
            SKILLS SECTION
            Presents my technical skills and
            technologies grouped by category
            =================================== */}
          {/* </main> */}
          <section id="skills" className="skills">

          {/* Controls the width and positioning
              of all content inside this section */}
          <div className="section-container">
            <div className="section-heading-box">
            {/* Small label identifying the section */}
            <p className="section-label">Skills</p>
            {/* Main heading for the Skills section */}
            <h2>Technical Skills & Technologies</h2>
            </div>
            {/* =================================
                SKILLS GRID
                Holds all skill cards and allows
                CSS Grid to arrange them into columns
                ================================= */}
            <div className="skills-grid">
              {/* ===============================
                  FRONTEND DEVELOPMENT
                  Technologies used to build
                  website user interfaces
                  =============================== */}
              <div className="skill-card">
                <h3>Frontend Development</h3>
                <p>
                  React, Angular, TypeScript, JavaScript, HTML5, CSS3
                </p>
              </div>

              {/* ===============================
                  BACKEND DEVELOPMENT
                  Technologies used for server-side
                  applications and APIs
                  =============================== */}
              <div className="skill-card">
                <h3>Backend Development</h3>
                <p>
                  Python, Django, FastAPI, Spring Boot, .NET, REST APIs
                </p>
              </div>
              {/* ===============================
                  DATA & DATABASES
                  Technologies and concepts used
                  for storing and processing data
                  =============================== */}
              <div className="skill-card">
                <h3>Data & Databases</h3>
                <p>
                  SQL, PostgreSQL, MySQL, MongoDB, Data Processing, Data Engineering
                </p>
              </div>
              {/* ===============================
                  CYBERSECURITY
                  Security-related knowledge
                  and technical interests
                  =============================== */}
              <div className="skill-card">
                <h3>Cybersecurity</h3>
                <p>
                  Security Engineering, Encryption, Vulnerability Analysis
                </p>
              </div>

              {/* ===============================
                  AI & INFORMATION RETRIEVAL
                  AI, NLP and search technologies
                  used in intelligent applications
                  =============================== */}
              <div className="skill-card">
                <h3>AI & Information Retrieval</h3>
                <p>
                 NLP, Machine Learning, CNN, TF-IDF, Cosine Similarity, AI Agents
                </p>
              </div>
              {/* ===============================
                  INFORMATION TECHNOLOGIES
                  Structured content and information
                  design technologies
                  =============================== */}
              <div className="skill-card">
                <h3>Information Technologies</h3>
                <p>
                  XML, DITA, Information Design, Technical Communication
                </p>
              </div>
            </div>
          </div>
      </section>
      </main>

          {/* ===================================
            PROJECTS SECTION
            Showcases practical projects that
            demonstrate my technical experience
            =================================== */}
        <section id="projects" className="projects">

          {/* Controls the width and positioning
              of the Projects section content */}
            <div className="section-container">
            <div className="section-heading-box">
            {/* Small label identifying the section */}
            <p className="section-label">Projects</p>
            {/* Main heading for the Projects section */}
            <h2>Selected Projects</h2>
            </div>

            {/* Short introduction to the project area */}
            <p className="projects-intro">
              A selection of projects demonstrating my experience in
              software development, cybersecurity, data, artificial
              intelligence and information systems.
            </p>

            {/* =================================
                PROJECTS GRID
                Holds the individual project cards
                ================================= */}
            <div className="projects-grid">

              {/* ===============================
                  PROJECT 1
                  MSc Cybersecurity / NLP Project
                  =============================== */}
              <article className="project-card">
                  <div className="project-image">
                    <img
                      src={project1Image}
                      alt="Cybersecurity vulnerability search and retrieval project"
                    />
                  </div>
                {/* Identifies the type of project */}
                <p className="project-type">
                  MSc Research Project
                </p>

                {/* Full project title */}
                <h3>
                  Cybersecurity Vulnerability Search & Retrieval System
                </h3>

                {/* Short explanation of the project */}
                <p className="project-description">
                  Developed a structured cybersecurity information retrieval
                  prototype combining DITA XML, natural language processing,
                  TF-IDF vectorization and cosine similarity to retrieve and
                  rank CVE vulnerability documentation.
                </p>

                {/* Technologies used in this project */}
                <div className="project-technologies">

                  {/* Individual technology badges */}
                  <span>Python — data processing and retrieval</span>
                  <span>DITA XML — structured vulnerability documentation</span>
                  <span>NLP — text preprocessing and standardization</span>
                  <span>TF-IDF — text feature extraction</span>
                  <span>Cosine Similarity — document retrieval and ranking</span>
                  <span>Cybersecurity — security contingency planning, vulnerability analysis, and encryption</span>
                </div>
                <div className="project-links">
                   <a href="https://github.com/kayodeaina/cybersecurity-dita-nlp" target="_blank" rel="noreferrer">View Project</a>
                   <a href="https://github.com/kayodeaina/cybersecurity-dita-nlp" target="_blank" rel="noreferrer">GitHub </a> 
                </div>
              </article>

               {/* ===============================
                  PROJECT 2
                  =============================== */}
              <article className="project-card">

                  <div className="project-image">
                    <img
                      src={project2Image}
                      alt="AI-Powered Banking Loan Question and Answer Assistant"
                    />
                  </div>
                {/* Identifies the type of project */}
                <p className="project-type">
                  MSc AI / Prompt Engineering
                </p>
                {/* Main title of Project 3 */}
                <h3>
                  AI-Powered Banking Loan Question & Answer Assistant
                </h3>

                {/* Describes the purpose of the AI assistant
                    and how users interact with it */}
                <p className="project-description">
                   Developed an interactive banking loan assistant using Poe that
                    responds to loan-related questions and guides users through loan
                    calculations. The assistant accepts inputs such as loan amount,
                    interest rate and repayment period, and provides estimated payment
                    information through structured prompts and conversational
                    interaction.
                </p>

                {/* Skills and technologies demonstrated
                    through the AI assistant */}
                <div className="project-technologies">

                  {/* Individual technology and skill badges */}
                  <span>Poe — AI assistant platform</span>
                  <span>AI — intelligent question-and-answer interaction</span>
                  <span>Prompt Engineering — structured loan-related prompts</span>
                  <span>Conversational AI — interactive user communication</span>
                  <span>Loan Calculation — repayment estimation</span>
                  <span>Banking Q&A — loan information and guidance</span>

                </div>
                    <div className="project-links">
                      <a href="https://github.com/kayodeaina/ai-banking-loan-assistant" target="_blank" rel="noreferrer">
                        View Project
                      </a>

                     <a href="https://github.com/kayodeaina/ai-banking-loan-assistant" target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    </div>

              </article>
              {/* ===============================
                  PROJECT 3
                  Diabetes Screening Using CNN
                  =============================== */}
              <article className="project-card">
                    <div className="project-image">
                      <img
                        src={project3Image}
                        alt="Diabetes Screening Through Retinal Image Analysis"
                      />
               </div>
                {/* Identifies the academic project level */}
                  <p className="project-type">
                    BSc(Hons) Project
                  </p>

                {/* Main title of Project 2 */}
                <h3>
                  Diabetes Screening Through Retinal Image Analysis
                </h3>

                {/* Brief description explaining
                    the purpose and technology of the project */}
                <p className="project-description">
                  Developed a web-based diabetes screening application using
                  Python, Django, and a Convolutional Neural Network (CNN) to
                  analyse retinal images. The application provides a web
                  interface for submitting retinal images and presenting
                  screening results generated by the CNN-based image
                  analysis system.
                </p>

                {/* Technologies and techniques used
                    to develop the application */}
                <div className="project-technologies">

                  {/* Individual technology badges */}
                  <span>Python — application and model development</span>
                  <span>Django — web application framework</span>
                  <span>CNN — retinal image classification</span>
                  <span>Deep Learning — model training and prediction</span>
                  <span>Image Processing — preparation of retinal images</span>
                  <span>Retinal Imaging — input image data for diabetes screening</span>

                </div>
                    <div className="project-links">
                      <a href="#" target="_blank" rel="noreferrer">
                        View Project
                      </a>
                      <a href="#" target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    </div>

              </article>

                {/* ===============================
                  PROJECT 4
                  Classic Gym Website
                  =============================== */}
              <article className="project-card">

                  <div className="project-image">
                    <img
                      src={project4Image}
                      alt="Classic Gym Website"
                    />
                  </div>

                {/* Identifies the type of project */}
                    <p className="project-type">
                     BSc (Hons) Project
                    </p>

                {/* Main title of Project 3 */}
                <h3>
                  Classic Gym Website
                </h3>

                {/* Describes the main functions
                    available on the gym website */}
                <p className="project-description">
                  Developed a responsive gym website using Angular, providing
                  functionality for user registration, appointment booking,
                  service enquiries and query submission through a structured
                  single-page web interface.
                </p>

                {/* Technologies used to develop
                    the Classic Gym website */}
                <div className="project-technologies">

                  {/* Individual technology badges */}
                  <span>Angular — web application framework</span>
                  <span>TypeScript — application logic and functionality</span>
                  <span>HTML5 — webpage structure</span>
                  <span>CSS3 — styling and page layout</span>
                  <span>Responsive Design — support for different screen sizes</span>
                  <span>Single-Page Application — interactive page navigation</span>

                </div>
                      <div className="project-links">
                        <a
                             href="https://github.com/kayodeaina/classic-gym-website"
                             target="_blank"
                             rel="noreferrer"
                           >
                             View Project
                           </a>
                              <a
                               href="https://github.com/kayodeaina/classic-gym-website">
                               GitHub
                             </a>
                        </div>
              </article>
            </div>          
          </div>
        </section>
        
{/* ==========================================
    EXPERIENCE SECTION
    Highlights professional and practical
    work experience
========================================== */}



      <section id="experience" className="experience">
      <div className="section-container">
        <div className="section-heading-box">
      <p className="section-label">Experience</p>
      <h2>Professional Experience</h2>
      </div>
      <div className="experience-list">
      <article className="experience-card">
        {/* Professional role title */}
          <h3>Security Operations & Technical Systems Support</h3>
        <p className="experience-company">
          Pharmaceutical Manufacturing Environment
        </p>

            {/* Summarises the technical and operational
          responsibilities performed in this role */}
                <p className="experience-description">
                  Supported security and technical operations within a regulated
                  pharmaceutical manufacturing environment, including electronic
                  access-control systems, CCTV and alarm monitoring, badge management,
                  incident reporting and monitoring of critical technical areas.
                  Worked within compliance-focused site procedures and supported
                  accurate operational reporting.
                </p>
      </article>
      <article className="experience-card">
        <h3>IT Support</h3>
        <p className="experience-company">
          Delta Computer Service
        </p>

           {/* Summarises the IT support responsibilities
                performed in this role */}
            <p className="experience-description">
              Provided technical support for computer systems, software, and user
              issues, including troubleshooting, system setup, and general IT
              support activities.
            </p>
      </article>

    </div>

  </div>
  

</section>   

{/* CONTACT SECTION */}
<section id="contact" className="contact">
<div className="section-container">

    <p className="section-label">Contact</p>

    <h2>Let's Work Together</h2>

    <p className="contact-intro">
      I'm open to opportunities in software development, 
      data engineering, and AI where I can apply my technical skills,
      project experience, and problem-solving background. Feel free
      to get in touch.
    </p>

    <div className="contact-links">
      <a href="mailto:kayodeaina743@gmail.com">Email</a>
      <a href="https://www.linkedin.com/in/kayodeaina/" target="_blank" rel="noreferrer">LinkedIn</a>
      <a href="https://github.com/kayodeaina" target="_blank" rel="noreferrer">GitHub</a>
    </div>

  </div>
  
   
</section> 
{/* FOOTER */}
<footer className="footer">
    <p>© 2026 Kayode Aina. All rights reserved.</p>
</footer>

    </div>
  )
}

export default App
