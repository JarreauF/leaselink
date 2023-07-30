import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomesRoute from './HomesRoute';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
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
  
            // You can return any component that you like here!
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#FF4081',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Explore" component={HomesRoute} />
        <Tab.Screen name="Wishlists" component={HomesRoute} />
        <Tab.Screen name="Applications" component={HomesRoute} />
        <Tab.Screen name="Inbox" component={HomesRoute} />
        <Tab.Screen name="Profile" component={HomesRoute} />
      </Tab.Navigator>
    );
  }

export default MyTabs;


