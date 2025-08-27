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

const Orderconfirmation = () => {
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get('window').width;
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [homeSelected, setHomeSelected] = useState(true);
  const [workSelected, setWorkSelected] = useState(false);

  return (
    <ScrollView 
      showsVerticalScrollIndicator={false} 
      style={[styles.container, { paddingTop: insets.top }]}
      contentContainerStyle={{ paddingBottom: insets.bottom + 60 }}
    >
      {/* Order Header */}
      <View style={styles.checkoutContainer}>
        <Text style={styles.checkoutText}>Order Confirmation</Text>
        <View style={styles.line} />
      </View>


      {/* Order Summmary Section */}
      <Text style={styles.sectionHeader}>Order Summary</Text>
      
      <View style={styles.addressContainer}>
        <View>
          <Text style={styles.addressTitle}>Order Placed</Text>
          <Text style={styles.addressText}>Order No #25635622</Text>
        </View>
      </View>

      <View style={styles.addressContainer}>
        <View>
          <Text style={styles.addressTitle}>Visit time</Text>
          <Text style={styles.addressText}>Estimated Time 30 t0 50 min</Text>
        </View>
      </View>

      <View style={styles.addressContainer}>
        <View>
          <Text style={styles.addressTitle}>Visit Address</Text>
          <Text style={styles.addressText}>123 Main St UP 123568</Text>
        </View>
      </View>

     

      {/* Order Details */}
      <Text style={styles.sectionHeader}>Order Details</Text>
      
        <View style={styles.addressContainer}>
        <View>
          <Text style={styles.addressTitle}>AC Services</Text>
          <Text style={styles.addressText}>Number of AC 1</Text>
        </View>
      </View>

       <View style={styles.addressContainer}>
        <View>
          <Text style={styles.addressTitle}>Fridge Light</Text>
          <Text style={styles.addressText}>Number of Fridge 1</Text>
        </View>
      </View>
      

      {/* Track Order Button */}
      <TouchableOpacity style={styles.placeOrderButton}>
        <Text style={styles.placeOrderText}>Track Order</Text>
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
    marginTop:"5%"
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
    elevation:10
  },
  addressTitle: {
    fontWeight: '500',
  },
  addressText: {
    color: '#666',
    fontSize:13
  },
  checkbox: {
    width: 25,
    height: 25,
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
    marginBottom:"5%"
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
    marginTop:"10%"
  },
  placeOrderText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:15.5
  },
});

export default Orderconfirmation;