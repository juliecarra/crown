import React from "react";

const RestaurantGuests = props => {
  const { guests, handleGuests } = props;

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

  const guestOptions = [
    { name: "1", value: 1 },
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "4", value: 4 }
  ];
  return (
    <div className="RestaurantGuests">
      <Select
        selectedValue={guests}
        options={guestOptions}
        onDataChange={handleGuests}
      />
      {/* {guests === 0 ? "" : <span>Reservation for {guests} people</span>} */}
    </div>
  );
};

export default RestaurantGuests;
