import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
// import { TextInput } from 'react-native-gesture-handler'

const signin = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{ gap: 10 }}>
        <View>
          <Text style={{ fontWeight: 500 }}>EMAIL </Text>
          <TextInput placeholder="pgnotes@gmail.com" style={styles.inputBox} />
        </View>
        <View>
          <Text style={{ fontWeight: 500 }}>PASSWORD </Text>
          <TextInput
            placeholder="******"
            secureTextEntry={true}
            style={styles.inputBox}
          />
        </View>

        <Link href="/">
          <Text style={{ fontWeight: 500, color: "blue" }}>
            forgot password?
          </Text>
        </Link>
        <TouchableOpacity>
          <Text style={styles.button}>Sign-in</Text>
        </TouchableOpacity>

        <Text>
          Don't have account?{" "}
          <Link href="/signup">
            <Text style={{ fontWeight: 500, color: "blue" }}>
              Create Account
            </Text>
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default signin;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: "green",
    color: "white",
    padding: 10,
    textAlign: "center",
    marginTop: 10,
    borderRadius: 5,
  },
});
