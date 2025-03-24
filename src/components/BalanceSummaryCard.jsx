import viewIcon from "../assets/view.png";
import addFundsIcon from "../assets/plus.png";
import sendMoneyIcon from "../assets/transfer.png";

function BalanceSummaryCard() {
  return (
    <section className="account-card">
      <div className="account-overview">
        <h4>Account Number</h4>
        <h3>126032021</h3>
      </div>
      <div className="balance-button">
        <h4>Available Balance</h4>
        <div className="balance-action">
          <div className="balance-info">
            <h3>Rp 12.000.000,00</h3>
            <img src={viewIcon} alt="View Balance" />
          </div>
          <div className="balance-actions">
            <button>
              <img src={addFundsIcon} alt="Add Funds" />
            </button>
            <button>
              <img src={sendMoneyIcon} alt="Transfer Funds" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BalanceSummaryCard;
