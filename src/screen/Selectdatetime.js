import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Image,
  Text, 
  ScrollView,
  Dimensions,
  FlatList
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Icon1 from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const Selectdatetime = () => {
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get('window').width;
  const navigation = useNavigation()
  
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);

  const time = [
    { id:1, timetext:"9:00 AM" },
    { id:2, timetext:"10:00 AM" },
    { id:3, timetext:"11:00 AM" },
    { id:4, timetext:"12:00 AM" },
    { id:5, timetext:"01:00 PM" },
    { id:6, timetext:"02:00 PM" },
    { id:7, timetext:"04:00 PM" },
    { id:8, timetext:"05:00 PM" },
    { id:9, timetext:"06:00 PM" },
    { id:10, timetext:"07:00 PM" },
    { id:11, timetext:"08:00 PM" },
    { id:12, timetext:"09:00 PM" },
  ];

  const date =[
    { id:1, datetext:"5 May" },
    { id:2, datetext:"7 May" },
    { id:3, datetext:"9 May" },
    { id:4, datetext:"11 May" },
    { id:5, datetext:"13 May" },
    { id:6, datetext:"15 May" },
    { id:7, datetext:"17 May" },
    { id:8, datetext:"19 May" },
    { id:9, datetext:"21 May" },
    { id:10, datetext:"23 May" },
    { id:11, datetext:"25 May" },
    { id:12, datetext:"27 May" },
  ];

  const renderTimeSlot = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.timeSlotButton,
        { 
          backgroundColor: selectedTime === item.id ? '#004CFF' : '#004CFF33',
          width: (screenWidth - 60) / 3
        }
      ]}
      onPress={() => setSelectedTime(item.id)}
    >
      <Text style={styles.timeSlotText}>{item.timetext}</Text>
    </TouchableOpacity>
  );

  const renderDateSlot = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.timeSlotButton,
        { 
          backgroundColor: selectedDate === item.id ? '#004CFF' : '#004CFF33',
          width: (screenWidth - 60) / 3
        }
      ]}
      onPress={() => setSelectedDate(item.id)}
    >
      <Text style={styles.timeSlotText}>{item.datetext}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView 
      showsVerticalScrollIndicator={false} 
      style={[styles.container, { paddingTop: insets.top }]}
      contentContainerStyle={{ paddingBottom: insets.bottom + 60 }}
    >
      {/* Order Header */}
      <View style={styles.checkoutContainer}>
        <Text style={styles.checkoutText}>Select Date & Time</Text>
        <View style={styles.line} />
      </View>

      {/* Available Times Section */}
      <Text style={styles.sectionHeader}>Available Times</Text>
      <FlatList
        data={time}
        renderItem={renderTimeSlot}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        contentContainerStyle={styles.timeList}
        scrollEnabled={false}
      />

      {/* Available Date */}
      <Text style={styles.sectionHeader}>Available Date</Text>
      <FlatList
        data={date}
        renderItem={renderDateSlot}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        contentContainerStyle={styles.timeList}
        scrollEnabled={false}
      />
      
      {/* Track Order Button */}
      <TouchableOpacity style={styles.placeOrderButton} onPress={() => {navigation.navigate("Checkout")}} >
        <Text style={styles.placeOrderText}>Submit</Text>
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
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    margin: 5,
  },
  timeSlotText: {
    color: 'white',
    fontWeight: '500',
  },
  sectionHeader: {
    fontWeight: '500',
    fontSize: 17,
    marginBottom: "3%",
    marginTop:"5%",
    marginLeft: 5
  },
  timeList: {
    justifyContent: 'space-between',
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
    fontSize:16
  },
});

export default Selectdatetime;