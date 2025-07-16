import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";

const TrackDetailScreen = ({ route }) => {
  const { state } = useContext(TrackContext)
  const { _id } = route.params;

  const track = state.find(t => t._id === _id)
  const initialCoords = track.locations[0].coords;

  return (
    <View>
      <Spacer>
        <MapView
          style={styles.map}
          initialRegion={{
            longitudeDelta: 0.01,
            latitudeDelta: 0.01,
            ...initialCoords
          }}
        >
          <Polyline coordinates={track.locations.map(l => l.coords)} />
        </MapView>
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default TrackDetailScreen;