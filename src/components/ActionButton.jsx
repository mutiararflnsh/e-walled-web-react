import "../style/components/ActionButton.css";

function ActionButton({ label, handleClick }) {
  return (
    <button className="main-action-btn" onClick={handleClick}>
      {label}
    </button>
  );
}

export default ActionButton;
