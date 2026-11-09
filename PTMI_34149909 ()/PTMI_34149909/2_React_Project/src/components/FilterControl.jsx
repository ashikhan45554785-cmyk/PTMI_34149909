// Dropdown to filter the treatments by type.
// It gets the types, the selected type and the setter function from App (props).
function FilterControl(props) {
  // runs when the user picks a different option
  function handleChange(event) {
    props.setSelectedType(event.target.value);
  }

  return (
    <div className="filter">
      <label htmlFor="typeFilter">Filter by treatment type</label>
      <select
        id="typeFilter"
        value={props.selectedType}
        onChange={handleChange}
      >
        <option value="All">All types</option>
        {props.types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterControl;
