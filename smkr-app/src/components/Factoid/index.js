import React from "react";

const facts = require("../Api/Strains/weedFacts.json");
function Factoids() {
  const randomFactoid = facts.facts;
  const displayRandomFact =
    randomFactoid[Math.floor(Math.random() * randomFactoid.length)];
  console.log(displayRandomFact);
  return (
    <div class="media">
      <div class="media-body">
        <h5 class="mt-0">Random Fact</h5>
        <h6>{displayRandomFact}</h6>
      </div>
    </div>
  );
}
export default Factoids;
