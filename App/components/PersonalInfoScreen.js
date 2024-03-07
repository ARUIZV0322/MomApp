import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PersonalInfoScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Load stored data when the component mounts
    loadPersonalInfo();
  }, []);

  const savePersonalInfo = async () => {
    try {
      await AsyncStorage.setItem("name", name);
      await AsyncStorage.setItem("email", email);
      console.log("Personal information saved successfully!");
    } catch (error) {
      console.error("Error saving personal information:", error);
    }
  };

  const loadPersonalInfo = async () => {
    try {
      const storedName = await AsyncStorage.getItem("name");
      const storedEmail = await AsyncStorage.getItem("email");

      if (storedName !== null && storedEmail !== null) {
        setName(storedName);
        setEmail(storedEmail);
      }
    } catch (error) {
      console.error("Error loading personal information:", error);
    }
  };

  // Add content for the new screen here
  return (
    <View style={styles.vbox}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TouchableHighlight onPress={savePersonalInfo} style={styles.button}>
        <Text style={styles.buttonText}>Guardar Informacion Personal</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  vbox: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    width: 300, // Set the desired width
    height: 50, // Set the desired height
    fontSize: 20, // Set the desired font size
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    margin: 10,
  },
  button: {
    marginTop: 30,
    backgroundColor: "dodgerblue",
    borderRadius: 5,
    padding: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 25,
    textAlign: "center",
  },
});

export default PersonalInfoScreen;
