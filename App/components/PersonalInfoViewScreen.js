import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PersonalInfoViewScreen = ({ navigation }) => {
  const [loadedData, setLoadedData] = useState({
    keystoredName: "",
    keystoredPhoneNumber: "",
    keystoredBirthMonth: "",
    keystoredBirthDay: "",
    keystoredBirthYear: "",
    keystoredHomeAddress: "",
    keystoredHomeCity: "",
    keystoredHomeState: "",
    keystoredHomeZip: "",
    keystoredNameEmergencyContactName1: "",
    keystoredNameEmergencyContactName2: "",
    keystoredNameEmergencyContactNumber1: "",
    keystoredNameEmergencyContactNumber2: "",
  });

  const fetchDataFromAsyncStorage = async () => {
    try {
      // Retrieve data from AsyncStorage
      const datakeystoredName = await AsyncStorage.getItem("name");
      const datakeystoredPhoneNumber = await AsyncStorage.getItem(
        "phonenumber"
      );
      const datakeystoredBirthMonth = await AsyncStorage.getItem("birthmonth");
      const datakeystoredBirthDay = await AsyncStorage.getItem("birthday");
      const datakeystoredBirthYear = await AsyncStorage.getItem("birthyear");
      const datakeystoredHomeAddress = await AsyncStorage.getItem(
        "homeaddress"
      );
      const datakeystoredHomeCity = await AsyncStorage.getItem("homecity");
      const datakeystoredHomeState = await AsyncStorage.getItem("homestate");
      const datakeystoredHomeZip = await AsyncStorage.getItem("homezip");
      const datakeystoredNameEmergencyContactName1 = await AsyncStorage.getItem(
        "emergencycontactname1"
      );
      const datakeystoredNameEmergencyContactName2 = await AsyncStorage.getItem(
        "emergencycontactname2"
      );
      const datakeystoredNameEmergencyContactNumber1 =
        await AsyncStorage.getItem("emergencycontactnumber1");
      const datakeystoredNameEmergencyContactNumber2 =
        await AsyncStorage.getItem("emergencycontactnumber2");
      // Set the data to the state
      setLoadedData({
        keystoredName: datakeystoredName,
        keystoredPhoneNumber: datakeystoredPhoneNumber,
        keystoredBirthMonth: datakeystoredBirthMonth,
        keystoredBirthDay: datakeystoredBirthDay,
        keystoredBirthYear: datakeystoredBirthYear,
        keystoredHomeAddress: datakeystoredHomeAddress,
        keystoredHomeCity: datakeystoredHomeCity,
        keystoredHomeState: datakeystoredHomeState,
        keystoredHomeZip: datakeystoredHomeZip,
        keystoredNameEmergencyContactName1:
          datakeystoredNameEmergencyContactName1,
        keystoredNameEmergencyContactName2:
          datakeystoredNameEmergencyContactName2,
        keystoredNameEmergencyContactNumber1:
          datakeystoredNameEmergencyContactNumber1,
        keystoredNameEmergencyContactNumber2:
          datakeystoredNameEmergencyContactNumber2,
      });
    } catch (error) {
      console.error("Error fetching data from AsyncStorage:", error);
    }
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchDataFromAsyncStorage();

    // Set up a listener to fetch data when the screen comes into focus
    const unsubscribe = navigation.addListener("focus", () => {
      fetchDataFromAsyncStorage();
    });

    // Clean up the listener when the component is unmounted
    return unsubscribe;
  }, [navigation]);

  const moveToPersonalInfoEditScreen = () => {
    console.log("Navigate to Personal Info Edit");
    navigation.navigate("Informacion Personal (Editar)");
  };

  // Add content for the new screen here
  return (
    <View style={styles.vbox}>
      <View style={styles.hbox}>
        <View style={styles.vbox}>
          <Text style={styles.nametext}>Nombre</Text>
          <Text style={styles.nameoutput}>{loadedData.keystoredName}</Text>
        </View>
        <View style={styles.vbox}>
          <Text style={styles.numbertext}>Numero</Text>
          <Text style={styles.numberoutput}>
            {loadedData.keystoredPhoneNumber}
          </Text>
        </View>
      </View>
      <Text style={styles.birthdaytext}>Fecha de Nacimiento</Text>
      <View style={styles.hbox}>
        <Text style={styles.monthoutput}>{loadedData.keystoredBirthMonth}</Text>
        <Text style={styles.dayoutput}>{loadedData.keystoredBirthDay}</Text>
        <Text style={styles.yearoutput}>{loadedData.keystoredBirthYear}</Text>
      </View>
      <Text style={styles.addresstext}>Direccion y Ciudad</Text>
      <Text style={styles.addressoutput}>
        {loadedData.keystoredHomeAddress}
      </Text>
      <View style={styles.hbox}>
        <Text style={styles.cityoutput}>{loadedData.keystoredHomeCity}</Text>
        <Text style={styles.statezipoutput}>
          {loadedData.keystoredHomeState}
        </Text>
        <Text style={styles.statezipoutput}>{loadedData.keystoredHomeZip}</Text>
      </View>
      <View style={styles.hbox}>
        <View style={styles.vbox}>
          <Text style={styles.emergencytext}>Contacto 1</Text>
          <Text style={styles.emergencyoutput}>
            {loadedData.keystoredNameEmergencyContactName1}
          </Text>
          <Text style={styles.emergencyoutput}>
            {loadedData.keystoredNameEmergencyContactNumber1}
          </Text>
        </View>
        <View style={styles.vbox}>
          <Text style={styles.emergencytext}>Contacto 2</Text>
          <Text style={styles.emergencyoutput}>
            {loadedData.keystoredNameEmergencyContactName2}
          </Text>
          <Text style={styles.emergencyoutput}>
            {loadedData.keystoredNameEmergencyContactNumber2}
          </Text>
        </View>
      </View>
      <TouchableHighlight
        onPress={moveToPersonalInfoEditScreen}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Editar Informacion Personal</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  vbox: {
    flex: 0,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
  hbox: {
    flex: 0,
    flexDirection: "row", // Set to 'row' for horizontal arrangement
    justifyContent: "center", // You can adjust this based on your layout needs
    alignItems: "center", // You can adjust this based on your layout needs
    margin: 5,
  },
  nametext: {
    marginRight: 125,
    fontSize: 30, // Set the desired font size
  },
  numbertext: {
    marginRight: 20,
    fontSize: 30, // Set the desired font size
  },
  nameoutput: {
    width: 250, // Set the desired width
    height: 50, // Set the desired height
    fontSize: 20, // Set the desired font size
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 2,
  },
  numberoutput: {
    width: 150, // Set the desired width
    height: 50, // Set the desired height
    fontSize: 20, // Set the desired font size
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 2,
  },
  birthdaytext: {
    marginRight: 97,
    fontSize: 30, // Set the desired font size
  },
  monthoutput: {
    width: 175, // Set the desired width
    height: 50, // Set the desired height
    fontSize: 20, // Set the desired font size
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 2,
  },
  dayoutput: {
    width: 110, // Set the desired width
    height: 50, // Set the desired height
    fontSize: 20, // Set the desired font size
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 2,
  },
  yearoutput: {
    width: 110, // Set the desired width
    height: 50, // Set the desired height
    fontSize: 20, // Set the desired font size
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 2,
  },
  addresstext: {
    marginRight: 135,
    fontSize: 30, // Set the desired font size
  },
  addressoutput: {
    width: 407, // Set the desired width
    height: 50, // Set the desired height
    fontSize: 20, // Set the desired font size
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 10,
  },
  cityoutput: {
    width: 200, // Set the desired width
    height: 50, // Set the desired height
    fontSize: 20, // Set the desired font size
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 2,
  },
  statezipoutput: {
    width: 97, // Set the desired width
    height: 50, // Set the desired height
    fontSize: 20, // Set the desired font size
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 2,
  },
  emergencytext: {
    marginRight: 40,
    fontSize: 30, // Set the desired font size
  },
  emergencyoutput: {
    width: 200, // Set the desired width
    height: 50, // Set the desired height
    fontSize: 20, // Set the desired font size
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 2,
  },
  button: {
    marginTop: 40,
    marginBottom: 40,
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

export default PersonalInfoViewScreen;
