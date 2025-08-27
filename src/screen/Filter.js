import React, { useState, useRef } from 'react';
import { 
  View, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  ScrollView,
  PanResponder,
  Dimensions
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon1 from 'react-native-vector-icons/Feather';

const Filter = () => {
  const insets = useSafeAreaInsets();
  const [radius, setRadius] = useState(50);
  const trackRef = useRef(null);
  const trackLayout = useRef({ x: 0, width: 0 });
  const screenWidth = Dimensions.get('window').width;

  // PanResponder for slider functionality
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (e) => {
        if (trackRef.current) {
          trackRef.current.measure((x, y, width, pageX, pageY) => {
            trackLayout.current = {
              x: pageX,
              width: width,
            };
            updateSliderPosition(e.nativeEvent.pageX);
          });
        }
      },
      onPanResponderMove: (e) => {
        updateSliderPosition(e.nativeEvent.pageX);
      },
    })
  ).current;

  const updateSliderPosition = (moveX) => {
    const { x, width } = trackLayout.current;
    let newPosition = ((moveX - x) / width) * 100;
    newPosition = Math.max(0, Math.min(100, newPosition));
    setRadius(newPosition);
  };

  return (
    <ScrollView 
      showsVerticalScrollIndicator={false} 
      style={[styles.container, { paddingTop: insets.top }]}
      contentContainerStyle={{ paddingBottom: insets.bottom + 60 }}
    >
      {/* Filter By Choice Header */}
      <Text style={styles.headerText}>Filter By Choice</Text>
      
      {/* Search By Location */}
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchIcon}>
          <Icon1 name="search" size={22} color="grey" />
        </TouchableOpacity>
        <TextInput 
          placeholder="Search By Location"
          placeholderTextColor="#888"
          style={styles.searchInput}
        />
      </View>
      
      {/* Search By Radius */}
      <Text style={styles.sectionTitle}>Search By Radius</Text>
      
      {/* Radius Slider */}
      <View style={styles.sliderContainer}>
        <Text style={styles.radiusLabel}>0 km</Text>
        <View 
          ref={trackRef}
          style={styles.sliderWrapper}
          collapsable={false}
          {...panResponder.panHandlers}
        >
          <View style={styles.sliderTrack}>
            <View style={[styles.sliderFill, { width: `${radius}%` }]} />
          </View>
          <View style={[styles.sliderThumb, { left: `${radius}%` }]} />
          <View style={[styles.valueContainer, { left: `${radius}%` }]}>
            <Text style={styles.valueText}>{Math.round(radius)} km</Text>
          </View>
        </View>
        <Text style={styles.radiusLabel1}>100 km</Text>
      </View>
      
      {/* Filter Section */}
      <Text style={styles.sectionTitle}>Filter By</Text>
      
      {/* Filter Rows */}
      <TouchableOpacity style={styles.filterRow}>
        <Text style={styles.filterLabel}>Price</Text>
        <TouchableOpacity style={styles.plusButton}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.filterRow}>
        <Text style={styles.filterLabel}>Rating</Text>
        <TouchableOpacity style={styles.plusButton}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.filterRow}>
        <Text style={styles.filterLabel}>Relevant</Text>
        <TouchableOpacity style={styles.plusButton}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.filterRow}>
        <Text style={styles.filterLabel}>Time To Deliver</Text>
        <TouchableOpacity style={styles.plusButton}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.filterRow}>
        <Text style={styles.filterLabel}>Offers</Text>
        <TouchableOpacity style={styles.plusButton}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.filterRow}>
        <Text style={styles.filterLabel}>Bazarway Shield</Text>
        <TouchableOpacity style={styles.plusButton}>
          <Text style={styles.plusText}>+</Text>
        </TouchableOpacity>
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
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  searchContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 43,
    marginBottom: 20,
  elevation:5
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 16.5,
    fontWeight: '500',
    marginBottom: 15,
    color: '#333',
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  sliderWrapper: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  sliderTrack: {
    height: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    width: '100%',
  },
  sliderFill: {
    height: '100%',
    backgroundColor: 'black',
    borderRadius: 2,
  },
  sliderThumb: {
    position: 'absolute',
    width: 13,
    height: 13,
    borderRadius: 12,
    backgroundColor: 'black',
    marginLeft: -1,
    elevation: 5,
    top:"20%"
  },
  valueContainer: {
    
    top: 10,
    width: 50,
    marginLeft: -25,
    alignItems: 'center',
  },
  valueText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
  radiusLabel: {
    fontWeight: "500",
    fontSize: 13,
    color: '#555',
    top:"-18%"
  },
  radiusLabel1: {
    fontWeight: "500",
    fontSize: 13,
    color: '#555',
    top:"-18%",
    marginLeft:"2%"
  },
  filterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 12,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  filterLabel: {
    fontSize: 15,
    fontWeight: "500",
    color: '#333',
  },
  plusButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#aaa',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  plusText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#555',
  },
});

export default Filter;