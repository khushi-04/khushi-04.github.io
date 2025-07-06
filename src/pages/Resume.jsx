import Layout from '../components/Layout';

export default function Resume() {
  return (
    <Layout>
      <section className="featured-projects">
        <h2 className="section-title">My Resume</h2>
        <div className="resume-content">
          <p>You can view or download my resume using the button below.</p>
          <a
            href="/documents/Khushi_Chaudhari_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            View Resume
          </a>
        </div>
      </section>
    </Layout>
  );
}
