import "../_mockLocation";

import React, { useContext, useCallback } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";
import { useIsFocused } from "@react-navigation/native";
import Spacer from "../components/Spacer";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";

const TrackCreateScreen = () => {
  const isFocused = useIsFocused();
  const { state: { recording }, addLocation } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView style={styles.container}>
      <Spacer>
        <Map />
        <Text>{err ? "Please enable location services." : ""}</Text>
        <Spacer />
        <TrackForm />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default TrackCreateScreen;