import { useState } from "react";
import treatments from "./data/treatments.js";
import FilterControl from "./components/FilterControl.jsx";
import TreatmentList from "./components/TreatmentList.jsx";
import TreatmentForm from "./components/TreatmentForm.jsx";

function App() {
  // this state stores the treatment type chosen in the dropdown
  const [selectedType, setSelectedType] = useState("All");

  // the treatment types shown in the dropdown
  const types = [
    "Physiotherapy",
    "Medication",
    "Surgery",
    "Counselling",
    "Radiotherapy",
  ];

  // filter the treatments by the selected type
  let filteredTreatments = treatments;
  if (selectedType !== "All") {
    filteredTreatments = treatments.filter(
      (treatment) => treatment.treatmentType === selectedType
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1>PTMI</h1>
        <p>Patient Treatment Management Interface</p>
      </header>

      <main className="layout">
        <section className="panel records">
          <h2>Treatment Records</h2>

          <FilterControl
            types={types}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />

          <p className="count">
            Showing {filteredTreatments.length} of {treatments.length} treatments
          </p>

          <TreatmentList treatments={filteredTreatments} />
        </section>

        <TreatmentForm />
      </main>

      <footer className="footer">
        Mobile Web Application Development - Assessment 1
      </footer>
    </div>
  );
}

export default App;
