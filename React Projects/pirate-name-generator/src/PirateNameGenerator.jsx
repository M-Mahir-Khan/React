import React, { useState } from "react";

const PirateNameGenerator = () => {
  const pirateAdjectives = ["Fearless", "Salty", "Rogue", "Dreadful", "Sneaky"];
  const pirateTitles = ["Captain", "Scallywag", "Swashbuckler", "Buccaneer", "Raider"];

  const [pirateName, setPirateName] = useState("Your Pirate Name Will Appear Here!");

  const generateRandomName = () => {
    const randomAdjective = pirateAdjectives[Math.floor(Math.random() * pirateAdjectives.length)];
    const randomTitle = pirateTitles[Math.floor(Math.random() * pirateTitles.length)];
    setPirateName(`${randomAdjective} ${randomTitle}`);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>Pirate Name Generator</h1>
      <p>{pirateName}</p>
      <button onClick={generateRandomName}>Generate Name</button>
    </div>
  );
};

export default PirateNameGenerator;
