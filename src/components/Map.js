import React, { useContext } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const { state: { currentLocation } } = useContext(LocationContext);

  if (!currentLocation)
    return <ActivityIndicator size="large" style={{ height: 300 }} />;

  console.log(JSON.stringify(currentLocation, null, 2));

  return <MapView
    style={styles.map}
    initialRegion={{
      ...currentLocation.coords,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    }}
  >
    <Circle
      center={currentLocation.coords}
      radius={10}
      strokeColor="rgba(0, 51, 110, 1.0)"
      fillColor="rgba(0, 118, 255, 0.5)"
    />
  </MapView>
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;