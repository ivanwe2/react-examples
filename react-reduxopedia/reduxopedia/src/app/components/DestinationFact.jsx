import React from "react";
import { useSelector } from "react-redux";

function DestinationFact() {
  const selectedDestination = useSelector(
    (state) => state.destinationStore.destinationSelected
  );

  if (selectedDestination == undefined){
    return <div className="text-center pt-4 text-warning">Select a destination</div>;
  }
  else{
    return (
    <div className="text-center text-white pt-4 p-3 m-3">
     <h4 className="text-success">{selectedDestination.name}</h4>
     Days Recommended: {selectedDestination.days} <br/>
     Fun Fact: {selectedDestination.fact}
        </div>);
  }
}

export default DestinationFact;
