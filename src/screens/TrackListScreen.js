import React from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import { Text, Button } from "@rneui/themed";
import Spacer from "../components/Spacer";

const TrackListScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Spacer>
        <Text h2>This is the TrackListScreen</Text>
        <Spacer />
        <Button title="Go To Detail" onPress={() => navigation.navigate("TrackDetail")} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});

export default TrackListScreen;