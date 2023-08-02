import React, { useState } from "react";
import { View, Image, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Modal } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MapView, { Marker } from 'react-native-maps';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const HomeDetails = () => {
  const route = useRoute(); 
  const navigation = useNavigation();
  const { home } = route.params;

  const [index, setIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.sliderContainer}>
          <Swiper
            showsButtons={false}
            loop={false}
            showsPagination={false}
            onIndexChanged={(index) => setIndex(index)}
          >
            {home.imageUrls.map((image, i) => (
              <Image source={{ uri: image }} style={styles.image} key={i} />
            ))}
          </Swiper>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={22} color="#333" />
          </TouchableOpacity>
          <View style={styles.rightButtons}>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="share-outline" size={22} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButtonLike}>
              <Icon name="heart-outline" size={22} color="#333" />
            </TouchableOpacity>
          </View>
          <Text style={styles.imageCounter}>{`${index + 1}/${home.imageUrls.length}`}</Text>
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.homeName}>{home.name}</Text>
          <Text style={styles.reviews}>{`${home.reviews} Reviews • ${home.location}`}</Text>
          <View style={styles.separator} />
          <View style={styles.sectionContainer}>
            <View style={styles.homeTypeInfo}>
              <Text style={styles.homeType}>{`${home.type} • Rented by `}</Text>
              <Text style={styles.landlordName}>{home.name}</Text>
            </View>
            <Image source={{ uri: home.profileImage }} style={styles.profileImage} />
            <Text style={styles.features}>{`${home.tenants} Tenants • ${home.bedrooms} Bedrooms • ${home.beds} Beds • ${home.bathrooms} Bathrooms`}</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.sectionContainer}>
            <Text style={styles.amentitiesTitle}>Amenities</Text>
            {home.amenities.slice(0,8).map((amenity, i) => (
              <View style={styles.amentity} key={i}>
                <MaterialCommunityIcons name={amenity.icon} size={34} color="#333" style={styles.amentityIcon} />
                <Text style={styles.amentityText}>{amenity.name}</Text>
              </View>
            ))}
            {home.amenities.length > 8 && <TouchableOpacity style={styles.showAllButton}>
              <Text style={styles.showAllText}>Show all {home.amenities.length} amenities</Text>
            </TouchableOpacity>}
            <Text style={styles.notice}>{`Notice period for breaking the lease: ${home.noticePeriod}`}</Text>
          </View>
          <View style={styles.separator} />
          <View style={styles.sectionContainer}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.description} numberOfLines={3}>{home.description}</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.showMore}>Show more <Icon name="chevron-forward-outline" size={20} color="#333" /></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mapContainer}>
            <MapView 
              style={styles.map}
              initialRegion={{
                latitude: home.latitude,
                longitude: home.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{
                  latitude: home.latitude,
                  longitude: home.longitude
                }}
              />
            </MapView>
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
      >
        <View style={styles.modalView}>
          <Text style={styles.description}>{home.description}</Text>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={styles.footer}>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>{`$${home.price}`}</Text>
          <Text style={styles.perMonth}>per month</Text>
          <Text style={styles.leasePeriod}>{`Lease: ${home.leaseStart} - ${home.leaseEnd}`}</Text>
        </View>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      },
      sliderContainer: {
        position: 'relative',
        height: viewportHeight * 0.4,
      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
      },
      backButton: {
        position: 'absolute',
        top: 60,
        left: 10,
        backgroundColor: '#eee',
        borderRadius: 25,
        padding: 5,
      },
      rightButtons: {
        position: 'absolute',
        top: 60,
        right: 10,
        flexDirection: 'row',
        alignItems: 'center',
      },
      iconButton: {
        backgroundColor: '#eee',
        borderRadius: 25,
        padding: 5,
        marginLeft: 10,
      },
      iconButtonLike: {
        backgroundColor: '#eee',
        borderRadius: 25,
        padding: 5,
        marginLeft: 25,
      },
      imageCounter: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: '#eee',
        borderRadius: 5,
        padding: 5,
      },
      detailsContainer: {
        padding: 20,
      },
      homeName: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      reviews: {
        fontSize: 16,
        color: '#888',
        marginBottom: 10,
      },
      homeType: {
        fontSize: 18,
        marginBottom: 5,
      },
      features: {
        fontSize: 16,
        color: '#888',
        marginBottom: 10,
      },
      profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignSelf: 'flex-end',
      },
      separator: {
        height: 1,
        backgroundColor: '#eee',
        marginVertical: 20,
      },
      sectionContainer: {
        marginBottom: 20,
      },
      amentitiesTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      amentity: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      amentityIcon: {
        marginRight: 10,
        width: 30
      },
      amentityText: {
        fontSize: 16,
        flex: 1, 
        paddingLeft: 10
      },
      showAllButton: {
        backgroundColor: '#f88',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        marginTop: 10,
      },
      showAllText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      notice: {
        fontSize: 16,
        color: '#888',
        marginTop: 10,
      },
      descriptionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      description: {
        fontSize: 18,
        marginBottom: 10,
      },
      showMore: {
        fontSize: 16,
        color: '#00f',
        textDecorationLine: 'underline',
      },
      modalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        padding: 20,
      },
      closeButton: {
        marginTop: 20,
        backgroundColor: "#2196F3",
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        alignSelf: 'flex-start',
      },
      closeButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
      footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        padding: 20,
        borderTopColor: '#eee',
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      priceContainer: {
        flex: 1,
      },
      price: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      perMonth: {
        fontSize: 16,
        color: '#888',
      },
      leasePeriod: {
        fontSize: 16,
        color: '#888',
        textDecorationLine: 'underline',
      },
      applyButton: {
        backgroundColor: '#f88',
        padding: 10,
        borderRadius: 5,
        paddingHorizontal: 20,
      },
      applyButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      }, 

      mapContainer: {
        height: 300,
        width: '100%',
        borderRadius: 5,
        overflow: 'hidden',
        marginVertical: 10,
      },
      map: {
        flex: 1,
      },
});

export default HomeDetails;
