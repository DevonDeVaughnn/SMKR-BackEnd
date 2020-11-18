import React from "react";
import axios from "axios";

function App() {
  const [state, setState] = React.useState({
    strains: [],
  });

  React.useEffect(() => {
    const getSTRAIN = async () => {
      const API_KEY = "mwfjhhH";
      const BASE_URL = "http://strainapi.evanbusse.com/" + API_KEY;
      const SEARCH_URL = BASE_URL + "/strains/search/all";
      try {
        const { data: strains } = await axios.get(SEARCH_URL);
        setState((state) => ({
          ...state,
          strains: Object.entries(strains).map(([name, obj]) => ({
            ...obj,
            name,
          })),
        }));
      } catch (error) {
        console.log(error);
      }
    };
    getSTRAIN();
  }, []);

  console.log(state.strains);

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Race</td>
          <td>Flavors</td>
          <td>Positive Effects</td>
          <td>Negative Effects</td>
          <td>Medical Effect</td>
        </tr>
      </thead>
      <tbody>
        {state.strains.map((s, i) => (
          <tr key={i}>
            <td>{s.name}</td>
            <td>{s.race}</td>
            <td>{s.flavors}</td>
            <td>{s.effects.positive}</td>
            <td>{s.effects.negative}</td>
            <td>{s.effects.medical}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default App;
