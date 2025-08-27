import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

 
const Started = () => {

  const navigation=useNavigation()
  return (
    <SafeAreaProvider>
    <View style={[styles.container, ]}>
      {/* Circular Logo */}
      <Image 
        source={require("../Images/Bazzrwayicon.jpg")} 
        style={styles.logo}
      />
      
      {/* Brand Name */}
      <Text style={styles.brandName}>Bazarway</Text>
      
      {/* Tagline */}
      <Text style={styles.tagline}>Get all your needs only on</Text>
      <Text style={styles.brandName1}>Bazarway</Text>
      
      {/* Get Started Button */}
      <TouchableOpacity style={styles.button}  onPress={()=>{navigation.navigate("Login")}} >
        <Text style={styles.buttonText}>Let's get started</Text>
      </TouchableOpacity>
      
      {/* Account Prompt */}
      <View >
         <TouchableOpacity style={styles.accountContainer} onPress={()=>{navigation.navigate("Signup")}} >
        <Text style={styles.accountText}>I already have an account</Text>
        <Image 
          source={require("../Images/Button.png")} 
          style={styles.buttonIcon}
        />
        </TouchableOpacity>
      </View>
    </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    height: "25%",
    width: "45%",
    borderRadius: 80, // Makes it circular
    marginBottom: 20,
  },
  brandName: {
    fontSize: 35,
    fontWeight: "bold",
  },
  brandName1: {
    fontSize: 15,
     color: "#555",
  },
  tagline: {
    fontSize: 15,
    marginTop: 10,
    color: "#555",
  },
  button: {
    backgroundColor: "blue", // Blue background
    paddingVertical: 12,
    paddingHorizontal: 90,
    borderRadius: 10,
    marginTop: 30,
  
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16,
  },
  accountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  accountText: {
    fontSize: 14,
    color: "#555",
    marginRight: 8,
  },
  buttonIcon: {
    height: 20,
    width: 20,
  }
});

export default Started;