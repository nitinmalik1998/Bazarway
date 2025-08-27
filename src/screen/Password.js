import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Password = () => {
  const [password, setPassword] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);
  const refs = useRef([]);
  const progressInterval = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, []);

  const handleChange = (text, index) => {
    const newPassword = [...password];
    newPassword[index] = text;
    setPassword(newPassword);

    if (text && index < 3) {
      refs.current[index + 1]?.focus();
    }
    
    if (!text && index > 0) {
      refs.current[index - 1]?.focus();
    }
    
    // Check if password is complete
    if (newPassword.every(digit => digit !== "")) {
      if (newPassword.join("") === "1234") {
        setShowNextButton(true);
        setError(false);
      } else {
        setShowNextButton(false);
        setError(true);
        startVerification();
      }
    } else {
      setShowNextButton(false);
      setError(false);
    }
  };

  const startVerification = () => {
    setLoading(true);
    
    let currentProgress = 0;
    setProgress(currentProgress);
    
    progressInterval.current = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);
      
      if (currentProgress >= 8) {
        clearInterval(progressInterval.current);
        setLoading(false);
      }
    }, 170);
  };

  const handleCorrectPassword = () => {
    setLoading(true);
    
    let currentProgress = 0;
    setProgress(currentProgress);
    
    progressInterval.current = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);
      
      if (currentProgress >= 8) {
        clearInterval(progressInterval.current);
        setLoading(false);
        // Navigate to Carouselscreen after verification completes
        navigation.navigate('Carouselscreen');
      }
    }, 170);
  };

  const handleNotYou = () => {
    setPassword(["", "", "", ""]);
    setShowNextButton(false);
    setLoading(false);
    setProgress(0);
    setError(false);
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }
    refs.current[0]?.focus();
  };

  const handleForgotPassword = () => {
    navigation.navigate('Recoverypassword');
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Bazarway</Text>
        
        <Text style={[styles.subtitle, { marginBottom: 30 }]}>
          {error ? "Incorrect Password" : "Type your password"}
        </Text>
        
        {/* Progress bar shown during loading and after error */}
        {(loading || (error && progress >= 8)) && (
          <View style={styles.progressContainer}>
            {Array.from({ length: 8 }).map((_, index) => (
              <View
                key={index}
                style={[
                  styles.progressCircle,
                  index < progress && (error ? styles.progressCircleError : styles.progressCircleCorrect)
                ]}
              />
            ))}
          </View>
        )}
        
        {/* OTP boxes only shown when not loading and no error */}
        {!error && !loading && (
          <View style={styles.otpContainer}>
            {[0, 1, 2, 3].map((index) => (
              <TextInput
                key={index}
                style={styles.otpBox}
                value={password[index]}
                onChangeText={(text) => handleChange(text, index)}
                secureTextEntry
                keyboardType="number-pad"
                maxLength={1}
                ref={(ref) => (refs.current[index] = ref)}
                editable={!loading}
              />
            ))}
          </View>
        )}
        
        {/* Next button for correct password */}
        {showNextButton && (
          <TouchableOpacity 
            style={[
              styles.nextButton, 
              loading && styles.nextButtonDisabled
            ]} 
            onPress={handleCorrectPassword}
            disabled={loading}
          >
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        )}
        
        {/* Show "Forget your password?" during and after error */}
        {error && (
          <TouchableOpacity 
            style={styles.forgotButton}
            onPress={handleForgotPassword}
          >
            <Text style={styles.forgotText}>Forget your password?</Text>
          </TouchableOpacity>
        )}
        
        {/* "Not you?" button shown only when no error */}
        {!error && !loading && (
          <TouchableOpacity style={styles.backButton} onPress={handleNotYou}>
            <Text style={styles.backText}>Not you?</Text>
            <Image 
              source={require('../Images/Button.png')} 
              style={styles.backImage} 
            />
          </TouchableOpacity>
        )}
         <TouchableOpacity style={styles.backButton1} onPress={handleNotYou}>
            <Text style={styles.backText}>Not you?</Text>
            <Image 
              source={require('../Images/Button.png')} 
              style={styles.backImage} 
            />
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
  },
  title: {
    color: '#C3AC6C',
    fontWeight: 'bold',
    fontSize: 44,
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 17,
    color: '#333',
  },
  otpContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  otpBox: {
    width: 45,
    height: 45,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 24,
    marginHorizontal: 8,
    backgroundColor: "#ddd6",
    marginVertical: "1%"
  },
  progressContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  progressCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#C7D6FB',
    marginHorizontal: 4,
  },
  progressCircleCorrect: {
    backgroundColor: 'blue',
  },
  progressCircleError: {
    backgroundColor: 'red',
  },
  nextButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: "36%",
    borderRadius: 10,
    marginBottom: 30,
    minWidth: 100,
    alignItems: 'center',
  },
  nextButtonDisabled: {
    backgroundColor: 'blue',
    marginVertical: "10%"
  },
  nextText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 18,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
  },
   backButton1: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
  },
  backImage: {
    width: 25,
    height: 25,
    marginLeft: 5
  },
  backText: {
    fontSize: 16.5,
    color: '#333',
  },
  forgotButton: {
    paddingVertical: 12,
    marginBottom: 30,
  },
  forgotText: {
    color: '#333',
    fontWeight: '500',
    fontSize: 15.5,
  },
});

export default Password;