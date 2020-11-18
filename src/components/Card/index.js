import React from "react";
import "../Card/card.css";

import { Col, Info } from "../Grid";
var strains = require("../../components/Api/Strains/strains.json");
function InfoCards() {
  const randomStrain1 = Object.keys(strains)[
    Math.floor(Math.random() * Object.keys(strains).length)
  ];
  const randomStrain2 = Object.keys(strains)[
    Math.floor(Math.random() * Object.keys(strains).length)
  ];
  const randomStrain3 = Object.keys(strains)[
    Math.floor(Math.random() * Object.keys(strains).length)
  ];
  const strainPositiveInfo1 = [
    Object(strains[randomStrain1].effects.positive[0]),
  ];
  const strainPositiveInfo2 = [
    Object(strains[randomStrain2].effects.positive[0]),
  ];
  const strainPositiveInfo3 = [
    Object(strains[randomStrain3].effects.positive[0]),
  ];

  return (
    <Col size="md-12" className="weedCard-flex">
      <Info
        className="card-deck .d-flex justify-content-between"
        style={{
          width: "20rem",
        }}
      >
        <div class="strainInfo ">
          <img
            src="https://picsum.photos/200/"
            class="strainCard"
            alt="Weed Recipe"
          ></img>
          <div class="card-body">
            <h5 class="card-title ">{randomStrain1}</h5>
            <p class="card-text">
              <span className="cardText">{strainPositiveInfo1}</span>
            </p>
            <a class="card-text">
              <small
                class="text-muted"
                href="https://www.cdc.gov/marijuana/health-effects.html"
              >
                Learn more from the CDC
              </small>
            </a>
          </div>
        </div>
        <div class="strainInfo">
          <img
            src="https://picsum.photos/200/"
            class="strainCard"
            alt="Weed Top Liked"
          ></img>
          <div class="card-body">
            <h5 class="card-title">{randomStrain2}</h5>
            <p class="card-text">{strainPositiveInfo2}</p>
            <a
              class="card-text"
              href="https://www.cdc.gov/marijuana/health-effects.html"
            >
              <small class="text-muted">Learn more from the CDC</small>
            </a>
          </div>
        </div>
        <div class="strainInfo">
          <img
            src="https://picsum.photos/200/"
            class="strainCard"
            alt="Weed "
          ></img>
          <div class="card-body">
            <h5 class="card-title">{randomStrain3}</h5>
            <p class="card-text">{strainPositiveInfo3}</p>
            <a
              class="card-text"
              href="https://www.cdc.gov/marijuana/health-effects.html"
            >
              <small class="text-muted">Learn more from the CDC</small>
            </a>
          </div>
        </div>
      </Info>
    </Col>
  );
}
export default InfoCards;
