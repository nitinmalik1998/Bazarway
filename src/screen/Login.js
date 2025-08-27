import React, { useState } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";

const Login = () => {

  const navigation= useNavigation()

  const [email, setEmail] = useState("");

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        {/* Header Text */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Login</Text>
        </View>
        <View style={styles.header1}>
          <Text style={styles.good}>Good to see you back!</Text>
          {/* Added heart icon here */}
          <MaterialIcons 
            name="favorite" 
            size={20} 
            color="#252321" 
            style={styles.heartIcon} 
          />
        </View>
        
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
        
        {/* Next Button */}
        <TouchableOpacity style={styles.nextButton} onPress={()=>{navigation.navigate("Password")}} >
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
    marginBottom: 10,
  },
  header1: {
    flexDirection: 'row',       // Added to align children horizontally
    alignItems: 'center',       // Added to vertically center children
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 39,
    lineHeight: 45,
    color:"#252321",
  },
  good: {
    fontWeight:"400",
    fontSize:15,
    color:"#252321",
    marginRight: 8,             // Added spacing between text and icon
  },
  heartIcon: {
    marginTop: 2,               // Fine-tune vertical alignment
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
  nextButton: {
    width: "100%",
    height: 45,
    backgroundColor: "blue",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop:"10%"
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

export default Login;