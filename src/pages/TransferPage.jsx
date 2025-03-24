import "../style/TransferPage.css";
import NavigationBar from "../components/NavigationBar";
import SelectOptionBox from "../components/SelectOptionBox";
import AmountField from "../components/AmountField";
import TextNoteField from "../components/TextNoteField";
import ActionButton from "../components/ActionButton";

function TransferPage() {
  return (
    <>
      <NavigationBar />
      <div className="transfer-wrapper">
        <div className="transfer-content">
          <h1 className="transfer-title">Transfer</h1>
          <div className="transfer-content">
            <SelectOptionBox label="Recipient" value="900782139 (Giz)" />
            <AmountField
              label="Transfer Amount"
              value="IDR 150.000,00"
              balance="IDR 10.000.000"
            />
            <TextNoteField />
            <ActionButton text="Send Money" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TransferPage;
