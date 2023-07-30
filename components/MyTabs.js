import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStack';
import WishlistsRoute from './WishlistsRoute';
import ApplicationsRoute from './ApplicationsRoute';
import InboxRoute from './InboxRoute';
import ProfileRoute from './ProfileRoute';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === 'Explore') {
            iconName = focused ? 'home-city' : 'home-city-outline';
          } else if (route.name === 'Wishlists') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Applications') {
            iconName = focused ? 'application' : 'application-outline';
          } else if (route.name === 'Inbox') {
            iconName = focused ? 'email' : 'email-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account-outline';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#FF4081',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Explore" component={HomeStackScreen} />
      <Tab.Screen name="Wishlists" component={WishlistsRoute} />
      <Tab.Screen name="Applications" component={ApplicationsRoute} />
      <Tab.Screen name="Inbox" component={InboxRoute} />
      <Tab.Screen name="Profile" component={ProfileRoute} />
    </Tab.Navigator>
  );
}

export default MyTabs;
