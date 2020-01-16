import React from "react";

const PeopleSelector = props => {
  const { occupants, handleOccupants } = props;

  const Select = ({ selectedValue, options, onDataChange }) => (
    <select
      onChange={({ target: { value } }) => onDataChange(value)}
      value={selectedValue}
    >
      {options.map(option => (
        <option value={option.value} key={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );

  const occupantOptions = [
    { name: "1", value: 1 },
    { name: "2", value: 2 }
  ];
  return (
    <div className="PeopleSelector">
      <Select
        selectedValue={occupants}
        options={occupantOptions}
        onDataChange={handleOccupants}
      />
      {/* {occupants === 0 ? "" : <span>Reservation for {occupants} people</span>} */}
    </div>
  );
};

export default PeopleSelector;
