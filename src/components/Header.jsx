import { Link } from 'react-router-dom';
import '../style.css';

export default function Header() {
  return (
    <header>
      <div className="topnav-bar">
        <div className="logo">Khushi Chaudhari</div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Me</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
