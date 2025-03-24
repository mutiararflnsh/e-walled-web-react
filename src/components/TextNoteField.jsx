import "../style/components/TextNoteField.css";

function TextNoteField({ inputPlaceholder }) {
  return (
    <div className="text-note-container">
      <label className="text-note-label">Notes</label>
      <input
        type="text"
        placeholder={inputPlaceholder}
        className="text-note-input"
      />
    </div>
  );
}

export default TextNoteField;
