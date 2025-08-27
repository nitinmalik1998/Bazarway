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

const Account = () => {
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get('window').width; 
  
  const accountDetails = [
    {
      id: '1',
      icon: 'phone',
      title: 'Phone Number',
      detail: '+1 (555) 123-4567'
    },
    {
      id: '2',
      icon: 'map-marker',
      title: 'Address',
      detail: '123 Main St, Anytown, USA'
    }
  ];

  const settings = [
    { id: '1', icon: 'account-edit', title: 'Edit Profile' },
    { id: '2', icon: 'map-marker-multiple', title: 'Saved Addresses' },
    { id: '3', icon: 'credit-card', title: 'Payment Methods' },
    { id: '4', icon: 'history', title: 'Order History' },
    { id: '5', icon: 'heart-outline', title: 'Wishlist' }
  ];

  const renderAccountItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name={item.icon} size={25} color="#1b1b1b" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDetail}>{item.detail}</Text>
      </View>
     
    </TouchableOpacity>
  );

  const renderSettingItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons name={item.icon} size={25} color="#1b1b1b" />
      </View>
      <Text style={[styles.itemTitle, {marginLeft: 15}]}>{item.title}</Text>
    
    </TouchableOpacity>
  );

  return (
    <ScrollView 
      showsVerticalScrollIndicator={false} 
      style={[
        styles.container, 
        { paddingTop: insets.top, paddingBottom: insets.bottom }
      ]}
    >
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image 
          source={require('../Images/profilephoto.jpg')} // Replace with your actual image path
          style={styles.profileImage}
        />
        <Text style={styles.name}>David Smith</Text>
        <Text style={styles.email}>davidsmith@gmail.com</Text>
      </View>

      {/* Account Details Section */}
      <Text style={styles.sectionHeader}>Account Details</Text>
      <FlatList
        data={accountDetails}
        renderItem={renderAccountItem}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        style={styles.listContainer}
      />

      {/* Settings Section */}
      <Text style={styles.sectionHeader}>Settings</Text>
      <FlatList
      
        data={settings}
        renderItem={renderSettingItem}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        style={styles.listContainer}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  
  },
  profileContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  profileImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginBottom: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 19,
    marginBottom: 15,
    marginLeft: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 10,
  
  },
  iconContainer: {
    backgroundColor: '#ddd7',
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight:"400"
  },
  itemDetail: {
    fontSize: 14,
    color: '#666',
    marginTop: 3,
  },
  rightIcon: {
    marginLeft: 'auto',
  },
  listContainer: {
    marginBottom: "12%",
  },
});

export default Account;