import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  Image,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

const Stack = createStackNavigator();

const StartScreen = ({ navigation }) => {
  const handleStartButtonPress = () => {
    console.log("Starting App Now");
    // Add navigation logic here to switch to a new screen
    navigation.navigate("Home"); // Replace 'NewScreen' with the name of your new screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>EZ-Duz-It</Text>
      <Image source={require("./assets/Logo0.1.png")} style={styles.photo} />
      <StatusBar style="auto" />
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.button}
          onPress={handleStartButtonPress}
        >
          <Text style={styles.buttonText}>Tocar Aqui</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

const HomeScreen = () => {
  const handlePhysicalTherapyStartButton = () => {
    console.log("Navigate to PT Home");
  };
  const handleSpeechTherapyStartButton = () => {
    console.log("Navigate to Speech Home");
  };
  const handleReminderTherapyStartButton = () => {
    console.log("Navigate to Reminders Home");
  };
  const handlePersonalInfoStartButton = () => {
    console.log("Navigate to Personal Info Home");
  };
  // Add content for the new screen here
  return (
    <View style={homeStyles.vbox}>
      <View style={homeStyles.hbox}>
        <Image
          source={require("./assets/PT_Icon.png")}
          style={homeStyles.photo}
        />
        <View style={homeStyles.buttonContainer}>
          <TouchableHighlight
            style={homeStyles.button}
            onPress={handlePhysicalTherapyStartButton}
          >
            <Text style={homeStyles.buttonText}>Tocar Aqui</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={homeStyles.hbox}>
        <Image
          source={require("./assets/Speech_Icon.png")}
          style={homeStyles.photo}
        />
        <View style={homeStyles.buttonContainer}>
          <TouchableHighlight
            style={homeStyles.button}
            onPress={handleSpeechTherapyStartButton}
          >
            <Text style={homeStyles.buttonText}>Tocar Aqui</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={homeStyles.hbox}>
        <Image
          source={require("./assets/Reminder_Icon.png")}
          style={homeStyles.photo}
        />
        <View style={homeStyles.buttonContainer}>
          <TouchableHighlight
            style={homeStyles.button}
            onPress={handleReminderTherapyStartButton}
          >
            <Text style={homeStyles.buttonText}>Tocar Aqui</Text>
          </TouchableHighlight>
        </View>
      </View>
      <View style={homeStyles.hbox}>
        <Image
          source={require("./assets/Personal_Info_Icon.png")}
          style={homeStyles.photo}
        />
        <View style={homeStyles.buttonContainer}>
          <TouchableHighlight
            style={homeStyles.button}
            onPress={handlePersonalInfoStartButton}
          >
            <Text style={homeStyles.buttonText}>Tocar Aqui</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
  },
  text: {
    marginTop: 40,
    fontSize: 80, // Set the desired font size
  },
  photo: {
    marginTop: 40,
    width: 300, // Set the desired width
    height: 300, // Set the desired height
    resizeMode: "contain", // You can adjust the resizeMode based on your preference
  },
  buttonContainer: {
    marginTop: 60,
  },
  button: {
    backgroundColor: "dodgerblue",
    borderRadius: 5,
    padding: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 50,
    textAlign: "center",
  },
  hbox: {
    flexDirection: "row", // Set to 'row' for horizontal arrangement
    justifyContent: "center", // You can adjust this based on your layout needs
    alignItems: "center", // You can adjust this based on your layout needs
    borderWidth: 1, // Optional: Add border for visualization
    borderColor: "black", // Optional: Border color
    padding: 50, // Optional: Add padding for spacing
  },
});

const homeStyles = StyleSheet.create({
  vbox: {
    flex: 1,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text: {
    marginTop: 40,
    fontSize: 80, // Set the desired font size
  },
  photo: {
    marginRight: 10,
    width: 150, // Set the desired width
    height: 150, // Set the desired height
    resizeMode: "contain", // You can adjust the resizeMode based on your preference
  },
  hbox: {
    flex: 1,
    flexDirection: "row", // Set to 'row' for horizontal arrangement
    justifyContent: "center", // You can adjust this based on your layout needs
    alignItems: "center", // You can adjust this based on your layout needs
    borderWidth: 3, // Optional: Add border for visualization
    borderColor: "black", // Optional: Border color
    padding: 10,
  },
  buttonContainer: {
    marginLeft: 10,
  },
  button: {
    backgroundColor: "dodgerblue",
    borderRadius: 5,
    padding: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 35,
    textAlign: "center",
  },
});
