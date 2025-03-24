import dropdownIcon from "../assets/dropdown.png";
import "../style/components/SelectOptionBox.css";

function SelectOptionBox({ fieldLabel, selectedOption }) {
  return (
    <div className="select-box">
      <div className="select-label">{fieldLabel}</div>
      <div className="select-value">
        {selectedOption}
        <img src={dropdownIcon} className="select-icon" alt="Dropdown Icon" />
      </div>
    </div>
  );
}

export default SelectOptionBox;
