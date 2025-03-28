import { Link } from 'react-router-dom';
import '../style.css';

export default function About() {
  return (
    <>
      <main>
      <section className="hero-intro">
            <div className="hero-content">
              <h1>Hi, I'm Khushi 👋</h1>
              <p>
                I'm a fourth-year Data Science student at UC Riverside, passionate about building smart and impactful data-driven solutions. I love blending creativity with code to solve meaningful problems and grow with every project.
              </p>
            </div>
          </section>
        <section className="about-me-details">
          <h2>About Me</h2>
          <p>
            I am a fourth-year B.S. Data Science major at the University of
            California, Riverside. I have experience in a variety of coding languages and tools, honed through personal projects and coursework.
            Some of the key courses I have taken include:
          </p>
          <ul className="courses-list">
            <li>Big Data Management</li>
            <li>Data Structures and Algorithms</li>
            <li>Intro to AI</li>
            <li>Software Construction</li>
            <li>Statistical Computing with SAS</li>
            <li>Database Management Systems</li>
            <li>Data Analysis Methods</li>
          </ul>
        </section>

        <section className="card-section">
          <div className="card">
            <h3>Languages</h3>
            <ul>
              <li>C++</li>
              <li>SQL</li>
              <li>Python</li>
              <li>SAS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>R</li>
              <li>C#</li>
              <li>Java</li>
            </ul>
          </div>

          <div className="card">
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>R Studio</li>
              <li>Unity</li>
              <li>Agile</li>
              <li>Next.js</li>
              <li>Tailwind CSS</li>
              <li>PostgreSQL</li>
              <li>Office Suite</li>
              <li>Jupyter Notebook</li>
              <li>Scrum</li>
              <li>QA Testing</li>
            </ul>
          </div>

          <div className="card">
            <h3>Hobbies</h3>
            <ul>
              <li>Video Games</li>
              <li>Finding new music</li>
              <li>Netflix TV Shows</li>
              <li>Traveling</li>
              <li>Concerts</li>
              <li>Escape Rooms</li>
              <li>Digital Art</li>
              <li>Karaoke</li>
            </ul>
          </div>
        </section>
      </main>

      <footer>
        <p>Connect with me:</p>
        <ul className="footer-links">
          <li><a href="https://www.linkedin.com/in/khushi-chaudhari33/">LinkedIn: khushi-chaudhari33</a></li>
          <li><a href="https://github.com/khushi-04">GitHub: khushi-04</a></li>
          <li><a href="mailto:khushi.chaudhari@gmail.com">Email: khushi.chaudhari@gmail.com</a></li>
          <li><a href="tel:6195993910">Phone: 619-599-3910</a></li>
        </ul>
      </footer>
    </>
  );
}
