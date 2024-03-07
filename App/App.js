import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Button,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { Audio } from "expo-av";
import StartScreen from "./components/StartScreen";
import HomeScreen from "./components/HomeScreen";
import PersonalInfoScreen from "./components/PersonalInfoScreen.js";

const Stack = createStackNavigator();

// const StartScreen = ({ navigation }) => {
//   const handleStartButtonPress = () => {
//     console.log("Starting App Now");
//     // Add navigation logic here to switch to a new screen
//     navigation.navigate("Home"); // Replace 'NewScreen' with the name of your new screen
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.text}>EZ-Duz-It</Text>
//       <Image source={require("./assets/Logo0.1.png")} style={styles.photo} />
//       <StatusBar style="auto" />
//       <TouchableHighlight
//         style={styles.button}
//         onPress={handleStartButtonPress}
//       >
//         <Text style={styles.buttonText}>Tocar Aqui</Text>
//       </TouchableHighlight>
//     </SafeAreaView>
//   );
// };

// const HomeScreen = ({ navigation }) => {
//   const handlePhysicalTherapyStartButton = () => {
//     console.log("Navigate to PT Home");
//   };
//   const handleSpeechTherapyStartButton = () => {
//     console.log("Navigate to Speech Home");
//   };
//   const handleReminderTherapyStartButton = () => {
//     console.log("Navigate to Reminders Home");
//   };
//   const handlePersonalInfoStartButton = () => {
//     console.log("Navigate to Personal Info Home");
//     navigation.navigate("PersonalInfoHome");
//   };
//   const desiredAudioData = audioData.find((data) => data.id === 1);
//   // Add content for the new screen here
//   return (
//     <View style={homeStyles.vbox}>
//       <View style={homeStyles.hbox}>
//         <Image
//           source={require("./assets/PT_Icon.png")}
//           style={homeStyles.photo}
//         />
//         <View style={homeStyles.buttonContainer}>
//           <TouchableHighlight
//             style={homeStyles.button}
//             onPress={handlePhysicalTherapyStartButton}
//           >
//             <Text style={homeStyles.buttonText}>Tocar Aqui</Text>
//           </TouchableHighlight>
//         </View>
//       </View>
//       <View style={homeStyles.hbox}>
//         <Image
//           source={require("./assets/Speech_Icon.png")}
//           style={homeStyles.photo}
//         />
//         <View style={homeStyles.buttonContainer}>
//           <TouchableHighlight
//             style={homeStyles.button}
//             onPress={handleSpeechTherapyStartButton}
//           >
//             <Text style={homeStyles.buttonText}>Tocar Aqui</Text>
//           </TouchableHighlight>
//         </View>
//       </View>
//       <View style={homeStyles.hbox}>
//         <Image
//           source={require("./assets/Reminder_Icon.png")}
//           style={homeStyles.photo}
//         />
//         <View style={homeStyles.buttonContainer}>
//           <TouchableHighlight
//             style={homeStyles.button}
//             onPress={handleReminderTherapyStartButton}
//           >
//             <Text style={homeStyles.buttonText}>Tocar Aqui</Text>
//           </TouchableHighlight>
//         </View>
//       </View>
//       <View style={homeStyles.hbox}>
//         {desiredAudioData && (
//           <AudioPlayer
//             key={desiredAudioData.id}
//             audioUri={desiredAudioData.audio}
//             imageSource={desiredAudioData.image}
//           >
//             {" "}
//           </AudioPlayer>
//         )}
//         <View style={homeStyles.buttonContainer}>
//           <TouchableHighlight
//             style={homeStyles.button}
//             onPress={handlePersonalInfoStartButton}
//           >
//             <Text style={homeStyles.buttonText}>Tocar Aqui</Text>
//           </TouchableHighlight>
//         </View>
//       </View>
//     </View>
//   );
// };

// const PersonalInfoScreen = () => {
//   // Add content for the new screen here
//   return (
//     <View style={homeStyles.vbox}>
//       <Text>Hello</Text>
//     </View>
//   );
// };

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="PersonalInfoHome" component={PersonalInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "skyblue",
//     alignItems: "center",
//     justifyContent: "flex-start",
//   },
//   text: {
//     marginTop: 40,
//     fontSize: 80, // Set the desired font size
//   },
//   photo: {
//     marginTop: 40,
//     width: 300, // Set the desired width
//     height: 300, // Set the desired height
//     resizeMode: "contain", // You can adjust the resizeMode based on your preference
//   },
//   buttonContainer: {
//     marginTop: 60,
//   },
//   button: {
//     backgroundColor: "dodgerblue",
//     borderRadius: 5,
//     padding: 20,
//   },
//   buttonText: {
//     color: "black",
//     fontSize: 50,
//     textAlign: "center",
//   },
//   hbox: {
//     flexDirection: "row", // Set to 'row' for horizontal arrangement
//     justifyContent: "center", // You can adjust this based on your layout needs
//     alignItems: "center", // You can adjust this based on your layout needs
//     borderWidth: 1, // Optional: Add border for visualization
//     borderColor: "black", // Optional: Border color
//     padding: 50, // Optional: Add padding for spacing
//   },
// });

// const homeStyles = StyleSheet.create({
//   vbox: {
//     flex: 1,
//     backgroundColor: "skyblue",
//     alignItems: "center",
//     justifyContent: "flex-start",
//   },
//   text: {
//     marginTop: 40,
//     fontSize: 80, // Set the desired font size
//   },
//   photo: {
//     marginRight: 10,
//     width: 150, // Set the desired width
//     height: 150, // Set the desired height
//     resizeMode: "contain", // You can adjust the resizeMode based on your preference
//   },
//   hbox: {
//     flex: 1,
//     flexDirection: "row", // Set to 'row' for horizontal arrangement
//     justifyContent: "center", // You can adjust this based on your layout needs
//     alignItems: "center", // You can adjust this based on your layout needs
//     borderWidth: 3, // Optional: Add border for visualization
//     borderColor: "black", // Optional: Border color
//     padding: 10,
//   },
//   buttonContainer: {
//     marginLeft: 10,
//   },
//   button: {
//     backgroundColor: "dodgerblue",
//     borderRadius: 5,
//     padding: 20,
//   },
//   buttonText: {
//     color: "black",
//     fontSize: 35,
//     textAlign: "center",
//   },
// });

// const AudioPlayer = ({ audioUri, imageSource }) => {
//   const [sound, setSound] = useState();

//   const playSound = async () => {
//     console.log("Audio URI: ", audioUri);
//     try {
//       const { sound } = await Audio.Sound.createAsync(
//         { uri: audioUri },
//         { shouldPlay: true }
//       );
//       setSound(sound);
//     } catch (error) {
//       console.error("Error loading audio", error);
//     }
//   };

//   useEffect(() => {
//     return async () => {
//       // Clean up the audio instance when the component unmounts
//       if (sound) {
//         try {
//           await sound.unloadAsync();
//         } catch (error) {
//           console.error("Error unloading audio:", error);
//         }
//       }
//     };
//   }, [sound]);

//   return (
//     <TouchableOpacity onPress={playSound}>
//       <Image source={imageSource} style={{ width: 150, height: 150 }} />
//     </TouchableOpacity>
//   );
// };

// const audioData = [
//   {
//     id: 1,
//     image: require("./assets/Personal_Info_Icon.png"),
//     audio: "./assets/audio.mp3",
//   },
//   // Add more objects for additional images and sounds
// ];
