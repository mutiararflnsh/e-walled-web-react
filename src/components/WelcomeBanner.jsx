function WelcomeBanner({ userImage }) {
  return (
    <section className="welcome-section">
      <div className="welcome-text">
        <h1>Good Morning, Bubu!</h1>
        <p>Check your all incoming transactions here!</p>
      </div>
      <div className="user-profile">
        <div className="user-details">
          <h3>Bubu Rifliansah</h3>
          <p>Personal Account</p>
        </div>
        <img src={userImage} alt="User Avatar" className="user-profile" />
      </div>
    </section>
  );
}

export default WelcomeBanner;
