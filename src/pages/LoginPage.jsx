import loginBackground from "../assets/login-image.png";
import brandLogo from "../assets/walled-logo.png";
import { Link } from "react-router-dom";
import "../style/LoginPage.css";

function LoginPage() {
  return (
    <div className="login-wrapper">
      <div className="login-section">
        <img src={brandLogo} alt="Brand Logo" className="brand-logo" />
        <form className="login-form">
          <input type="email" placeholder="Masukkan Email" />
          <input type="password" placeholder="Masukkan Password" />
          <Link to="/">
            <button type="submit">Masuk</button>
          </Link>
        </form>
        <p className="signup-prompt">
          Belum memiliki akun? <Link to="/register">Daftar sekarang</Link>
        </p>
      </div>
      <div className="login-image">
        <img src={loginBackground} alt="Illustrasi Keuangan" />
      </div>
    </div>
  );
}

export default LoginPage;
