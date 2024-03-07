import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { Audio } from "expo-av";

const HomeScreen = ({ navigation }) => {
  const audioData = [
    {
      id: 1,
      image: require("/Users/adria/OneDrive/Desktop/React Native App/MomApp/App/assets/Personal_Info_Icon.png"),
      audio:
        "/Users/adria/OneDrive/Desktop/React Native App/MomApp/App/assets/audio.mp3",
    },
  ];
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
    navigation.navigate("PersonalInfoHome");
  };

  const desiredAudioData = audioData.find((data) => data.id === 1);

  return (
    <View style={homeStyles.vbox}>
      <View style={homeStyles.hbox}>
        <Image
          source={require("/Users/adria/OneDrive/Desktop/React Native App/MomApp/App/assets/PT_Icon.png")}
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
          source={require("/Users/adria/OneDrive/Desktop/React Native App/MomApp/App/assets/Speech_Icon.png")}
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
          source={require("/Users/adria/OneDrive/Desktop/React Native App/MomApp/App/assets/Reminder_Icon.png")}
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
        {desiredAudioData && (
          <AudioPlayer
            key={desiredAudioData.id}
            audioUri={desiredAudioData.audio}
            imageSource={desiredAudioData.image}
          >
            {" "}
          </AudioPlayer>
        )}
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

const AudioPlayer = ({ audioUri, imageSource }) => {
  const [sound, setSound] = useState();

  const playSound = async () => {
    console.log("Audio URI: ", audioUri);
    try {
      const { sound } = await Audio.Sound.createAsync(
        { uri: audioUri },
        { shouldPlay: true }
      );
      setSound(sound);
    } catch (error) {
      console.error("Error loading audio", error);
    }
  };

  useEffect(() => {
    return async () => {
      // Clean up the audio instance when the component unmounts
      if (sound) {
        try {
          await sound.unloadAsync();
        } catch (error) {
          console.error("Error unloading audio:", error);
        }
      }
    };
  }, [sound]);

  return (
    <TouchableOpacity onPress={playSound}>
      <Image source={imageSource} style={{ width: 150, height: 150 }} />
    </TouchableOpacity>
  );
};

export default HomeScreen;
