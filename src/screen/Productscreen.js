import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { 
  View, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Image,
  FlatList, 
  Text, 
  ScrollView,
  Dimensions
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Productscreen = () => {
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get('window').width;
  const navigation = useNavigation()

  return (
    <ScrollView 
      showsVerticalScrollIndicator={false} 
      style={[styles.container, { paddingTop: insets.top }]}
      contentContainerStyle={{ paddingBottom: insets.bottom + 60 }}
    >
      {/* Two images in same row */}
      <View style={styles.row}>
        <Image 
          source={require('../Images/product1.jpg')} // Replace with your image path
          style={styles.smallImage}
        />
        <Image 
          source={require('../Images/product2.jpg')} // Replace with your image path
          style={styles.smallImage}
        />
      </View>

      {/* Full-width image */}
      <Image 
        source={require('../Images/product2.jpg')} // Replace with your image path
        style={[styles.largeImage, { width: screenWidth - 30 }]}
      />

      {/* Text sections */}
      <Text style={styles.salonText}>Salon For Girls</Text>
      <Text style={styles.tutorText}>Book Your Tutor Now</Text>
      <Text style={styles.availableText}>7 Tutor Available Only</Text>

      {/* Price + Details row */}
      <View style={[styles.row1, styles.detailsContainer]}>
        <Text style={styles.priceText}>Starts At Rs 999 Per Visit</Text>
        <TouchableOpacity>
          <Text style={styles.detailsText}>View Details</Text>
        </TouchableOpacity>
      </View>

      {/* Book Now button */}
      <TouchableOpacity style={styles.bookButton} onPress={() =>{navigation.navigate("Appointment")}} >
        <Text style={styles.bookButtonText}>Book Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginTop:"12%"
  },
   row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginTop:"2%"
  },
  smallImage: {
    height: 100,
    width: 160,
    borderRadius: 15,
    resizeMode: 'cover',
  },
  largeImage: {
    height: 200,
    borderRadius: 15,
    resizeMode: 'cover',
    marginBottom: 15,
    alignSelf: 'center',
  },
  salonText: {
    fontWeight: 'bold',
    fontSize: 22,
    marginVertical: 5,
  },
  tutorText: {
    fontSize: 16,
    marginBottom: 5,
  },
  availableText: {
    color: '#E6C210',
    fontSize:13
  },
  detailsContainer: {
    alignItems: 'center',
    marginBottom: "15%",
  },
  priceText: {
    fontSize: 16.5,
    fontWeight:"500"
  },
  detailsText: {
    color: 'blue',
    fontWeight: '500',
    fontSize:13
  },
  bookButton: {
    backgroundColor: 'blue',
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  
  },
});

export default Productscreen;