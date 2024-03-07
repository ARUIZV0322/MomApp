import React from "react";
import { StyleSheet, View, Text } from "react-native";

const PersonalInfoScreen = () => {
  // Add content for the new screen here
  return (
    <View style={homeStyles.vbox}>
      <Text>Hello</Text>
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
});

export default PersonalInfoScreen;
