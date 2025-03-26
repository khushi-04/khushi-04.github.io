import { Link } from 'react-router-dom';
import '../style.css';

export default function Resume() {
  return (
    <>
      <main>
        <section className="resume">
          <h2>My Resume</h2>
          <div className="pdf-container">
            <iframe
              src="/documents/resume.pdf"
              width="100%"
              height="600px"
              frameBorder="0"
              title="Khushi Chaudhari Resume"
            ></iframe>
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
