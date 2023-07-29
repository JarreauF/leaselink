import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const screenWidth = Dimensions.get('window').width;
const sliderWidth = screenWidth * 0.91;
const itemHeight = 350; // Adjust this if your image height changes

const HomesRoute = () => {
    const categories = [
        { name: 'House', icon: 'home-city' },
        { name: 'Apartment', icon: 'office-building' },
        { name: 'Loft', icon: 'home-modern' },
        { name: 'Townhouse', icon: 'home-group' },
        { name: 'Condo', icon: 'home-outline' },
    ];

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [activeSlide, setActiveSlide] = useState(new Array(10).fill(0)); // For pagination
    const [likedHomes, setLikedHomes] = useState(new Array(10).fill(false)); // For like/unlike

    const homes = new Array(10).fill({
        imageUrls: [
            'https://source.unsplash.com/random?house',
            'https://source.unsplash.com/random?interior',
            'https://source.unsplash.com/random?livingroom',
            'https://source.unsplash.com/random?bedroom',
            'https://source.unsplash.com/random?kitchen',
        ],
        name: 'Placeholder Home',
        landlord: 'Landlord Name',
        lease: '12 months',
        cost: 'R1000/month',
    });

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
                                renderItem={({ item }) => <Image style={styles.homeImage} source={{ uri: item }} />}
                                sliderWidth={sliderWidth}
                                itemWidth={sliderWidth}
                                onSnapToItem={(index) => handleSnapToItem(index, homeIndex)}
                            />
                            <TouchableOpacity onPress={() => toggleLikeHome(homeIndex)} activeOpacity={1}>
                                <MaterialCommunityIcons 
                                    name={likedHomes[homeIndex] ? "heart" : "heart-outline"} 
                                    size={24} 
                                    color={likedHomes[homeIndex] ? "#FF4081" : "black"} 
                                    style={styles.likeIcon}
                                />
                            </TouchableOpacity>
                            <Pagination
                                dotsLength={home.imageUrls.length}
                                activeDotIndex={activeSlide[homeIndex]}
                                containerStyle={styles.paginationContainer}
                                dotStyle={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: 3,
                                    marginHorizontal: 4,
                                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                                }}
                                inactiveDotOpacity={0.4}
                                inactiveDotScale={0.6}
                            />
                        </View>
                        <Text style={styles.homeName}>{home.name}</Text>
                        <Text style={styles.homeDetails}>Landlord: {home.landlord}</Text>
                        <Text style={styles.homeDetails}>Lease: {home.lease}</Text>
                        <Text style={styles.homeDetails}>Cost: {home.cost}</Text>
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
    },

    searchContainer: {
        paddingHorizontal: 10,
        paddingTop: 10,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    searchBox: {
        backgroundColor: 'white',
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        height: 50,
        width: '90%',
    },

    searchInput: {
        flex: 1,
        paddingLeft: 10,
    },

    filterIconContainer: {
        paddingRight: 10,
    },

    filterIcon: {
        backgroundColor: 'white',
        borderRadius: 15,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        padding: 5,
        elevation: 5,
    },

    iconContainer: {
        marginTop: 10,
        paddingLeft: 20,
        marginBottom: 5,
        padding: 10
    },

    iconCard: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
    },

    iconTextSelected: {
        color: 'black',
        marginTop: 5,
    },

    iconTextUnselected: {
        color: 'grey',
        marginTop: 5,
    },

    homeCard: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: 15,
        padding: 5,
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 0,
    },

    carouselContainer: {
        height: itemHeight, // Ensure this matches the height of your images
        marginBottom: 10,
    },

    likeIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    },

    paginationContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },

    homeImage: {
        width: "100%",
        height: itemHeight, // Ensure this matches the height of carouselContainer
        borderRadius: 10,
    },

    homeName: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    homeDetails: {
        fontSize: 16,
    },
});

export default HomesRoute;
