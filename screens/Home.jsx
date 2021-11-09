import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { LinearGradient } from 'expo-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import GlobalStyle from '../styles/GlobalStyle'

export default class Home extends React.Component
{
	render() {
		return (
			<View style={GlobalStyle.container}>

				<StatusBar backgroundColor='#009387' barStyle="light-content" />
                <Text>Hello</Text>
                
			</View>
		)
	}
}


// Signin specific styles here