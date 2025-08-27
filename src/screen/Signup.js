import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";

const Signup = () => {

const navigation=useNavigation()

  // State management
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  
  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* Header Text */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Create</Text>
          <Text style={styles.headerText}>Account</Text>
        </View>
        
        {/* Camera Logo */}
        <Image 
          source={require("../Images/cameraicon.png")} 
          style={styles.logo}
        />
        
        {/* Email Input */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        {/* Password Input with Eye Icon */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
            placeholderTextColor="#888"
          />
          <TouchableOpacity 
            onPress={togglePasswordVisibility}
            style={styles.eyeIcon}
          >
            <MaterialIcons 
              name={showPassword ? "visibility" : "visibility-off"} 
              size={20} 
              color="grey" 
            />
          </TouchableOpacity>
        </View>
        
        {/* Phone Input with Flag */}
        <View style={styles.phoneContainer}>
          <Image 
            source={{ uri: "https://flagcdn.com/w160/gb.png" }} 
            style={styles.flag}
          />
          <TouchableOpacity style={styles.arrowButton}>
            <Feather name="chevron-down" size={20} color="black" />
          </TouchableOpacity>
          <TextInput
            style={styles.phoneInput}
            placeholder="Your number"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            placeholderTextColor="#888"
          />
        </View>
        
        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton} onPress={()=>{navigation.navigate("Carouselscreen")}} >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
        
        {/* Cancel Button */}
        <TouchableOpacity style={styles.cancelButton} onPress={()=>{navigation.navigate("Started")}} >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 25,
  },
  header: {
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 35,
    lineHeight: 40,
    color:"#252321",
  },
  logo: {
    height: 80,
    width: 80,
    marginBottom: 40,
    alignSelf: "flex-start",
  },
  input: {
    height: 45,
    width: "100%",
    backgroundColor: "#ddd5",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 8,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 8,
    backgroundColor: "#ddd5",
    borderRadius: 25,
    overflow: "hidden",
  },
  passwordInput: {
    flex: 1,
    height: 45,
    backgroundColor: "transparent",
    paddingHorizontal: 15,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#ddd5",
    borderRadius: 25,
    overflow: "hidden",
    marginBottom: 30,
  },
  flag: {
    width: 28,
    height: 20,
    marginLeft: 18,
    borderRadius: 2,
  },
  arrowButton: {
    padding: 8,
  },
  phoneInput: {
    flex: 1,
    height: 45,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  nextButton: {
    width: "100%",
    height: 45,
    backgroundColor: "blue",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
     marginTop:"5%"
  },
  nextButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  cancelButton: {
    alignSelf: "center",
  },
  cancelText: {
    color: "#252321",
    fontSize: 16,
  },
});

export default Signup;