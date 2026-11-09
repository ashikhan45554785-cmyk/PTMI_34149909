import { useState } from "react";
import TreatmentCard from "./TreatmentCard.jsx";

// Form where the user types a treatment.
// The treatment is only DISPLAYED, it is NOT added to the treatments list.
function TreatmentForm() {
  // one state for each input box
  const [treatmentId, setTreatmentId] = useState("");
  const [treatmentType, setTreatmentType] = useState("");
  const [treatmentName, setTreatmentName] = useState("");
  const [startDate, setStartDate] = useState("");

  // the treatment to display after clicking the button
  const [shownTreatment, setShownTreatment] = useState(null);

  // error message if something is empty
  const [message, setMessage] = useState("");

  // runs when the "Display Treatment" button is clicked
  function handleDisplay() {
    if (
      treatmentId === "" ||
      treatmentType === "" ||
      treatmentName === "" ||
      startDate === ""
    ) {
      setMessage("Please fill in all four fields before displaying.");
      setShownTreatment(null);
    } else {
      setMessage("");
      setShownTreatment({
        treatmentId: treatmentId,
        treatmentType: treatmentType,
        treatmentName: treatmentName,
        startDate: startDate,
      });
    }
  }

  // runs when the "Clear" button is clicked
  function handleClear() {
    setTreatmentId("");
    setTreatmentType("");
    setTreatmentName("");
    setStartDate("");
    setShownTreatment(null);
    setMessage("");
  }

  return (
    <section className="panel">
      <h2>Enter Treatment</h2>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="treatmentId">Treatment ID</label>
          <input
            id="treatmentId"
            type="text"
            placeholder="e.g. T008"
            value={treatmentId}
            onChange={(event) => setTreatmentId(event.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="treatmentType">Treatment Type</label>
          <input
            id="treatmentType"
            type="text"
            placeholder="e.g. Physiotherapy"
            value={treatmentType}
            onChange={(event) => setTreatmentType(event.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="treatmentName">Treatment Name</label>
          <input
            id="treatmentName"
            type="text"
            placeholder="e.g. Hip Rehabilitation"
            value={treatmentName}
            onChange={(event) => setTreatmentName(event.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="startDate">Start Date</label>
          <input
            id="startDate"
            type="date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
          />
        </div>
      </div>

      {message !== "" && <p className="error">{message}</p>}

      <div className="actions">
        <button className="btn primary" onClick={handleDisplay}>
          Display Treatment
        </button>
        <button className="btn secondary" onClick={handleClear}>
          Clear
        </button>
      </div>

      {shownTreatment !== null && (
        <div className="result">
          <h3>Entered Treatment</h3>
          <TreatmentCard
            treatmentId={shownTreatment.treatmentId}
            treatmentType={shownTreatment.treatmentType}
            treatmentName={shownTreatment.treatmentName}
            startDate={shownTreatment.startDate}
          />
        </div>
      )}
    </section>
  );
}

export default TreatmentForm;
