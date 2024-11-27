import React from "react";
import { useGetAllDestinationsQuery } from "../api/destinationApi";
import { useDeleteDestinationMutation } from "../api/destinationApi";
import Destination from "./Destination";

function DestinationList() {
  const { data, isLoading, isSuccess, isError, error } =
    useGetAllDestinationsQuery();

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = data.map((destination) => {
      return (
        <Destination
          destination={destination}
          key={destination.id}
        ></Destination>
      );
    });
  }
  return <div className="pt-3">{content}</div>;
}

export default DestinationList;
