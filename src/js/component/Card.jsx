import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Card = ({ item, nature }) => {
  const { name, gender, hair_color, eye_color, population, terrain, created } =
    item.properties;

  const { store, actions } = useContext(Context);

  return (
    <>
      {nature == "character" ? (
        <div className="card-star">
          <div className="card-image">
            <img src="https://via.placeholder.com/300x200" alt="" />
          </div>
          <div className="header-card">{name}</div>
          <div className="description-card">
            <p>{`Gender: ${gender}`}</p>
            <p>{`Hair Color: ${hair_color}`}</p>
            <p>{`Eye-Color: ${eye_color}`}</p>
          </div>
          <div className="footer-card">
            <button type="button" className="btn btn-outline-primary">
              Learm more!
            </button>
            <button
              type="button"
              className={
                item.like
                  ? "btn btn-outline-secondary"
                  : "btn btn-outline-warning"
              }
              onClick={() => actions.addFavorite(item._id)}
            >
              icon
            </button>
          </div>
        </div>
      ) : nature == "vehicles" ? (
        <div className="card-star">
          <div>
            <img src="https://via.placeholder.com/300x200" alt="" />
          </div>
          <div className="description-card">
            <p>{`Population: ${population}`}</p>
            <p>{`Terrain: ${terrain}`}</p>
          </div>
          <div className="footer-card">
            <button type="button" className="btn btn-outline-primary">
              Learm more!
            </button>
            <button
              type="button"
              className={
                item.like
                  ? "btn btn-outline-secondary"
                  : "btn btn-outline-warning"
              }
              onClick={() => actions.addFavorite(item._id)}
            >
              icon
            </button>
          </div>
        </div>
      ) : nature == "planets" ? (
        <div className="card-star">
          <div>
            <img src="https://via.placeholder.com/300x200" alt="" />
          </div>
          <div className="description-card">
            <p>{`Terrain: ${name}`}</p>
            <p>{`Created: ${created}`}</p>
          </div>
          <div className="footer-card">
            <button type="button" className="btn btn-outline-primary">
              Learm more!
            </button>
            <button
              type="button"
              className={
                item.like
                  ? "btn btn-outline-secondary"
                  : "btn btn-outline-warning"
              }
              onClick={() => actions.addFavorite(item._id)}
            >
              icon
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Card;
