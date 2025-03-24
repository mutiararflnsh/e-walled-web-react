import NavigationBar from "../components/NavigationBar";
import "../style/HomePage.css";
import userAvatar from "../assets/bubu.png";
import TransactionHistory from "../components/TransactionHistory";
import BalanceSummaryCard from "../components/BalanceSummaryCard";
import WelcomeBanner from "../components/WelcomeBanner";

function HomePage() {
  return (
    <>
      <NavigationBar />
      <div className="dashboard-container">
        <WelcomeBanner avatar={userAvatar} />
        <BalanceSummaryCard />
        <TransactionHistory />
      </div>
    </>
  );
}

export default HomePage;
