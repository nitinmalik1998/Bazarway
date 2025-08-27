import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Svg, { Path } from 'react-native-svg';

const Recoverypassword = () => {
  const navigation = useNavigation(); // Uncommented navigation hook
  const [step, setStep] = useState(1); // 1: Selection step, 2: OTP step
  const [selectedOption, setSelectedOption] = useState(null);
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpInputRefs = useRef([]);
  const [contactInfo, setContactInfo] = useState('');

  // Checkmark SVG component
  const CheckMark = () => (
    <Svg width={16} height={16} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20 6L9 17L4 12"
        stroke="white"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  useEffect(() => {
    if (selectedOption === 'sms') {
      setContactInfo('+98 ********00');
    } else if (selectedOption === 'email') {
      setContactInfo('email****@example.com');
    }
  }, [selectedOption]);

  const handleNext = () => {
    if (selectedOption) {
      setStep(2);
    }
  };

  const handleOtpChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto focus next input
    if (text && index < 3) {
      otpInputRefs.current[index + 1].focus();
    }

    // Check if OTP is complete
    if (index === 3 && text) {
      const enteredOtp = newOtp.join('');
      if (enteredOtp === '4321') {
        navigation.navigate('Setuppassword');
      }
    }
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      otpInputRefs.current[index - 1].focus();
    }
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.bazarway}>Bazarway</Text>
        <Text style={styles.title}>Password Recovery</Text>
        
        {step === 1 ? (
          <>
            <Text style={styles.subtitle}>How you would like to restore your password?</Text>
            
            {/* SMS Option */}
            <TouchableOpacity 
              style={[styles.optionContainer, styles.smsOption]}
              onPress={() => setSelectedOption('sms')}
            >
              <View style={styles.textContainer}>
                <Text style={styles.optionText}>SMS</Text>
              </View>
              <View style={[
                styles.checkbox, 
                selectedOption === 'sms' && styles.smsCheckboxSelected
              ]}>
                {selectedOption === 'sms' && <CheckMark />}
              </View>
            </TouchableOpacity>
            
            {/* Email Option */}
            <TouchableOpacity 
              style={[styles.optionContainer, styles.emailOption]}
              onPress={() => setSelectedOption('email')}
            >
              <View style={styles.textContainer}>
                <Text style={styles.optionText1}>Email</Text>
              </View>
              <View style={[
                styles.checkbox, 
                selectedOption === 'email' && styles.emailCheckboxSelected
              ]}>
                {selectedOption === 'email' && <CheckMark />}
              </View>
            </TouchableOpacity>
            
            {/* Next Button */}
            <TouchableOpacity 
              style={[styles.nextButton, !selectedOption && styles.disabledButton]}
              onPress={handleNext}
              disabled={!selectedOption}
            >
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.subtitle}>
              Enter 4-digits code we sent you on your {selectedOption === 'sms' ? 'phone number' : 'email'}
            </Text>
            <Text style={styles.contactInfo}>{contactInfo}</Text>
            
            {/* OTP Inputs */}
            <View style={styles.otpContainer}>
              {[0, 1, 2, 3].map((index) => (
                <TextInput
                  key={index}
                  ref={(ref) => (otpInputRefs.current[index] = ref)}
                  style={styles.otpInput}
                  value={otp[index]}
                  onChangeText={(text) => handleOtpChange(text, index)}
                  onKeyPress={(e) => handleKeyPress(e, index)}
                  keyboardType="numeric"
                  maxLength={1}
                  textAlign="center"
                />
              ))}
            </View>
            
            {/* Send Again Button */}
            <TouchableOpacity 
              style={styles.sendAgainButton}
              onPress={() => console.log("Resend code")}
            >
              <Text style={styles.sendAgainText}>Send Again</Text>
            </TouchableOpacity>
          </>
        )}
        
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
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#555',
    paddingHorizontal: 20,
  },
  contactInfo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '65%',
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  smsOption: {
    backgroundColor: '#C7D6FB',
  },
  emailOption: {
    backgroundColor: '#FFEBEB',
  },
  optionText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: "blue",
  },
  optionText1: {
    fontWeight: 'bold',
    fontSize: 16,
    color: "red",
  },
  checkbox: {
    width: 26,
    height: 26,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  smsCheckboxSelected: {
    backgroundColor: 'blue',
  },
  emailCheckboxSelected: {
    backgroundColor: '#D32F2F',
  },
  nextButton: {
    backgroundColor: 'blue',
    width: '90%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: "30%",
  },
  disabledButton: {
    backgroundColor:"lightgrey"
  },
  nextButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(221, 221, 221, 0.5)',
    marginHorizontal: 8,
    fontSize: 20,
    fontWeight: 'bold',
  },
  sendAgainButton: {
    backgroundColor: 'blue',
    width: '70%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: "30%",
  },
  sendAgainText: {
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

export default Recoverypassword;