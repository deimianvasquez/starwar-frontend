import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand">Navbar</a>
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {`Favotites ${store.favorites.length}`}
          </button>
          <ul
            className="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdownMenuButton1"
          >
            {store.favorites.length <= 0 ? (
              <li>
                <a className="dropdown-item" href="#">
                  Empty
                </a>
              </li>
            ) : (
              store.favorites.map((item) => {
                return (
                  <li key={item._id}>
                    <a className="dropdown-item" href="#">
                      {item.properties.name}
                    </a>
                  </li>
                );
              })
            )}
            {/* <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
