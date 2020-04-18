import React from "react";

const Figures = ({ confirmed, recovered, deaths }) => {
  return (
    <div className="figures__component text-font__wide">
      <div className="figures__word">
        {confirmed}
        <span className="figures__word text-bold">Confirmed</span>
      </div>
      <div className="figures__word">
        {recovered}
        <span className="figures__word text-green text-bold">Recovered</span>
      </div>
      <div className="figures__word">
        {deaths}
        <span className="figures__word text-red text-bold">Deaths</span>
      </div>
    </div>
  );
};

export default Figures;

// TODO: add comma in number
