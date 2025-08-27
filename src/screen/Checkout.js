import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Image,
  Text, 
  ScrollView,
  Dimensions
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Icon1 from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const Checkout = () => {
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get('window').width;
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [homeSelected, setHomeSelected] = useState(true);
  const [workSelected, setWorkSelected] = useState(false);
  const navigation = useNavigation()

  return (
    <ScrollView 
      showsVerticalScrollIndicator={false} 
      style={[styles.container, { paddingTop: insets.top }]}
      contentContainerStyle={{ paddingBottom: insets.bottom + 60 }}
    >
      {/* Checkout Header */}
      <View style={styles.checkoutContainer}>
        <Text style={styles.checkoutText}>Checkout</Text>
        <View style={styles.line} />
      </View>

      {/* Time Slot Button */}
      <TouchableOpacity style={styles.timeSlotButton} onPress={() => {navigation.navigate("Selectdatetime")}}  >
        <Text style={styles.timeSlotText}>Select Time Slot</Text>
      </TouchableOpacity>

      {/* Delivery Address Section */}
      <Text style={styles.sectionHeader}>Delivery Address</Text>
      
      <View style={styles.addressContainer}>
        <View>
          <Text style={styles.addressTitle}>Home</Text>
          <Text style={styles.addressText}>123 Main Street UP 123568</Text>
        </View>
        <TouchableOpacity 
          style={[styles.checkbox, homeSelected && styles.checkboxSelected]}
          onPress={() => {
            setHomeSelected(true);
            setWorkSelected(false);
          }}
        >
          {homeSelected && <Text style={styles.checkIcon}><Icon1 name="check" size={20} color="white" /></Text>}
        </TouchableOpacity>
      </View>

      <View style={styles.addressContainer}>
        <View>
          <Text style={styles.addressTitle}>Work</Text>
          <Text style={styles.addressText}>456 Main Street 326581</Text>
        </View>
        <TouchableOpacity 
          style={[styles.checkbox, workSelected && styles.checkboxSelected]}
          onPress={() => {
            setWorkSelected(true);
            setHomeSelected(false);
          }}
        >
          {workSelected && <Text style={styles.checkIcon}><Icon1 name="check" size={20} color="white" /></Text>}
        </TouchableOpacity>
      </View>

      {/* Add New Address */}
      <TouchableOpacity style={styles.addAddressContainer}>
        <Text style={styles.addAddressText}>Add New Address</Text>
        <Text style={styles.arrowIcon}><Icon name="arrow-right-long" size={20} color="black" /></Text>
      </TouchableOpacity>

      {/* Transaction Details */}
      <Text style={styles.sectionHeader}>Transaction Details</Text>
      
      {/* Payment Methods */}
      <View style={styles.paymentMethodsContainer}>
        {['UPI', 'Card', 'Wallet', 'Cash on delivery'].map((method) => (
          <TouchableOpacity
            key={method}
            style={[
              styles.paymentButton,
              selectedPayment === method && styles.paymentButtonSelected
            ]}
            onPress={() => setSelectedPayment(method)}
          >
            <Text style={{fontWeight:"500"}}>{method}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Place Order Button */}
      <TouchableOpacity style={styles.placeOrderButton} onPress={() =>{navigation.navigate("Orderconfirmation")}}>
        <Text style={styles.placeOrderText}>Place Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5',
  },
  checkoutContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    paddingVertical: 20,
    alignItems: 'center',
    marginBottom: 15,
    marginTop:"5%",
    elevation:10
  },
  checkoutText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  line: {
    height: 1,
    backgroundColor: 'grey',
    width: '88%',
    marginBottom: 5,
  },
  timeSlotButton: {
    backgroundColor: '#CCDBFF',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    marginBottom: 20,
    
  },
  timeSlotText: {
    fontWeight: '500',
  },
  sectionHeader: {
    fontWeight: '500',
    fontSize: 16.5,
    marginBottom: "5%",
  },
  addressContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    paddingHorizontal:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    elevation:10,
  },
  addressTitle: {
    fontWeight: '500',
  },
  addressText: {
    color: '#666',
    fontSize:13
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: 'blue',
    borderColor: 'blue',
  },
  checkIcon: {
    color: 'white',
    fontWeight: 'bold',
  },
  addAddressContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    paddingHorizontal:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:"5%",
    elevation:10,
  },
  addAddressText: {
    fontWeight: '500',
    fontSize:17
  },
  arrowIcon: {
    fontSize: 20,
  },
  paymentMethodsContainer: {
    marginBottom: 20,
  },
  paymentButton: {
    backgroundColor: '#CCDBFF',
    borderRadius: 15,
    padding: 15,
    minWidth: (Dimensions.get('window').width - 60) / 2,
    marginBottom: 10,
  },
  paymentButtonSelected: {
    backgroundColor: '#D2EDFF',
  },
  placeOrderButton: {
    backgroundColor: 'blue',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
  },
  placeOrderText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:15.5
  },
});

export default Checkout;