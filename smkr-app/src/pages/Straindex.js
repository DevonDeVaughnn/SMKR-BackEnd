import React from "react";

import axios from "axios";

//extracting the name from the key

function SearchStrain() {
  const [strain, setStrain] = React.useState({
    strains: [],
  });
  const [strainIndex, setStrainIndex] = React.useState(0);
  const getSTRAIN = async () => {
    const API_KEY = "mwfjhhH";
    const BASE_URL = "http://strainapi.evanbusse.com/" + API_KEY;
    const SEARCH_URL = BASE_URL + "/strains/search/all";
    try {
      const { data: strains } = await axios.get(SEARCH_URL);
      setStrain((strain) => ({
        ...strain,
        strains: Object.entries(strains).map(([name, obj]) => ({
          ...obj,
          name,
        })),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getSTRAIN();
  }, []);
  const handleButtonClick = (num) => {
    if (strainIndex === 0 && num === -1) {
      return setStrainIndex(strain.strains.length - 1);
    }
    if (strainIndex === strain.strains.length - 1 && num === 1) {
      return setStrainIndex(0);
    }
    if (num === 1) {
      return setStrainIndex((prevIndex) => prevIndex + 1);
    } else {
      return setStrainIndex((prevIndex) => prevIndex - 1);
    }
  };
  const currStrain = strain.strains[strainIndex];
  console.log(strain.strains);

  return (
    <>
      {strain.strains.length > 0 ? (
        <article className="card">
          <img
            className="cardImgTop"
            src="https://picsum.photos/200"
            alt="Card image cap"
          ></img>
          <div className="cardBody">
            <h5 className="cardTitle">{currStrain.name}</h5>
            {currStrain.effects.positive.map((effect) => (
              <span className="cardText">{effect}</span>
            ))}
          </div>
          <ul className="listGroup listGroupFlush">
            <li className="listGroupItem">
              {currStrain.flavors.map((flavor) => (
                <span className="cardText">{flavor}</span>
              ))}
            </li>
            <li className="listGroupItem">
              {currStrain.effects.positive.map((effect) => (
                <span className="cardText">{effect}</span>
              ))}
            </li>
            <li className="listGroupItem">
              {currStrain.effects.negative.map((effect) => (
                <span className="cardText">{effect}</span>
              ))}
            </li>
          </ul>
          <div className="cardBody">
            <button
              className="cardLink btn btn-primary"
              onClick={() => handleButtonClick(-1)}
            >
              Prev
            </button>
            <button className="cardLink" onClick={() => handleButtonClick(1)}>
              Next
            </button>
            <button className="cardLink" onClick={() => handleButtonClick(1)}>
              Like
            </button>
            <button className="cardLink" onClick={() => handleButtonClick(1)}>
              Recommend
            </button>
          </div>
        </article>
      ) : null}
    </>
  );
}
export default SearchStrain;

// effects:
// medical: (5) ["Depression", "Insomnia", "Pain", "Stress", "Lack of Appetite"]
// negative: ["Dizzy"]
// positive: (4) ["Relaxed", "Hungry", "Happy", "Sleepy"]
// __proto__: Object
// flavors: Array(3)
// 0: "Earthy"
// 1: "Chemical"
// 2: "Pine"
// length: 3
// __proto__: Array(0)
// id: 1
// name: "Afpak"
// race: "hybrid"
