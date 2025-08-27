import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Setuppassword = () => {
  const navigation = useNavigation(); 
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  // Validate password requirements
  const isValid = () => {
    const hasMinLength = newPassword.length >= 10;
    const hasAlphabet = /[a-zA-Z]/.test(newPassword);
    const passwordsMatch = newPassword === repeatPassword;
    return hasMinLength && hasAlphabet && passwordsMatch;
  };

  const handleSave = () => {
    if (isValid()) {
      console.log("Password updated");
      navigation.navigate('Login');  // Navigate to Login screen
    }
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.bazarway}>Bazarway</Text>
        <Text style={styles.title}>Setup New Password</Text>
        <Text style={styles.subtitle}>Please, setup a new password for your account</Text>
        
        {/* New Password Input */}
        <TextInput
          style={styles.input}
          placeholder="New Password"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry
          autoCapitalize="none"
        />
        
        {/* Repeat Password Input */}
        <TextInput
          style={styles.input}
          placeholder="Repeat Password"
          value={repeatPassword}
          onChangeText={setRepeatPassword}
          secureTextEntry
          autoCapitalize="none"
        />
        
        {/* Validation Messages */}
        {newPassword.length > 0 && newPassword.length < 10 && (
          <Text style={styles.errorText}>Password must be at least 10 characters</Text>
        )}
        {newPassword.length >= 10 && !/[a-zA-Z]/.test(newPassword) && (
          <Text style={styles.errorText}>Password must include at least one letter</Text>
        )}
        {repeatPassword.length > 0 && newPassword !== repeatPassword && (
          <Text style={styles.errorText}>Passwords do not match</Text>
        )}

        {/* Save Button */}
        <TouchableOpacity 
          style={[
            styles.nextButton, 
            !isValid() && styles.disabledButton
          ]}
          onPress={handleSave}
          disabled={!isValid()}  
        >
          <Text style={styles.nextButtonText}>Save</Text>
        </TouchableOpacity>
        
        {/* Cancel Button */}
        <TouchableOpacity 
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  bazarway: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#C3AC6C',
    marginBottom: "15%",
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18.5,
    textAlign: 'center',
    marginBottom: 30,
    color: '#555',
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#dddddd55',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    width: '90%',
    marginBottom: 10,
    fontSize: 13,
  },
  nextButton: {
    backgroundColor: 'blue',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: "20%",
  },
  disabledButton: {
    backgroundColor: "lightgrey",
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  cancelButton: {
    marginTop: 15,
  },
  cancelText: {
    color: '#555',
    fontSize: 16,
    fontWeight: "500"
  },
});

export default Setuppassword;