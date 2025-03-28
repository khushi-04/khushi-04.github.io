import { Link } from 'react-router-dom';
import '../style.css';
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
        <section className="about-me">
          <div className="content">
            <div className="text-section">
              <p>
                Hi! I'm Khushi, a data science student at University of
                California, Riverside. This is one of my first personal projects dealing with front-end development and I've put a lot of creativity and work into it. I do have experience in a variety of coding languages and tools, honed through personal projects and coursework, so this is an exciting opportunity for me to expand my skills. Feel free to click through this website to check out my projects and skills.
              </p>
              <Link to="/about" className="read-more">More about me!</Link>
            </div>
            <div className="photo-section">
              <img src="/images/personal_photo.jpg" alt="Khushi Chaudhari's Photo" />
            </div>
          </div>
        </section>

        <section className="about-website">
          <h2>About this Website</h2>
          <p>
            The main purpose of this website is to expand my skills in HTML and CSS. It serves as a platform to showcase my portfolio, 
            including my projects and experience. I want to show who I am socially and technically.
          </p>
        </section>
        </Layout>
  );
}
