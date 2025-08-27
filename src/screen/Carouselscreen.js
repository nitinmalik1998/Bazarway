import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, { useState, useRef } from "react";
import { 
  View, 
  StyleSheet, 
  Image, 
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Text,
  SafeAreaView
} from "react-native";

const { width, height } = Dimensions.get('window');
const IMAGE_HEIGHT_PERCENTAGE = 0.43; // Increased from 0.25 to 0.30
const CONTENT_HEIGHT_PERCENTAGE = 0.35;
const SLIDE_HEIGHT = (IMAGE_HEIGHT_PERCENTAGE + CONTENT_HEIGHT_PERCENTAGE) * height;

const Carouselscreen = () => {

  const navigation = useNavigation() 

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  
  const slides = [
    {
      image: require("../Images/Helloimage.jpg"),
      title: "Hello",
      subtitle: "Welcome to our platform  ",
      buttonText: "Let's Start"
    },
    {
      image: require("../Images/Readyimage.jpg"),
      title: "Ready?",
      subtitle: "Get started with amazing features",
      buttonText: "Continue"
    },
    {
      image: require("../Images/Helloimage.jpg"),
      title: "Explore",
      subtitle: "Discover new possibilities",
      buttonText: "Get Started"
    },
    {
      image: require("../Images/Readyimage.jpg"),
      title: "Join Now",
      subtitle: "Become a member today",
      buttonText: "Let's Start"
    }
  ];

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / width);
    setCurrentIndex(index);
  };

  const goToSlide = (index) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ x: index * width, animated: true });
    }
    setCurrentIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.slidesContainer}>
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleScroll}
        >
          {slides.map((slide, index) => (
            <View key={index} style={styles.slide}>
              <View style={styles.cardContainer}>
                <Image 
                  source={slide.image} 
                  style={styles.image} 
                  resizeMode="cover"
                />
                <View style={styles.contentContainer}>
                  <Text style={styles.title}>{slide.title}</Text>
                  <Text style={styles.subtitle}>{slide.subtitle}</Text>
                  <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate("TabNavigation")}}>
                    <Text style={styles.buttonText}>{slide.buttonText}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      
      {/* Pagination Indicators */}
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dot,
              currentIndex === index && styles.activeDot
            ]}
            onPress={() => goToSlide(index)}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    marginTop:"15%"
  },
  slidesContainer: {
    height: SLIDE_HEIGHT,
  },
  slide: {
    width,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: '80%',
  },
  image: {
    width: '100%',
    height: IMAGE_HEIGHT_PERCENTAGE * height,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  contentContainer: {
    height: CONTENT_HEIGHT_PERCENTAGE * height,
    backgroundColor: 'white',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 11,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginTop: 0,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: "8%",
    alignSelf: 'center',
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 20,
    backgroundColor: '#C7D6FB',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'blue',
  },
});

export default Carouselscreen;