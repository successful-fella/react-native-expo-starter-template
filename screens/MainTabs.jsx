import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import GlobalConstants from '../constants/GlobalConstants'

// Screens
import Home from './Home'
import Appointments from './Appointments'
import Services from './Services'
import Invoices from './Invoices'

// Navigator
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

export default class MainTabs extends React.Component
{

	render() {
        let Tab = createMaterialBottomTabNavigator()
					return (
						<Tab.Navigator initialRouteName="Home" activeColor="#fff" shifting={true}>

                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarColor: GlobalConstants.navColor,
                        tabBarIcon: ({ color }) => <Icon name="ios-home" color={ color } size={20} />
                    }}
                />

                <Tab.Screen
                    name="Appointments"
                    component={Appointments}
                    options={{
                        tabBarLabel: 'Appointments',
                        tabBarColor: GlobalConstants.navColor,
                        tabBarIcon: ({ color }) => <Icon name="ios-today" color={ color } size={20} />
                    }}
                />

								<Tab.Screen
                    name="Services"
                    component={Services}
                    options={{
                        tabBarLabel: 'Services',
                        tabBarColor: GlobalConstants.navColor,
                        tabBarIcon: ({ color }) => <Icon name="ios-reader" color={ color } size={20} />
                    }}
                />

								<Tab.Screen
                    name="Invoices"
                    component={Invoices}
                    options={{
                        tabBarLabel: 'Invoices',
                        tabBarColor: GlobalConstants.navColor,
                        tabBarIcon: ({ color }) => <Icon name="ios-receipt" color={ color } size={20} />
                    }}
                />

            </Tab.Navigator>
					)
		}
}


// Signin specific styles here
