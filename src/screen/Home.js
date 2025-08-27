import { useNavigation } from '@react-navigation/native';
import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Image,
  Text, 
  ScrollView,
  Dimensions,
  Animated,
  PanResponder,
  FlatList
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PROFILE_PHOTO = require('../Images/profilephoto.jpg'); 
const GOLD_ICON = require('../Images/Bazzrwayicon.jpg');

const Home = () => {
  const insets = useSafeAreaInsets();
  const screenWidth = Dimensions.get('window').width;
  const navigation = useNavigation()
  
  // State for Review & Ratings
  const [activeTab, setActiveTab] = useState('Daily');
  
  // Reviews data
  const reviews = [
    { 
      id: 1, 
      name: 'David Brown', 
      image: require("../Images/profilephoto.jpg"),
      rating: 5,
      comment: 'Great Service And High Quality Work', 
      time: '2 Days ago' 
    },
    { 
      id: 2, 
      name: 'Sarah Johnson', 
      image: require("../Images/profilephoto.jpg"),
      rating: 4,
      comment: 'Professional and timely service', 
      time: '1 Week ago' 
    },
    { 
      id: 3, 
      name: 'Michael Chen', 
      image: require("../Images/profilephoto.jpg"),
      rating: 5,
      comment: 'Exceeded my expectations', 
      time: '3 Days ago' 
    },
    { 
      id: 4, 
      name: 'Emma Wilson', 
      image: require("../Images/profilephoto.jpg"),
      rating: 4,
      comment: 'Good value for money', 
      time: '5 Days ago' 
    },
    { 
      id: 5, 
      name: 'James Miller', 
      image: require("../Images/profilephoto.jpg"),
      rating: 5,
      comment: 'Highly recommended!', 
      time: '1 Day ago' 
    }
  ];

  // Carousel States and Refs
  const [currentIndex, setCurrentIndex] = useState(0);
  const pan = useRef(new Animated.ValueXY()).current;
  const scrollOffset = useRef(0);
  const autoSlideTimer = useRef(null);
  const currentIndexRef = useRef(currentIndex);
  
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const pan1 = useRef(new Animated.ValueXY()).current;
  const scrollOffset1 = useRef(0);
  const autoSlideTimer1 = useRef(null);
  const currentIndexRef1 = useRef(currentIndex1);
  
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const pan2 = useRef(new Animated.ValueXY()).current;
  const scrollOffset2 = useRef(0);
  const autoSlideTimer2 = useRef(null);
  const currentIndexRef2 = useRef(currentIndex2);

  const [currentIndex3, setCurrentIndex3] = useState(0);
  const pan3 = useRef(new Animated.ValueXY()).current;
  const scrollOffset3 = useRef(0);
  const autoSlideTimer3 = useRef(null);
  const currentIndexRef3 = useRef(currentIndex3);
  
  const [currentIndex4, setCurrentIndex4] = useState(0);
  const pan4 = useRef(new Animated.ValueXY()).current;
  const scrollOffset4 = useRef(0);
  const autoSlideTimer4 = useRef(null);
  const currentIndexRef4 = useRef(currentIndex4);
  
  const [currentIndex5, setCurrentIndex5] = useState(0);
  const pan5 = useRef(new Animated.ValueXY()).current;
  const scrollOffset5 = useRef(0);
  const autoSlideTimer5 = useRef(null);
  const currentIndexRef5 = useRef(currentIndex5);

  // Update refs when state changes
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    currentIndexRef1.current = currentIndex1;
  }, [currentIndex1]);

  useEffect(() => {
    currentIndexRef2.current = currentIndex2;
  }, [currentIndex2]);

  useEffect(() => {
    currentIndexRef3.current = currentIndex3;
  }, [currentIndex3]);

  useEffect(() => {
    currentIndexRef4.current = currentIndex4;
  }, [currentIndex4]);

  useEffect(() => {
    currentIndexRef5.current = currentIndex5;
  }, [currentIndex5]);

  // Carousel items
  const carouselItems = [
    { id: 1, image: require("../Images/Carousel1.jpg"), text: "Get all your needs only on Bazarway" },
    { id: 2, image: require("../Images/Carousel1.jpg"), text: "One-stop shop for all your requirements" },
    { id: 3, image: require("../Images/Carousel1.jpg"), text: "Get all your needs only on Bazarway" },
    { id: 4, image: require("../Images/Carousel1.jpg"), text: "One-stop shop for all your requirements" }
  ];

  const carouselItems1 = [
    { id: 1, image: require("../Images/Carousel2.webp"), text: "Beauty & Wellness" },
    { id: 2, image: require("../Images/Carousel2.webp"), text: "Beauty & Wellness" },
    { id: 3, image: require("../Images/Carousel2.webp"), text: "Beauty & Wellness" },
    { id: 4, image: require("../Images/Carousel2.webp"), text: "Beauty & Wellness" }
  ];

  const carouselItems2 = [
    { id: 1, image: require("../Images/Carousel3.jpg"), text: "Wanna Organize your party!" },
    { id: 2, image: require("../Images/Carousel3.jpg"), text: "Our Event organizers Are here." },
    { id: 3, image: require("../Images/Carousel3.jpg"), text: "Wanna Organize your party!" },
    { id: 4, image: require("../Images/Carousel3.jpg"), text: "Our Event organizers Are here." }
  ];

  const carouselItems3 = [
    { id: 1, image: require("../Images/Carousel4.jpg"), text: "Beauty & Wellness" },
    { id: 2, image: require("../Images/Carousel4.jpg"), text: "Beauty & Wellness" },
    { id: 3, image: require("../Images/Carousel4.jpg"), text: "Beauty & Wellness" },
    { id: 4, image: require("../Images/Carousel4.jpg"), text: "Beauty & Wellness" }
  ];

  const carouselItems4 = [
    { id: 1, image: require("../Images/Carousel5.jpg"), text: "Wanna Do Wedding Shoot!" },
    { id: 2, image: require("../Images/Carousel5.jpg"), text: "Our Camera Men Are here" },
    { id: 3, image: require("../Images/Carousel5.jpg"), text: "Wanna Do Wedding Shoot!" },
    { id: 4, image: require("../Images/Carousel5.jpg"), text: "Our Camera Men Are here" }
  ];

  const carouselItems5 = [
    { id: 1, image: require("../Images/carousel6.jpg"), text: "Login for more offers" },
    { id: 2, image: require("../Images/carousel6.jpg"), text: "Login for more offers" },
    { id: 3, image: require("../Images/carousel6.jpg"), text: "Login for more offers" },
    { id: 4, image: require("../Images/carousel6.jpg"), text: "Login for more offers" }
  ];

  // Services items
  const Personal = [
    { id: 1, image: require("../Images/personal1.png"), text: "Salon For Women" },
    { id: 2, image: require("../Images/personal2.png"), text: "Salon For Men" },
    { id: 3, image: require("../Images/personal3.png"), text: "Hair & Skin" },
    { id: 4, image: require("../Images/personal4.png"), text: "Massage For Women" },
    { id: 5, image: require("../Images/personal5.png"), text: "Massage For men" }
  ];

  const Home = [
    { id: 1, image: require("../Images/home1.jpg"), text: "Cleaning Services" },
    { id: 2, image: require("../Images/home2.jpg"), text: "Repair & Maintenance" },
    { id: 3, image: require("../Images/home3.jpg"), text: "Home Improvement" },
    { id: 4, image: require("../Images/home4.jpg"), text: "Handyman Services" },
    { id: 5, image: require("../Images/home5.jpg"), text: "Lawn Care" },
    { id: 6, image: require("../Images/home6.jpg"), text: "Landscaping" },
    { id: 7, image: require("../Images/home7.jpg"), text: "AC Repair" },
    { id: 8, image: require("../Images/home8.jpg"), text: "Appliances Repair" }
  ];

  const Most = [
    { id: 1, image: require("../Images/most1.jpg"), text: "Hair Care" },
    { id: 2, image: require("../Images/most2.jpg"), text: "Nails" },
    { id: 3, image: require("../Images/most3.jpg"), text: "Head Massage" },
    { id: 4, image: require("../Images/most4.jpg"), text: "Manicure/Pedicure" },
    { id: 5, image: require("../Images/most5.jpg"), text: "PVC Installment" },
    { id: 6, image: require("../Images/most6.jpg"), text: "Bed-Bugs Control" },
    { id: 7, image: require("../Images/most7.jpg"), text: "AC Repair" }
  ];

  const More = [
    { id: 1, image: require("../Images/more1.jpg"), text: "Home Tutor" },
    { id: 2, image: require("../Images/more2.jpg"), text: "Mehndi Designer" },
    { id: 3, image: require("../Images/more3.jpg"), text: "Chef" },
    { id: 4, image: require("../Images/more4.jpg"), text: "White Washer" },
    { id: 5, image: require("../Images/more5.jpg"), text: "Doctor" },
    { id: 6, image: require("../Images/more6.jpg"), text: "Photography" },
    { id: 7, image: require("../Images/more7.jpg"), text: "Event Organizer" },
    { id: 8, image: require("../Images/more8.jpg"), text: "Tatto Artist" }
  ];

  const Monthly = [
    { id: 1, image: require("../Images/monthly1.jpg"), text: "Watchman" },
    { id: 2, image: require("../Images/monthly2.jpg"), text: "Care Taker" },
    { id: 3, image: require("../Images/monthly3.jpg"), text: "Chef" },
    { id: 4, image: require("../Images/monthly4.jpg"), text: "Driver" },
    { id: 5, image: require("../Images/monthly5.jpg"), text: "Peon" },
    { id: 6, image: require("../Images/monthly6.jpg"), text: "Pest Control" }
  ];

  // Reset position functions
  const resetFn = (panRef, scrollOffsetRef) => {
    Animated.spring(panRef, {
      toValue: { x: scrollOffsetRef.current, y: 0 },
      useNativeDriver: true,
      tension: 30,
      friction: 8
    }).start();
  };

  const resetPosition = () => resetFn(pan, scrollOffset);
  const resetPosition1 = () => resetFn(pan1, scrollOffset1);
  const resetPosition2 = () => resetFn(pan2, scrollOffset2);
  const resetPosition3 = () => resetFn(pan3, scrollOffset3);
  const resetPosition4 = () => resetFn(pan4, scrollOffset4);
  const resetPosition5 = () => resetFn(pan5, scrollOffset5);

  // Generic slide navigation functions
  const createSlideNavigator = (panRef, scrollOffsetRef, setFn, items, resetFn) => {
    return (index) => {
      const newIndex = Math.max(0, Math.min(index, items.length - 1));
      if (newIndex === scrollOffsetRef.current / -screenWidth) {
        resetFn();
        return;
      }
      setFn(newIndex);
      scrollOffsetRef.current = -screenWidth * newIndex;
      Animated.spring(panRef, {
        toValue: { x: scrollOffsetRef.current, y: 0 },
        useNativeDriver: true,
        tension: 30,
        friction: 8
      }).start();
    };
  };

  // Initialize slide navigators
  const goToSlide = createSlideNavigator(pan, scrollOffset, setCurrentIndex, carouselItems, resetPosition);
  const goToSlide1 = createSlideNavigator(pan1, scrollOffset1, setCurrentIndex1, carouselItems1, resetPosition1);
  const goToSlide2 = createSlideNavigator(pan2, scrollOffset2, setCurrentIndex2, carouselItems2, resetPosition2);
  const goToSlide3 = createSlideNavigator(pan3, scrollOffset3, setCurrentIndex3, carouselItems3, resetPosition3);
  const goToSlide4 = createSlideNavigator(pan4, scrollOffset4, setCurrentIndex4, carouselItems4, resetPosition4);
  const goToSlide5 = createSlideNavigator(pan5, scrollOffset5, setCurrentIndex5, carouselItems5, resetPosition5);

  // Create pan responders for all carousels
  const createPanResponder = (panRef, currentIndexRef, goToSlideFn, resetFn) => {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        panRef.setValue({ x: gestureState.dx, y: 0 });
      },
      onPanResponderRelease: (_, gestureState) => {
        if (Math.abs(gestureState.dx) > screenWidth * 0.2) {
          if (gestureState.dx > 0) {
            goToSlideFn(currentIndexRef.current - 1);
          } else {
            goToSlideFn(currentIndexRef.current + 1);
          }
        } else {
          resetFn();
        }
      }
    });
  };

  // Initialize pan responders
  const panResponder = useRef(createPanResponder(
    pan, currentIndexRef, goToSlide, resetPosition
  )).current;
  
  const panResponder1 = useRef(createPanResponder(
    pan1, currentIndexRef1, goToSlide1, resetPosition1
  )).current;
  
  const panResponder2 = useRef(createPanResponder(
    pan2, currentIndexRef2, goToSlide2, resetPosition2
  )).current;
  
  const panResponder3 = useRef(createPanResponder(
    pan3, currentIndexRef3, goToSlide3, resetPosition3
  )).current;
  
  const panResponder4 = useRef(createPanResponder(
    pan4, currentIndexRef4, goToSlide4, resetPosition4
  )).current;
  
  const panResponder5 = useRef(createPanResponder(
    pan5, currentIndexRef5, goToSlide5, resetPosition5
  )).current;

  // Auto slide setup for all carousels
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  useEffect(() => {
    startAutoSlide1();
    return () => stopAutoSlide1();
  }, []);

  useEffect(() => {
    startAutoSlide2();
    return () => stopAutoSlide2();
  }, []);

  useEffect(() => {
    startAutoSlide3();
    return () => stopAutoSlide3();
  }, []);

  useEffect(() => {
    startAutoSlide4();
    return () => stopAutoSlide4();
  }, []);

  useEffect(() => {
    startAutoSlide5();
    return () => stopAutoSlide5();
  }, []);

  // Generic auto slide functions
  const createAutoSlide = (timerRef, currentIndexRef, goToSlideFn, items) => {
    return {
      start: () => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
          const nextIndex = (currentIndexRef.current + 1) % items.length;
          goToSlideFn(nextIndex);
        }, 3000);
      },
      stop: () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
      }
    };
  };

  // Initialize auto slide controllers
  const autoSlideCtrl = createAutoSlide(autoSlideTimer, currentIndexRef, goToSlide, carouselItems);
  const autoSlideCtrl1 = createAutoSlide(autoSlideTimer1, currentIndexRef1, goToSlide1, carouselItems1);
  const autoSlideCtrl2 = createAutoSlide(autoSlideTimer2, currentIndexRef2, goToSlide2, carouselItems2);
  const autoSlideCtrl3 = createAutoSlide(autoSlideTimer3, currentIndexRef3, goToSlide3, carouselItems3);
  const autoSlideCtrl4 = createAutoSlide(autoSlideTimer4, currentIndexRef4, goToSlide4, carouselItems4);
  const autoSlideCtrl5 = createAutoSlide(autoSlideTimer5, currentIndexRef5, goToSlide5, carouselItems5);

  // Start/stop functions
  const startAutoSlide = autoSlideCtrl.start;
  const stopAutoSlide = autoSlideCtrl.stop;
  const startAutoSlide1 = autoSlideCtrl1.start;
  const stopAutoSlide1 = autoSlideCtrl1.stop;
  const startAutoSlide2 = autoSlideCtrl2.start;
  const stopAutoSlide2 = autoSlideCtrl2.stop;
  const startAutoSlide3 = autoSlideCtrl3.start;
  const stopAutoSlide3 = autoSlideCtrl3.stop;
  const startAutoSlide4 = autoSlideCtrl4.start;
  const stopAutoSlide4 = autoSlideCtrl4.stop;
  const startAutoSlide5 = autoSlideCtrl5.start;
  const stopAutoSlide5 = autoSlideCtrl5.stop;

  // Render carousel function
  const renderCarousel = (items, panRef, panResponderRef, overlayStyle, textStyle) => {
    return (
      <Animated.View 
        style={[
          styles.carouselContainer, 
          { 
            transform: [{ translateX: panRef.x }],
            width: screenWidth * items.length
          }
        ]}
        {...panResponderRef.panHandlers}
      >
        {items.map(item => (
          <View key={item.id} style={[styles.carouselItem, { width: screenWidth }]}>
            <Image source={item.image} style={styles.carouselImage} resizeMode="cover" />
            <View style={overlayStyle}>
              <Text style={textStyle}>{item.text}</Text>
            </View>
          </View>
        ))}
      </Animated.View>
    );
  };

  // Render pagination
  const renderPagination = (currentIndexState, items, goToFn) => (
    <View style={styles.pagination}>
      {items.map((_, index) => (
        <TouchableOpacity key={index} onPress={() => goToFn(index)}>
          <View style={[
            styles.paginationDot,
            index === currentIndexState && styles.activeDot
          ]} />
        </TouchableOpacity>
      ))}
    </View>
  );

  // Render service item
  const renderPersonalItem = ({ item }) => (
    <TouchableOpacity style={{marginTop:10}} onPress={() =>{navigation.navigate("Chooseslot")}}>
      <View style={styles.personalItem}>
        <Image source={item.image} style={styles.personalImage} resizeMode="cover" />
        <Text style={styles.personalText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView 
      showsVerticalScrollIndicator={false} 
      style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}
    >
      {/* Header Row */}
      <View style={styles.headerRow}>
        <View style={styles.profileSection}>
          <Image source={PROFILE_PHOTO} style={styles.profileImage} />
          <Text style={styles.profileName}>Rohit Mehra</Text>
        </View>
        
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <AntDesign name="enviromento" size={22} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconSpacing}>
            <AntDesign name="bells" size={22} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="bag-outline" size={22} color="#333" />
          </TouchableOpacity>
        </View>
      </View>
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <AntDesign name="search1" size={20} color="#888" style={styles.searchIcon} />
        </TouchableOpacity>
        <TextInput 
          placeholder="Search by products....."
          placeholderTextColor="#888"
          style={styles.searchInput}
        />
        <TouchableOpacity onPress={() => {navigation.navigate("Filter")}} >
         <Ionicons name="filter-sharp" size={20} color="#888" style={styles.searchIcon} />
         </TouchableOpacity>
      </View>
      
      {/* Horizontal Line */}
      <View style={[styles.horizontalLine, { width: screenWidth }]} />
      
      {/* Gold Services Banner */}
      <TouchableOpacity style={styles.goldBanner}>
        <View style={styles.bannerContent}>
          <Image source={GOLD_ICON} style={styles.goldIcon} />
          <View style={styles.textContainer}>
            <Text style={styles.bannerTitle}>
              Gold free Services Extended For New Users
            </Text>
            <View style={styles.knowMoreRow}>
              <Text style={styles.knowMoreText}>Know More</Text>
              <FontAwesome6 
                name="arrow-right-long" 
                size={17} 
                color="#C3A955" 
                style={styles.arrowIcon}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      {/* Carousel 1 */}
      <View style={styles.carouselWrapper}>
        <View style={styles.carouselViewport}>
          {renderCarousel(
            carouselItems, 
            pan, 
            panResponder, 
            styles.overlay, 
            styles.overlayText
          )}
        </View>
        {renderPagination(currentIndex, carouselItems, goToSlide)}
      </View>

      {/* Personal Care Section */}
      <View style={styles.personalSection}>
        <Text style={styles.sectionTitle}>Personal Services</Text>
        <FlatList
          data={Personal}
          numColumns={3}
          scrollEnabled={false}
          keyExtractor={item => item.id.toString()}
          renderItem={renderPersonalItem}
          contentContainerStyle={styles.personalList}
        />
      </View>

      {/* Carousel 2 */}
      <View style={styles.carouselWrapper}>
        <View style={styles.carouselViewport}>
          {renderCarousel(
            carouselItems1, 
            pan1, 
            panResponder1, 
            styles.overlay, 
            styles.overlayText
          )}
        </View>
        {renderPagination(currentIndex1, carouselItems1, goToSlide1)}
      </View>

      {/* Home Services Section */}
      <View style={styles.personalSection}>
        <Text style={styles.sectionTitle}>Home Services</Text>
        <FlatList
          data={Home}
          numColumns={3}
          scrollEnabled={false}
          keyExtractor={item => item.id.toString()}
          renderItem={renderPersonalItem}
          contentContainerStyle={styles.personalList}
        />
      </View>
      
      {/* Most Booked Services Section */}
      <View style={styles.personalSection}>
        <Text style={styles.sectionTitle}>Most Booked Services</Text>
        <FlatList
          data={Most}
          numColumns={3}
          scrollEnabled={false}
          keyExtractor={item => item.id.toString()}
          renderItem={renderPersonalItem}
          contentContainerStyle={styles.personalList}
        />
      </View>

      {/* Carousel 3 */}
      <View style={styles.carouselWrapper1}>
        <View style={styles.carouselViewport}>
          {renderCarousel(
            carouselItems2, 
            pan2, 
            panResponder2, 
            styles.overlay1, 
            styles.overlayText1
          )}
        </View>
        {renderPagination(currentIndex2, carouselItems2, goToSlide2)}
      </View>

      {/* More Services Section */}
      <View style={styles.personalSection}>
        <Text style={styles.sectionTitle}>More Services</Text>
        <FlatList
          data={More}
          numColumns={3}
          scrollEnabled={false}
          keyExtractor={item => item.id.toString()}
          renderItem={renderPersonalItem}
          contentContainerStyle={styles.personalList}
        />
      </View>

      {/* Monthly Services Section */}
      <View style={styles.personalSection}>
        <Text style={styles.sectionTitle}>Monthly Services</Text>
        <FlatList
          data={Monthly}
          numColumns={3}
          scrollEnabled={false}
          keyExtractor={item => item.id.toString()}
          renderItem={renderPersonalItem}
          contentContainerStyle={styles.personalList}
        />
      </View>

      {/* Carousel 4 */}
      <View style={styles.carouselWrapper}>
        <View style={styles.carouselViewport}>
          {renderCarousel(
            carouselItems3, 
            pan3, 
            panResponder3, 
            styles.overlay, 
            styles.overlayText
          )}
        </View>
        {renderPagination(currentIndex3, carouselItems3, goToSlide3)}
      </View>

      {/* Carousel 5 */}
      <View style={styles.carouselWrapper1}>
        <View style={styles.carouselViewport}>
          {renderCarousel(
            carouselItems4, 
            pan4, 
            panResponder4, 
            styles.overlay, 
            styles.overlayText2
          )}
        </View>
        {renderPagination(currentIndex4, carouselItems4, goToSlide4)}
      </View>

      {/* Carousel 6 */}
      <View style={styles.carouselWrapper2}>
        <View style={styles.carouselViewport}>
          {renderCarousel(
            carouselItems5, 
            pan5, 
            panResponder5, 
            styles.overlay, 
            styles.overlayText
          )}
        </View>
        {renderPagination(currentIndex5, carouselItems5, goToSlide5)}
      </View>

      {/* Review & Ratings Section */}
      <View style={styles.reviewSection}>
        {/* Section Header */}
        <View style={styles.reviewHeader}>
          <Text style={styles.reviewHeaderText}>Reviews & Ratings</Text>
          <View style={styles.headerLine} />
        </View>

        {/* Rating Summary and Tabs */}
        <View style={styles.ratingTabsRow}>
          {/* Rating Summary */}
          <View style={styles.ratingSummary}>
            <Text style={styles.ratingValue}>4.7</Text>
            <View style={styles.starsContainer}>
              {[...Array(5)].map((_, i) => (
                <AntDesign key={i} name="star" size={16} color="#FFD700" />
              ))}
            </View>
            <Text style={styles.reviewCount}>120 Reviews</Text>
          </View>

          {/* Tabs */}
          <View style={styles.tabsContainer}>
            {['Daily', 'Weekly', 'Monthly'].map((tab) => (
              <TouchableOpacity 
                key={tab} 
                onPress={() => setActiveTab(tab)}
                style={styles.tabItem}
              >
                <Text style={[
                  styles.tabText, 
                  activeTab === tab && styles.activeTabText
                ]}>
                  {tab}
                </Text>
                {activeTab === tab && <View style={styles.tabLine} />}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Reviews List */}
        <FlatList
          data={reviews}
          scrollEnabled={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.reviewItem}>
              <View style={styles.reviewHeaderRow}>
                <Image source={item.image} style={styles.reviewerImage} />
                <Text style={styles.reviewerName}>{item.name}</Text>
              </View>
              
              <View style={styles.starsRow}>
                {[...Array(5)].map((_, i) => (
                  <AntDesign 
                    key={i} 
                    name={i < item.rating ? "star" : "staro"} 
                    size={16} 
                    color="#FFD700" 
                  />
                ))}
              </View>
              
              <Text style={styles.reviewText}>{item.comment}</Text>
              <Text style={styles.reviewTime}>{item.time}</Text>
            </View>
          )}
        />
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: "10%",
    
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: "1%",
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 8,
  },
  profileName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginHorizontal: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    paddingVertical: 0,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: 'lightgrey',
    marginVertical: 15,
    alignSelf: 'center',
  },
  goldBanner: {
    backgroundColor: '#FFF9E5',
    borderRadius: 12,
    padding: 8,
    marginBottom: 15,
  },
  bannerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goldIcon: {
    width: 45,
    height: 45,
    borderRadius: 30,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  bannerTitle: {
    color: '#C3A955',
    fontSize: 12.5,
    fontWeight: '500',
    marginBottom: 2,
  },
  knowMoreRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  knowMoreText: {
    color: '#C3A955',
    fontSize: 12.5,
    fontWeight: '500',
    marginRight: 4,
  },
  arrowIcon: {
    marginTop: 2,
    marginLeft: 5
  },
  carouselWrapper: {
    marginTop: 10,
    marginBottom: 30,
    height: 200,
    overflow: 'hidden',
    borderRadius:20
  },
  carouselWrapper2: {
    marginTop: 10,
    marginBottom: 30,
    height: 150,
    overflow: 'hidden',
    borderRadius:20
  },
  carouselWrapper1: {
    marginTop: 10,
    marginBottom: 30,
    height: 270,
    overflow: 'hidden',
    borderRadius:20
  },
  carouselViewport: {
    flex: 1,
    overflow: 'hidden',
    borderRadius:20
  },
  carouselContainer: {
    flexDirection: 'row',
    height: '110%',
  },
  carouselItem: {
    height: '100%',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  overlay1: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    lineHeight: 30,
    elevation:5,
  },
  overlayText1: {
    color: '#73192D',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 30,
    elevation:5,
  },
  overlayText2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 30,
    elevation:5,
    textShadowOffset: { width: 1, height: 1 },
    textShadowColor: 'rgba(0,0,0,0.8)',
      textShadowRadius: 5,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#CCC',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#C3A955',
    width: 20,
  },
  personalSection: {
    marginBottom:"5%"
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  personalList: {
    justifyContent: 'center',
  },
  personalItem: {
    width: (Dimensions.get('window').width - 60) / 3,
    marginBottom: 15,
    marginRight: 10,
    alignItems: 'center',
  },
  personalImage: {
    width: '85%',
    height: 90,
    borderRadius: 20,
    marginBottom: 8,
  },
  personalText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
  reviewSection: {
    marginBottom: 30,
    marginHorizontal:1
  },
  reviewHeader: {
    backgroundColor: 'white',
    borderRadius: 18,
    padding: 18,
    alignItems: 'center',
    marginBottom: "4%",
    borderRadius:10
  },
  reviewHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  headerLine: {
    height: 1,
    backgroundColor: 'grey',
    width: '100%',
  },
  ratingTabsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  ratingSummary: {
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
    alignSelf:"center",padding:"11.5%"
  },
  ratingValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#C3A955',
    marginBottom: 5,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  reviewCount: {
    fontSize: 12,
    color: '#888',
  },
  tabsContainer: {
    backgroundColor: 'white',
    borderRadius:10,
    padding: 15,
    flex: 1,
    marginLeft: 10,
  },
  tabItem: {
    marginBottom: 10,
  },
  tabText: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
    paddingVertical: 5,
  },
  activeTabText: {
    color: '#C3A955',
    fontWeight: 'bold',
  },
  tabLine: {
    height: 2,
    backgroundColor: '#C3A955',
    width: '80%',
    alignSelf: 'center',
  },
  reviewItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    
  },
  reviewHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  reviewerImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  reviewerName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  starsRow: {
    flexDirection: 'row',
    marginBottom: 5,
  
  },
  reviewText: {
    fontSize: 13.5,
    color: '#333',
    marginBottom: 5,
    lineHeight: 20,
  },
  reviewTime: {
    fontSize: 12,
    color: '#888',
  },
});

export default Home;