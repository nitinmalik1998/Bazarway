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

const Favourite = () => {
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get('window').width; 
  const imageWidth = screenWidth * 0.75;
  
  return (
    <ScrollView 
      showsVerticalScrollIndicator={false} 
      contentContainerStyle={styles.scrollContainer}
      style={[
        styles.container, 
        { paddingTop: insets.top, paddingBottom: insets.bottom }
      ]}
    >
      {/* Enhanced Image Container with Shadow */}
      <View style={[
        styles.imageContainer,
        { 
          width: imageWidth,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.2,
          shadowRadius: 20,
          elevation: 15
        }
      ]}>
        <Image 
          source={require("../Images/Favouritelistimage.png")} 
          style={[
            styles.image,
            { 
              width: imageWidth, 
              height: imageWidth * 1.55 // Maintain 3:2 aspect ratio
            }
          ]}
        />
       
      </View>

      {/* Enhanced Shop Button */}
      <TouchableOpacity style={styles.shopButton}>
        <Text style={styles.shopText}>Shop now</Text>
       
      </TouchableOpacity>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    paddingBottom: "15%",
    alignItems: 'center'
  },
  imageContainer: {
    borderRadius: 30,
    marginTop: '8%',
    marginBottom: "2%",
    backgroundColor: 'white',
    position: 'relative',
    overflow: 'visible'
  },
  image: {
    borderRadius: 30,
    resizeMode: 'cover',
    backgroundColor: '#e1e4e8',
  },
  
  
  shopButton: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: "30%",
    borderRadius: 10,
    marginTop: "5%",
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#4361ee',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10
  },
  shopText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginRight: 10
  },
 
});

export default Favourite;