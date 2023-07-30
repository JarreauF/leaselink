import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useRoute } from '@react-navigation/native';

const HomeDetails = () => {
    const route = useRoute(); 
  const { home } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: home.imageUrls[0] }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.homeName}>{home.name}</Text>
        <Text style={styles.homeLandlord}>Landlord: {home.landlord}</Text>
        <Text style={styles.homeLease}>Lease: {home.lease}</Text>
        <Text style={styles.homeCost}>Cost: {home.cost}</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>{home.rating.toFixed(1)}</Text>
        </View>
        {/* Add other details of the home */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  detailsContainer: {
    padding: 20,
  },
  homeName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  homeLandlord: {
    fontSize: 18,
    marginBottom: 5,
  },
  homeLease: {
    fontSize: 18,
    marginBottom: 5,
  },
  homeCost: {
    fontSize: 18,
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 20,
    marginLeft: 5,
    color: "#FF385C",
  },
});

export default HomeDetails;
