import { useNavigation } from '@react-navigation/native';
import React from 'react';
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
import Checkout from './Checkout';
import Checkoutscreen from './Checkout';

const Appointment = () => {
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get('window').width;
  const navigation =  useNavigation()

  // Replace with your actual image path
  const serviceImage = require('../Images/Bazzrwayicon.jpg');
  const starIcon = require('../Images/star3.png');

  return (
    <ScrollView 
      showsVerticalScrollIndicator={false} 
      style={[styles.container, { paddingTop: insets.top }]}
      contentContainerStyle={{ paddingBottom: insets.bottom + 60 }}
    >
      {/* Appointment Card */}
      <View style={styles.card1}>
        <View style={styles.appointmentHeader}>
          <Image 
            source={serviceImage} 
            style={styles.serviceImage} 
          />
          <View style={styles.headerTextContainer}>
            <Text style={styles.headerTitle}>Book Your</Text>
            <Text style={styles.headerTitle}>Appointment Now</Text>
            <View style={styles.starContainer}>
              {[...Array(4)].map((_, i) => (
                <Image key={i} source={starIcon} style={styles.starIcon} />
              ))}
            </View>
            <Text style={styles.priceText}>Starts At Rs 999 Per Visit</Text>
            <Text style={styles.taxText}>Inclusive of all taxes</Text>
             <Text style={{fontSize:12,color:"#0DA762"}}>10 offers Avilable</Text>
            <TouchableOpacity>
              <Text style={styles.viewDetails}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Address Section */}
      <Text style={styles.sectionTitle}>Add Address</Text>
      <View style={styles.card}>
        <View style={styles.pincodeContainer}>
          <TextInput
            style={styles.pincodeInput}
            placeholder="Enter Pincode"
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.checkButton}>
            <Text style={styles.checkText}>CHECK</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Price Details */}
      <Text style={styles.sectionTitle}>Book Now For Best Deal</Text>
      <View style={styles.card}>
        <Text style={styles.priceDetailsTitle}>Price Details</Text>
        <View style={styles.divider} />
        
        <View style={{marginVertical:12}}>
        <View style={styles.priceRow}>
          <Text>Price</Text>
          <Text>1099</Text>
        </View>
        
        <View style={styles.priceRow}>
          <Text>Discount</Text>
          <Text style={styles.greenText}>-100</Text>
        </View>
        
        <View style={styles.priceRow}>
          <Text>Visit Charges</Text>
          <Text style={styles.greenText}>Already included</Text>
        </View>
        </View>

        <View style={styles.divider} />
        
        <View style={[styles.priceRow, styles.totalRow]}>
          <Text style={styles.boldText}>Total Amount</Text>
          <Text style={styles.boldText}>Rs 999</Text>
        </View>
        
        <View style={styles.savingsNote}>
          <Text style={{fontSize:12,alignSelf:"center"}}>You will Save Rs 100 on This Booking</Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={{marginTop:"8%"}}>
      <TouchableOpacity style={[styles.actionButton, styles.addToBagButton]}  >
        <Text style={styles.buttonText}>Add To Bag</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.actionButton, styles.bookNowButton]} onPress={() =>{navigation.navigate("Checkout")}} >
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    elevation:10
  },
   card1: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    marginTop:"7%",
    elevation:10,
  },
  appointmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  serviceImage: {
    height: 140,
    width: 140,
    borderRadius: 15,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: "7%",
  },
  headerTitle: {
    fontWeight: '400',
    fontSize: 14.5,
  },
  starContainer: {
    flexDirection: 'row',
    marginVertical: 4,
  },
  starIcon: {
    width: 17,
    height: 17,
    marginRight: 2,
    tintColor: 'gold',
  },
  priceText: {
    fontWeight: '500',
    fontSize:12
  },
  taxText: {
    color: '#666',
    fontSize: 10.5,
  
  },
  viewDetails: {
    color: 'blue',
    fontSize:13,
    marginTop:2,
  },
  sectionTitle: {
    fontWeight: '500',
    marginBottom: "6%",
    fontSize:17
  },
  pincodeContainer: {
    flexDirection: 'row',
  
    borderRadius: 8,
    overflow: 'hidden',
  },
  pincodeInput: {
    flex: 1,
    padding: 0,
  },
  checkButton: {
    justifyContent: 'center',
    paddingHorizontal: 15,
  
  },
  checkText: {
    color: 'blue',
    fontWeight: '500',
  },
  priceDetailsTitle: {
    fontWeight: '500',
    fontSize: 14,
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: 'grey',
    
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  marginTop:2
  },
  greenText: {
    color: '#56C292',
  },
  totalRow: {
    marginTop: 8,
  },
  boldText: {
    fontWeight: '500',
  },
  savingsNote: {
    backgroundColor: '#00FFBB33', // Green with 20% opacity
    padding: 10,
    borderRadius: 15,
    marginTop: 15,
  },
  actionButton: {
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  addToBagButton: {
    backgroundColor: '#BC1515',
  },
  bookNowButton: {
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default Appointment;