import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";

{
  /* <View style={styles.vbox}>
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
      <Text style={styles.birthdaytext}>Fecha de Nacimiento</Text>
      <View style={styles.hbox}>
        <TextInput
          style={styles.monthinput}
          placeholder="Mes"
          value={birthMonth}
          onChangeText={(text) => setBirthMonth(text)}
        />
        <TextInput
          style={styles.dayinput}
          placeholder="Dia"
          value={birthDay}
          onChangeText={(text) => setBirthDay(text)}
        />
        <TextInput
          style={styles.yearinput}
          placeholder="Año"
          value={birthYear}
          onChangeText={(text) => setBirthYear(text)}
        />
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
      </View> */
}
const PersonalInfoViewScreen = ({ navigation, route }) => {
  const {
    storedName,
    storedPhoneNumber,
    storedBirthMonth,
    storedBirthDay,
    storedBirthYear,
    storedHomeAddress,
    storedHomeCity,
    storedHomeState,
    storedHomeZip,
    storedNameEmergencyContactName1,
    storedNameEmergencyContactName2,
    storedNameEmergencyContactNumber1,
    storedNameEmergencyContactNumber2,
  } = route.params.loadedData;
  console.log("Information from last save : ");
  console.log(route.params.loadedData);

  const moveToPersonalInfoEditScreen = () => {
    console.log("Navigate to Personal Info Edit");
    navigation.navigate("Informacion Personal (Editar)");
  };

  // Add content for the new screen here
  return (
    <View style={styles.vbox}>
      <Text>{storedName}</Text>
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
    marginTop: 25,
    marginBottom: 25,
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
  birthdaytext: {
    marginRight: 97,
    fontSize: 30, // Set the desired font size
  },
  monthinput: {
    width: 175, // Set the desired width
    height: 50, // Set the desired height
    fontSize: 20, // Set the desired font size
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    margin: 2,
  },
  dayinput: {
    width: 110, // Set the desired width
    height: 50, // Set the desired height
    fontSize: 20, // Set the desired font size
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    margin: 2,
  },
  yearinput: {
    width: 110, // Set the desired width
    height: 50, // Set the desired height
    fontSize: 20, // Set the desired font size
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    margin: 2,
  },
});

export default PersonalInfoViewScreen;
