import React from "react";
import { useParams } from "react-router-dom";

function CryptoDetail() {
  const { cryptoSymbol, id } = useParams();
  return (
    <div>
      CryptoDetail
      <p>Symbol: {cryptoSymbol}</p>
      <p>Id: {id}</p>
    </div>
  );
}

export default CryptoDetail;
