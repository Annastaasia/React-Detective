import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import style from "./map.module.scss";
import { Link } from "react-router-dom";
import Vectorright from "../../assets/svg/Vectorright.jsx";

export default function Map() {
  const mapContainerStyle = {
    width: "100%",
    height: "600px",
    saturation: -100,
  };

  const center = {
    lat: -34.397,
    lng: 150.644,
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.blok}>
          <h3 className={style.h3}>Где мы находимся?</h3>
          <Link to="/contacts">
            <button type="submit" className={style.button}>
              Все контакты
              <div className={style.vector}>
                <Vectorright />
              </div>
            </button>
          </Link>
        </div>

        <LoadScript googleMapsApiKey="YOUR_API_KEY">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={8}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
}
