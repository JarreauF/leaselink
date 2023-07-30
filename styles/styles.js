import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const sliderWidth = screenWidth * 0.91;
const itemHeight = 350;

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
        backgroundColor: 'white', 
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
        shadowColor: '#000',
        width: '90%',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
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

    likeIconBackground: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 2,
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

    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },

    homeName: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    homeDetails: {
        fontSize: 16,
        color: '#777', // Lighter gray
    },

    homeCost: {
        fontSize: 16,
        textDecorationLine: 'underline',
        fontWeight: 'bold',
    },

    rating: {
        alignSelf: 'flex-start',
    },
});

export default styles;
