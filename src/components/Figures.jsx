import React from "react";

const Figures = ({ confirmed, recovered, deaths }) => {
  return (
    <div className="figures__component">
      <div className="figures__card">Confirmed: {confirmed}</div>
      <div className="figures__card text-green">Recovered: {recovered}</div>
      <div className="figures__card text-red">Deaths: {deaths}</div>
    </div>
  );
};

export default Figures;
