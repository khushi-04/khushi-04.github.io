import { Link } from 'react-router-dom';
import Layout from '../components/Layout'


export default function Home() {
  return (
    <Layout>
      <section className="hero-intro">
            <div className="hero-content">
              <h1>Hi, I'm Khushi</h1>
              <p>
                Hi! I'm a recent data science graduate, located in San Diego. This is one of my first personal projects dealing with front-end development and I've put a lot of creativity and work into it. I do have experience in a variety of coding languages and tools, honed through personal projects and coursework, so this is an exciting opportunity for me to expand my skills. Feel free to click through this website to check out my projects and skills. I'm passionate about building smart and impactful data-driven solutions. I love blending creativity with code to solve meaningful problems and grow with every project.
              </p>
            </div>
          </section>
        <section className="about-website">
          <h2 className="section-title">About this Website</h2>
          <p>
            The main purpose of this website is to expand my skills in React and CSS. It serves as a platform to showcase my portfolio, 
            including my projects and experience. I want to show who I am socially and technically.
          </p>
        </section>
        <section className="about-me-details">
          <h2 className="section-title">About Me</h2>
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
      </Layout>
  );
}
