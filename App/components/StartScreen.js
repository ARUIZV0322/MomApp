import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const StartScreen = ({ navigation }) => {
  const handleStartButtonPress = () => {
    console.log("Starting App Now");
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>EZ-Duz-It</Text>
      <Image
        source={require("/Users/adria/OneDrive/Desktop/React Native App/MomApp/App/assets/Logo0.1.png")}
        style={styles.photo}
      />
      <StatusBar style="auto" />
      <TouchableHighlight
        style={styles.button}
        onPress={handleStartButtonPress}
      >
        <Text style={styles.buttonText}>Toca aqui</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    marginTop: 40,
    fontSize: 80,
  },
  photo: {
    marginTop: 40,
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  button: {
    marginTop: 60,
    backgroundColor: "dodgerblue",
    borderRadius: 5,
    padding: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 50,
    textAlign: "center",
  },
});

export default StartScreen;
