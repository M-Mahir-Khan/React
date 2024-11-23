import React, { useState } from 'react';

const Seventeen = () => {
  const [selectedColor, setSelectedColor] = useState("#000000");

  function handleChange(e) {
    setSelectedColor(e.target.value);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Color Picker</h1>
      <input type="color" onChange={handleChange} />
      <p>Selected Color: <strong>{selectedColor}</strong></p>
      <div
        style={{
          width: '150px',
          height: '150px',
          backgroundColor: selectedColor,
          margin: '20px auto',
          border: '2px solid #ccc',
          borderRadius: '10px',
        }}
      ></div>
    </div>
  );
};

export default Seventeen;
