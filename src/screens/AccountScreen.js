import React, { useContext } from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";
import { Text, Button } from "@rneui/base";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView style={styles.container}>
      <Spacer>
        <Text h2>This is the AccountScreen</Text>
        <Spacer />
        <Button
          title="Sign Out"
          onPress={signout}
        />
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

export default AccountScreen; 