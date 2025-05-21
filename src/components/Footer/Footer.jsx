import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer main-page">
      <div className="footer content">
        <Link to="/about" className="content-link">
          <p className="content text">О проекте</p>
        </Link>
        <Link to="/FAQ" className="content-link">
          <p className="content text">FAQ</p>
        </Link>
      </div>
      <div className="footer content">
        <Link className="cu-logo">
          <img src="/img/cu-logo.svg" width="54" height="54" alt="Логотип персонального кабинета" />
        </Link>
        <Link className="fstw-footer-logo">
          <img src="/img/fstw-footer.svg" width="132" height="67" alt="Логотип персонального кабинета" />
        </Link>
      </div>
    </footer>
  );
}
