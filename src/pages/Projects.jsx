import { Link } from 'react-router-dom';
import '../style.css';

export default function Projects() {
  return (
    <>
      <main>
        <section className="featured-projects">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            <div className="project">
              <h3>Correlation Optimizer</h3>
              <p>Optimized final exam grading by cleaning student grade data and using correlation analysis to align question weights with actual performance. Ensured fairer assessment through deep EDA and statistical modeling.</p>
            </div>
            <div className="project">
              <h3>Movie Recommender System</h3>
              <p>Created a collaborative filtering system using the MovieLens dataset and KNN to generate personalized movie recommendations based on user similarity.</p>
              <a href="https://github.com/khushi-04/movie-recommender" target="_blank" className="project-link">View on GitHub</a>
            </div>
            <div className="project">
              <h3>Eight Puzzle Search</h3>
              <p>Implemented UCS and A* algorithms with heuristics to solve the classic 8-puzzle problem in Python, exploring trade-offs in informed vs. uninformed search.</p>
              <a href="https://github.com/khushi-04/Eight-Puzzle-Search" target="_blank" className="project-link">View on GitHub</a>
            </div>
          </div>
        </section>

        <section className="all-projects">
          <h2>All Projects (starting from most recent, not including featured projects)</h2>
          <div className="project-list">
            {[
              {
                title: "K-Nearest-Neighbor Feature Selection",
                desc: "Built a feature selection pipeline using KNN to improve classification accuracy, balancing dimensionality and performance using NumPy and Pandas.",
                link: "https://github.com/khushi-04/KNN-Feature-Selection"
              },
              {
                title: "Product App",
                desc: "Developed a dynamic product catalog web app using Angular, showcasing component-based architecture and responsive design with unit testing support.",
                link: "https://github.com/khushi-04/product-app"
              },
              {
                title: "Student Dropout Rates",
                desc: "Analyzed dropout predictors using R with logistic regression and random forests, using ROC curves, AIC/BIC, and k-fold CV for evaluation.",
                link: "https://github.com/khushi-04/student-dropout-rates"
              },
              {
                title: "Data Analysis for Online Shopping Insights",
                desc: "Performed EDA and applied machine learning models in Python to derive insights from online shopping behavior, then presented findings to a panel.",
                link: "https://github.com/khushi-04/online-shopping"
              },
              {
                title: "Enhancing Interactive Textbook Experience",
                desc: "Collaborated at UCLA's DataFest to analyze online textbook usage and deliver actionable insights using R, ggplot, and dplyr in a 48-hour challenge.",
                link: "https://github.com/khushi-04/datafest2024"
              },
              {
                title: "Amazon Database Management System",
                desc: "Built a Java-based interface for Amazon-style store interactions using MySQL, supporting different user roles and a robust backend.",
                link: "https://github.com/khushi-04/Amazon"
              },
              {
                title: "Imposter Syndrome Analysis and Mitigation",
                desc: "Used chi-square and correlation tests in Python to explore patterns in imposter syndrome data, with visualizations using Seaborn and Matplotlib.",
                link: "https://github.com/khushi-04/imposter-syndrome"
              },
              {
                title: "My Favorite Story - Role Playing Game",
                desc: "Led a C++ team project using Agile methodology, Git, and Google Test to build a text-based RPG with full test coverage and UML diagrams.",
                link: "https://github.com/khushi-04/CS100-FinalProject"
              },
              {
                title: "AFJROTC Website",
                desc: "Maintained and updated an official high school AFJROTC website using HTML and CSS, serving 160+ users with timely event and media updates.",
                link: "https://github.com/khushi-04/ca-935.github.io"
              },
            ].map((proj, i) => (
              <div className="project" key={i}>
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <a href={proj.link} target="_blank" className="project-link" rel="noreferrer">View on GitHub</a>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>Connect with me:</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/khushi-chaudhari33/" target="_blank" rel="noreferrer">
            <img src="/images/linkedin_logo.png" alt="LinkedIn" className="footer-icon" />
          </a>
          <a href="https://github.com/khushi-04" target="_blank" rel="noreferrer">
            <img src="/images/github_logo.png" alt="GitHub" className="footer-icon" />
          </a>
          <a href="mailto:khushi.chaudhari@gmail.com">
            <img src="/images/email_logo.png" alt="Email" className="footer-icon" />
          </a>
          <a href="tel:6195993910">
            <img src="/images/phone_logo.png" alt="Phone" className="footer-icon" />
          </a>
        </div>
      </footer>
    </>
  );
}
