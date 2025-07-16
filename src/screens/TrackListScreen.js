import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Text, ListItem } from "@rneui/themed";
import Spacer from "../components/Spacer";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = () => {
  const { state, fetchTracks } = useContext(TrackContext);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      fetchTracks();
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <Spacer>
        <FlatList
          data={state}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("TrackDetail", {
                    _id: item._id,
                    name: item.name
                  })
                }
              >
                <ListItem>
                  <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                  </ListItem.Content>
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
    flex: 1
  },
});

export default TrackListScreen;