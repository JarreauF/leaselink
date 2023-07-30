import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Rating } from 'react-native-ratings';

import categories from '../data/categoriesData';
import homes from '../data/homesData';
import styles from '../styles/styles';
import { sliderWidth } from '../constants/dimensions';

const HomesRoute = () => {
    

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [activeSlide, setActiveSlide] = useState(new Array(10).fill(0)); // For pagination
    const [likedHomes, setLikedHomes] = useState(new Array(10).fill(false)); // For like/unlike

  

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

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.searchBox}>
                    <MaterialCommunityIcons name="magnify" size={24} color="black" />
                    <TextInput 
                        style={styles.searchInput}
                        placeholder="Where to?"
                    />
                    <TouchableOpacity style={styles.filterIconContainer}>
                        <View style={styles.filterIcon}>
                            <MaterialCommunityIcons name="filter-variant" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView horizontal={true} style={styles.iconContainer}>
                {categories.map((category, index) => {
                    return (
                        <TouchableOpacity onPress={() => setSelectedIndex(index)} key={index}>
                            <View style={styles.iconCard}>
                                <MaterialCommunityIcons 
                                    name={category.icon} 
                                    size={32} 
                                    color={selectedIndex === index ? 'black' : 'grey'} 
                                />
                                <Text style={selectedIndex === index ? styles.iconTextSelected : styles.iconTextUnselected}>
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
                                        <Image style={styles.homeImage} source={{ uri: item }} />
                                        <TouchableOpacity onPress={() => toggleLikeHome(homeIndex)} activeOpacity={1}>
                                            <View style={styles.likeIconBackground}>
                                                <MaterialCommunityIcons 
                                                    name={likedHomes[homeIndex] ? "heart" : "heart-outline"} 
                                                    size={24} 
                                                    color={likedHomes[homeIndex] ? "#FF4081" : "black"} 
                                                    style={styles.likeIcon}
                                                />
                                            </View>
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
                                    marginHorizontal: 0, // Reduced this from 4 to 1
                                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                                }}
                                inactiveDotOpacity={0.4}
                                inactiveDotScale={0.6}
                            />
                        </View>
                        <View style={styles.textContainer}>
                            <View>
                                <Text style={styles.homeName}>{home.name}</Text>
                                <Text style={styles.homeDetails}>Landlord: {home.landlord}</Text>
                                <Text style={styles.homeDetails}>Lease: {home.lease}</Text>
                                <Text style={styles.homeCost}>Cost: {home.cost}</Text>
                            </View>
                            <Rating
                                type='star'
                                imageSize={20}
                                readonly
                                startingValue={home.rating} // Use the rating from your data
                                style={styles.rating}
                                tintColor="#FFFFFF" // This should match your background color
                                ratingColor="#FF4081"
                            />
                        </View>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>

    );
};


export default HomesRoute;



