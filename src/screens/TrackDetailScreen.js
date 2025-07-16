import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Spacer from "../components/Spacer";

const TrackDetailScreen = ({ route }) => {
  const { _id } = route.params;

  return (
    <View>
      <Spacer>
        <Text>This is the TrackDetailScreen</Text>
        <Text>{_id}</Text>
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default TrackDetailScreen;