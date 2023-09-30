import { GoogleMap, LoadScript } from "@react-google-maps/api";
import React, { useEffect } from "react";

const Map = () => {
  useEffect(() => {
    const fenway = { lat: 42.345573, lng: -71.098326 };

    // Ensure the DOM is ready before accessing the elements
    const mapElement = document.getElementById("map");
    const panoElement = document.getElementById("pano");

    if (mapElement && panoElement) {
      const map = new window.google.maps.Map(mapElement, {
        center: fenway,
        zoom: 14,
      });

      const panorama = new window.google.maps.StreetViewPanorama(panoElement, {
        position: fenway,
        pov: {
          heading: 34,
          pitch: 10,
        },
      });

      map.setStreetView(panorama);
    }
  }, []);

  return (
    <>
      <div id="map" style={{ width: "100%", height: "400px" }}></div>
      <div id="pano" style={{ width: "100%", height: "200px" }}></div>
    </>
  );
};

export default Map;
