import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

// Screens
import Home from './Home'
import Invoices from './Invoices'

// Navigator
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

export default class MainTabs extends React.Component
{
    
	render() {
        let Tab = createMaterialBottomTabNavigator()
		return (
			<Tab.Navigator initialRouteName="Home" activeColor="#fff">

                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => <Icon name="ios-home" color={ color } size={26} />
                    }}
                />

                <Tab.Screen
                    name="Invoices"
                    component={Invoices}
                    options={{
                        tabBarLabel: 'Invoices',
                        tabBarIcon: ({ color }) => <Icon name="ios-person" color={ color } size={26} />
                    }}
                />

            </Tab.Navigator>
		)
	}
}


// Signin specific styles here