import React from "react";
import data from "../json/data.json";

class Exo8 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      const jokes = data.map((joke) => (
        <div key={joke.id}>
          <p>{joke.setup}</p>
          <p>{joke.punchline}</p>
        </div>
      ));
  
      return <div><p>Rendering JSON</p>{jokes}</div>;
    }
  }

export default Exo8