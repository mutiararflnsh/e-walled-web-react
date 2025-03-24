import registerImage from "../assets/login-image.png";
import logo from "../assets/logo-loginregister.png";
import { Link } from "react-router-dom";
import "../style/RegisterPage.css";

function RegisterPage() {
  return (
    <div className="register-wrapper">
      <div className="register-section">
        <img src={logo} alt="Brand Logo" className="brand-logo" />
        <form className="registration-form">
          <input type="text" placeholder="Nama Lengkap" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Kata Sandi" />
          <input type="text" placeholder="Nomor HP" />
          <Link to="/login">
            <button type="submit">Buat Akun</button>
          </Link>
        </form>
        <p className="signin-prompt">
          Sudah memiliki akun? <Link to="/login">Masuk di sini</Link>
        </p>
      </div>
      <div className="register-image">
        <img src={registerImage} alt="Illustrasi Pendaftaran" />
      </div>
    </div>
  );
}

export default RegisterPage;
