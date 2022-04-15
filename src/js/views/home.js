import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

import Header from "../component/Header.jsx";
import Card from "../component/Card.jsx";

export const Home = () => {
  const { store } = useContext(Context);
  const { people, vehicles, planets } = store;

  return (
    <>
      <div className="container mt-5">
        <Header title="Characters" />
        <div className="home-card-list">
          {people.map((item, index) => (
            <Card key={index} item={item} nature="character" />
          ))}
        </div>
      </div>

      <div className="container mt-5">
        <Header title="Vehicles" />
        <div className="home-card-list">
          {planets.map((item, index) => (
            <Card key={index} item={item} nature="vehicles" />
          ))}
        </div>
      </div>

      <div className="container mt-5">
        <Header title="Planets" />
        <div className="home-card-list">
          {vehicles.map((item, index) => (
            <Card key={index} item={item} nature="planets" />
          ))}
        </div>
      </div>
    </>
  );
};
