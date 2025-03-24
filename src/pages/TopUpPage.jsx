import NavigationBar from "../components/NavigationBar";
import "../style/TopUpPage.css";
import PaymentSourceDropdown from "../components/SelectOptionBox";
import AmountField from "../components/AmountField";
import TransactionNote from "../components/TextNoteField";
import ActionButton from "../components/ActionButton";

function TopUpPage() {
  return (
    <>
      <NavigationBar />
      <div className="topup-wrapper">
        <div className="topup-box">
          <h1 className="topup-title">Top Up</h1>
          <div className="topup-box">
            <AmountField
              label="Nominal"
              value="IDR 150.000,00"
              balance="IDR 10.000.000"
            />
            <PaymentSourceDropdown label="Sumber Dana" value="Kartu Kredit" />
            <TransactionNote />
            <ActionButton text="Tambah Saldo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TopUpPage;
