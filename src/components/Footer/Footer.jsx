import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer main-page">
      <div className="footer content">
        <p className="content text">О проекте</p>
        <p className="content text">FAQ</p>
      </div>
      <div className="footer content">
        <a className="cu-logo" href="">
          <img src="/img/cu-logo.svg" width="54" height="54" alt="Логотип персонального кабинета" />
        </a>
        <a className="fstw-footer-logo" href="">
          <img src="/img/fstw-footer.svg" width="132" height="67" alt="Логотип персонального кабинета" />
        </a>
      </div>
    </footer>
  );
}
