import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PersonalInfoEditScreen = () => {
  const [name, setName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [homeadress, setHomeAddress] = useState("");
  const [homecity, setHomeCity] = useState("");
  const [homestate, setHomeState] = useState("");
  const [homezip, setHomeZip] = useState("");
  const [emergencycontactname1, setEmergencyContactName1] = useState("");
  const [emergencycontactnumber1, setEmergencyContactNumber1] = useState("");
  const [emergencycontactname2, setEmergencyContactName2] = useState("");
  const [emergencycontactnumber2, setEmergencyContactNumber2] = useState("");

  useEffect(() => {
    // Load stored data when the component mounts
    loadPersonalInfo();
  }, []);

  const savePersonalInfo = async () => {
    try {
      await AsyncStorage.setItem("name", name);
      await AsyncStorage.setItem("phonenumber", phonenumber);
      await AsyncStorage.setItem("homeaddress", homeadress);
      await AsyncStorage.setItem("homecity", homecity);
      await AsyncStorage.setItem("homestate", homestate);
      await AsyncStorage.setItem("homezip", homezip);
      await AsyncStorage.setItem(
        "emergencycontactname1",
        emergencycontactname1
      );
      await AsyncStorage.setItem(
        "emergencycontactnumber1",
        emergencycontactnumber1
      );
      await AsyncStorage.setItem(
        "emergencycontactname2",
        emergencycontactname2
      );
      await AsyncStorage.setItem(
        "emergencycontactnumber2",
        emergencycontactnumber2
      );
      console.log("Personal information saved successfully!");
    } catch (error) {
      console.error("Error saving personal information:", error);
    }
  };

  const loadPersonalInfo = async () => {
    try {
      const storedName = await AsyncStorage.getItem("name");
      const storedPhoneNumber = await AsyncStorage.getItem("phonenumber");
      const storedHomeAddress = await AsyncStorage.getItem("homeaddress");
      const storedHomeCity = await AsyncStorage.getItem("homecity");
      const storedHomeState = await AsyncStorage.getItem("homestate");
      const storedHomeZip = await AsyncStorage.getItem("homezip");
      const storedNameEmergencyContactName1 = await AsyncStorage.getItem(
        "emergencycontactname1"
      );
      const storedNameEmergencyContactNumber1 = await AsyncStorage.getItem(
        "emergencycontactnumber1"
      );
      const storedNameEmergencyContactName2 = await AsyncStorage.getItem(
        "emergencycontactname2"
      );
      const storedNameEmergencyContactNumber2 = await AsyncStorage.getItem(
        "emergencycontactnumber2"
      );

      if (
        storedName !== null &&
        storedPhoneNumber !== null &&
        storedHomeAddress !== null &&
        storedHomeCity !== null &&
        storedHomeState !== null &&
        storedHomeZip !== null &&
        storedNameEmergencyContactName1 !== null &&
        storedNameEmergencyContactNumber1 !== null &&
        storedNameEmergencyContactName2 !== null &&
        storedNameEmergencyContactNumber2 !== null
      ) {
        setName(storedName);
        setPhoneNumber(storedPhoneNumber);
        setHomeAddress(storedHomeAddress);
        setHomeCity(storedHomeCity);
        setHomeState(storedHomeState);
        setHomeZip(storedHomeZip);
        setEmergencyContactName1(storedNameEmergencyContactName1);
        setEmergencyContactNumber1(storedNameEmergencyContactNumber1);
        setEmergencyContactName2(storedNameEmergencyContactName2);
        setEmergencyContactNumber2(storedNameEmergencyContactNumber2);
      }
    } catch (error) {
      console.error("Error loading personal information:", error);
    }
  };

  // Add content for the new screen here
  return (
    <View style={styles.vbox}>
      <View style={styles.hbox}>
        <View style={styles.vbox}>
          <Text style={styles.text}>Nombre</Text>
          <TextInput
            style={styles.smallinput}
            placeholder="Nombre"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.vbox}>
          <Text style={styles.text}>Numero</Text>

          <TextInput
            style={styles.smallinput}
            placeholder="Numero"
            value={phonenumber}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>
      </View>
      <Text style={styles.addresstext}>Direccion y Ciudad</Text>
      <TextInput
        style={styles.addressinput}
        placeholder="Direccion"
        value={homeadress}
        onChangeText={(text) => setHomeAddress(text)}
      />
      <View style={styles.hbox}>
        <TextInput
          style={styles.cityinput}
          placeholder="Ciudad"
          value={homecity}
          onChangeText={(text) => setHomeCity(text)}
        />
        <TextInput
          style={styles.statezipinput}
          placeholder="Estado"
          value={homestate}
          onChangeText={(text) => setHomeState(text)}
        />
        <TextInput
          style={styles.statezipinput}
          placeholder="Codigo Postal"
          value={homezip}
          onChangeText={(text) => setHomeZip(text)}
        />
      </View>
      <View style={styles.hbox}>
        <View style={styles.vbox}>
          <Text style={styles.emergencytext}>Contacto 1</Text>
          <TextInput
            style={styles.emergencyinput}
            placeholder="Nombre"
            value={emergencycontactname1}
            onChangeText={(text) => setEmergencyContactName1(text)}
          />
          <TextInput
            style={styles.emergencyinput}
            placeholder="Numero"
            value={emergencycontactnumber1}
            onChangeText={(text) => setEmergencyContactNumber1(text)}
          />
        </View>
        <View style={styles.vbox}>
          <Text style={styles.emergencytext}>Contacto 2</Text>
          <TextInput
            style={styles.emergencyinput}
            placeholder="Nombre"
            value={emergencycontactname2}
            onChangeText={(text) => setEmergencyContactName2(text)}
          />
          <TextInput
            style={styles.emergencyinput}
            placeholder="Numero"
            value={emergencycontactnumber2}
            onChangeText={(text) => setEmergencyContactNumber2(text)}
          />
        </View>
      </View>
      <TouchableHighlight onPress={savePersonalInfo} style={styles.button}>
        <Text style={styles.buttonText}>Guardar Informacion Personal</Text>
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
  smallinput: {
    width: 200, // Set the desired width
    height: 50, // Set the desired height
    fontSize: 20, // Set the desired font size
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    margin: 2,
  },
  addressinput: {
    width: 407, // Set the desired width
    height: 50, // Set the desired height
    fontSize: 20, // Set the desired font size
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    margin: 10,
  },
  cityinput: {
    width: 200, // Set the desired width
    height: 50, // Set the desired height
    fontSize: 20, // Set the desired font size
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    margin: 2,
  },
  statezipinput: {
    width: 97, // Set the desired width
    height: 50, // Set the desired height
    fontSize: 20, // Set the desired font size
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    margin: 2,
  },
  emergencyinput: {
    width: 200, // Set the desired width
    height: 50, // Set the desired height
    fontSize: 20, // Set the desired font size
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    margin: 2,
  },
  button: {
    marginTop: 140,
    marginBottom: 20,
    backgroundColor: "dodgerblue",
    borderRadius: 5,
    padding: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 25,
    textAlign: "center",
  },
  text: {
    marginRight: 80,
    fontSize: 30, // Set the desired font size
  },
  emergencytext: {
    marginRight: 40,
    fontSize: 30, // Set the desired font size
  },
  addresstext: {
    marginRight: 135,
    fontSize: 30, // Set the desired font size
  },
});

export default PersonalInfoEditScreen;
