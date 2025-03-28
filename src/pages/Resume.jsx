import { Link } from 'react-router-dom';
import '../style.css';
import Layout from '../components/Layout'

export default function Resume() {
  return (
    <Layout>
        <section className="resume">
          <h2>My Resume</h2>
          <div className="pdf-wrapper">
            <iframe
              src="/documents/Khushi_Chaudhari_Resume.pdf"
              title="Khushi Chaudhari Resume"
            ></iframe>
          </div>
        </section>
      </Layout>
  );
}
