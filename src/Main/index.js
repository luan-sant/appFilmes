import React from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from '../pages/Home'
import Favorites from '../pages/Favorites'



export default function App() {
  const Tab = createBottomTabNavigator ();
  return (
  <>
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, colour}) =>{
          let iconName;
          if (route.name === "Inicio"){
            iconName = focused ? "ios-home" : 'ios-home-outline'
          } else if (route.name === "Favoritos"){
            iconName = focused ? "star-half-outline" : 'star-outline'
          }
  
        return <Ionic name={iconName} size ={size} colour={colour} />
      },
      })}
  
      >
        <Tab.Screen name="Inicio" component={Home}/>
        <Tab.Screen name="Favoritos" component={Favorites}/>
      </Tab.Navigator>
    </NavigationContainer>

  </>
  )
}