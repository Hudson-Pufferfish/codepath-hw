import React from "react";
import { useLocation } from "react-router-dom";
import "./CatItem.css";

const CatItem = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const name = query.get("name");
  const width = query.get("width");
  const height = query.get("height");
  const url = query.get("url");

  return (
    <div className="container">
      <h2 className="title">Spy Name: {name}</h2>
      <p className="info">Width: {width}</p>
      <p className="info">Height: {height}</p>
      <img src={url} alt={name} className="image" />
    </div>
  );
};

export default CatItem;
