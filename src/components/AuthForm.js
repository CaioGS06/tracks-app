import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "@rneui/themed";
import Spacer from "./Spacer";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Text h3 style={{ textAlign: "center" }}>{headerText}</Text>
      <Spacer />
      <Spacer />
      <Spacer>
        <Input
          label="Email"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />
        <Input
          label="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      </Spacer>
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
      <Spacer />
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    textAlign: "center",
    color: "red"
  }
});

export default AuthForm;