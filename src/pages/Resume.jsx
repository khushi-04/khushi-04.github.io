import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Resume() {
  return (
    <Layout>
      <section className="resume">
        <h2 className="section-title">My Resume</h2>
        <p>You can view or download my resume using the button below.</p>
        <a
          href="/documents/Khushi_Chaudhari_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          View Resume
        </a>
      </section>
    </Layout>
  );
}
