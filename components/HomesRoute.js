import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Carousel, { Pagination } from "react-native-snap-carousel";

import HomeDetails from "./HomeDetails";

import categories from "../data/categoriesData";
import homes from "../data/homesData";
import styles from "../styles/styles";
import { sliderWidth } from "../constants/dimensions";
import { useNavigation } from "@react-navigation/native";

const HomesRoute = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(new Array(10).fill(0));
  const [likedHomes, setLikedHomes] = useState(new Array(10).fill(false));
  const navigation = useNavigation();

  const handleSnapToItem = (index, homeIndex) => {
    const newActiveSlide = [...activeSlide];
    newActiveSlide[homeIndex] = index;
    setActiveSlide(newActiveSlide);
  };

  const toggleLikeHome = (index) => {
    const newLikedHomes = [...likedHomes];
    newLikedHomes[index] = !newLikedHomes[index];
    setLikedHomes(newLikedHomes);
  };

  const openHomeDetails = (home) => {
    navigation.navigate("HomeDetails", { home });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <MaterialCommunityIcons name="magnify" size={24} color="black" />
          <TextInput style={styles.searchInput} placeholder="Where to?" />
          <TouchableOpacity style={styles.filterIconContainer}>
            <View style={styles.filterIcon}>
              <MaterialCommunityIcons
                name="filter-variant"
                size={24}
                color="black"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView horizontal={true} style={styles.iconContainer}>
        {categories.map((category, index) => {
          return (
            <TouchableOpacity
              onPress={() => setSelectedIndex(index)}
              key={index}
            >
              <View style={styles.iconCard}>
                <MaterialCommunityIcons
                  name={category.icon}
                  size={32}
                  color={selectedIndex === index ? "black" : "grey"}
                />
                <Text
                  style={
                    selectedIndex === index
                      ? styles.iconTextSelected
                      : styles.iconTextUnselected
                  }
                >
                  {category.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      <ScrollView>
        {homes.map((home, homeIndex) => (
          <View style={styles.homeCard} key={homeIndex}>
            <View style={styles.carouselContainer}>
              <Carousel
                data={home.imageUrls}
                renderItem={({ item }) => (
                  <>
                    <TouchableOpacity
                      onPress={() => openHomeDetails(home)}
                    >
                      <Image style={styles.homeImage} source={{ uri: item }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => toggleLikeHome(homeIndex)}
                      style={[styles.likeIconBackground, likedHomes[homeIndex] ? styles.whiteBorder : {}]}
                    >
                      <MaterialCommunityIcons
                        name={likedHomes[homeIndex] ? "heart" : "heart-outline"}
                        size={24}
                        color={likedHomes[homeIndex] ? "#FF4081" : "white"}
                        style={styles.likeIcon}
                      />
                    </TouchableOpacity>
                  </>
                )}
                sliderWidth={sliderWidth}
                itemWidth={sliderWidth}
                onSnapToItem={(index) => handleSnapToItem(index, homeIndex)}
              />

              <Pagination
                dotsLength={home.imageUrls.length}
                activeDotIndex={activeSlide[homeIndex]}
                containerStyle={styles.paginationContainer}
                dotStyle={{
                  width: 6,
                  height: 6,
                  borderRadius: 3,
                  marginHorizontal: 0,
                  backgroundColor: "rgba(255, 255, 255, 0.92)",
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
              />
            </View>
            <View style={styles.textContainer}>
              <View style={styles.detailsContainer}>
                <Text style={styles.name}>{home.name}</Text>
                <Text style={styles.homeDetails}>
                  Landlord: {home.landlord}
                </Text>
                <Text style={styles.homeDetails}>Lease: {home.lease}</Text>
                <Text style={styles.homeCost}>Cost: {home.cost}</Text>
              </View>
              <View style={styles.ratingContainer}>
                <MaterialCommunityIcons name="star" size={18} color="#FF4081" />
                <Text style={styles.ratingText}>{home.rating.toFixed(1)}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomesRoute;
