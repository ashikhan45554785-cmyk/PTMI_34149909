// Shows ONE treatment. The data comes from props.
function TreatmentCard(props) {
  return (
    <div className="card">
      <div className="card-top">
        <span className="badge">{props.treatmentType}</span>
        <span className="card-id">{props.treatmentId}</span>
      </div>
      <h3 className="card-title">{props.treatmentName}</h3>
      <p className="card-date">Start Date: {props.startDate}</p>
    </div>
  );
}

export default TreatmentCard;
