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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Chooseslot = () => {
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get('window').width; 
const navigation=useNavigation()

  const data = [
    {
      id:1,
      Title:"Spa For Women",
      subtitle1:"We Have Best Salon Artist",
      subtitle2:"Book Your Choice Now",
      button1:"View Details",
      button2:"Add",
      image: require("../Images/choose2.jpg")
    },
    {
      id:2,
      Title:"Spa For Women",
      subtitle1:"We Have Best Salon Artist",
      subtitle2:"Book Your Choice Now",
      button1:"View Details",
      button2:"Add",
      image: require("../Images/choose1.jpg")
    },
    {
      id:3,
      Title:"Hair Studio For Women",
      subtitle1:"We Have Best Salon Artist",
      subtitle2:"Book Your Choice Now",
      button1:"View Details",
      button2:"Add",
      image: require("../Images/choose3.jpg")
    },
    {
      id:4,
      Title:"Hair Studio For Women",
      subtitle1:"We Have Best Salon Artist",
      subtitle2:"Book Your Choice Now",
      button1:"View Details",
      button2:"Add",
      image: require("../Images/choose4.jpg")
    }
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.Title}</Text>
        <Text style={styles.subtitle}>{item.subtitle1}</Text>
        <Text style={styles.subtitle}>{item.subtitle2}</Text>
        <TouchableOpacity>
          <Text style={styles.button1}>{item.button1}</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
        <TouchableOpacity style={styles.addButton} onPress={() =>{navigation.navigate("Productscreen")}}>
          <Text style={styles.button2}>{item.button2}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView 
      showsVerticalScrollIndicator={false} 
      style={[styles.container, { paddingTop: insets.top }]}
      contentContainerStyle={{ paddingBottom: insets.bottom + 20 }}
    >
      <Text style={styles.header}>Choose Your Slot Now</Text>
      
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        scrollEnabled={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 30,
    color: '#333',
    marginBottom:"15%"
  },
  itemContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    
  },
  textContainer: {
    flex: 1,
    marginRight: 15,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 2,
    color: '#2c3e50',
  },
  subtitle: {
    fontSize: 12.5,
    color: '#7f8c8d',
    
  },
  button1: {
    color: 'blue',
    fontWeight: '500',
    marginTop: 5,
    fontSize: 14,
  },
  imageContainer: {
    alignItems: 'flex-end',
  },
  image: {
    height: 95,
    width: 85,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  addButton: {
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 15,
  marginTop:"-15%",
  marginRight:"13%"
  },
  button2: {
    color: 'blue',
    fontWeight: '500',
    fontSize: 14,
  },
});

export default Chooseslot;