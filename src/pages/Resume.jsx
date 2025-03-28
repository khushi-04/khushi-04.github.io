import { Link } from 'react-router-dom';
import Layout from '../components/Layout'

export default function Resume() {
  return (
    <Layout>
      <section className="resume">
        <h2 className="section-title">My Resume</h2>
        <div className="pdf-container">
          <div className="pdf-inner-scroll">
            <iframe
              src="/documents/Khushi_Chaudhari_Resume.pdf"
              title="Khushi Chaudhari Resume"
              width="900"
              height="600"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
}
