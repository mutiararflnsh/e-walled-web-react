import "../style/components/AmountField.css";

function AmountField({ inputLabel, amountValue, currentFunds }) {
  return (
    <div className="currency-input-container">
      <label className="currency-label">{inputLabel}</label>
      <input
        type="text"
        defaultValue={amountValue}
        className="currency-input"
      />
      <p className="funds-info">
        Balance <span>{currentFunds}</span>
      </p>
    </div>
  );
}

export default AmountField;
