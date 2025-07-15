import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar, FlatList, TouchableOpacity } from "react-native";
import { Text, ListItem } from "@rneui/themed";
import Spacer from "../components/Spacer";
import { useFocusEffect } from "@react-navigation/native";
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  console.log(JSON.stringify(state, null, 2));

  useFocusEffect(
    React.useCallback(() => {
      fetchTracks();
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <Spacer>
        <Text h2>This is the TrackListScreen</Text>
        <Spacer />
        <FlatList
          data={state}
          keyExtractor={item => item._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity>
                <ListItem>
                  <ListItem.Title>{item.name}</ListItem.Title>
                  <ListItem.Chevron />
                </ListItem>
              </TouchableOpacity>
            );
          }}
        />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});

export default TrackListScreen;