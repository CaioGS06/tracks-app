import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NavLink = ({ grayText, linkText, routeName }) => {
  const navigation = useNavigation();

  return (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.signInText}>{grayText}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Text style={[styles.signInText, styles.signInLink]}>{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  signInText: {
    color: "gray",
    fontSize: 16,
    padding: 2
  },
  signInLink: {
    color: "#2089DC",
    fontWeight: "bold"
  }
});

export default NavLink;