import TreatmentCard from "./TreatmentCard.jsx";

// Shows all the treatments it receives in props.
// .map() creates one TreatmentCard for each treatment.
function TreatmentList(props) {
  // if the filter finds nothing
  if (props.treatments.length === 0) {
    return <p className="empty">No treatments found for this type.</p>;
  }

  return (
    <div className="grid">
      {props.treatments.map((treatment) => (
        <TreatmentCard
          key={treatment.treatmentId}
          treatmentId={treatment.treatmentId}
          treatmentType={treatment.treatmentType}
          treatmentName={treatment.treatmentName}
          startDate={treatment.startDate}
        />
      ))}
    </div>
  );
}

export default TreatmentList;
