import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StatusBar } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { LinearGradient } from 'expo-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import GlobalStyle from '../styles/GlobalStyle'

export default class Signin extends React.Component {

	state = {
		secureTextEntry: true,
		username: '',
		password: ''
	}

	updateSecureTextEntry = () => {
		this.setState({
			secureTextEntry: !this.state.secureTextEntry
		})
	}

	handleLogin = () => {
		let username = this.state.username
		let password = this.state.password
		console.log("Logging in " + username)
		if(username == '') {
			alert('Please enter username')
			return
		}
		if(password == '') {
			alert('Please enter password')
			return
		}
		// Login logic
		// Navigate to main page
	}

	render() {
		return (
			<View style={GlobalStyle.container}>

				<StatusBar backgroundColor='#009387' barStyle="light-content" />

				{/* Heading */}
				<View style={GlobalStyle.header}>
					<Text style={GlobalStyle.text_header}>Welcome!</Text>
				</View>

				<Animatable.View animation="fadeInUpBig" style={GlobalStyle.footer}>

					{/* Username */}
					<Text style={GlobalStyle.text_footer}>Username</Text>
					<View style={GlobalStyle.action}>
						<FontAwesome name="user-o" size={20} />
						<TextInput
							placeholder="Your Username"
							placeholderTextColor="#666666"
							style={GlobalStyle.textInput}
							autoCapitalize="none"
							onChangeText={(value) => this.setState({ username: value })}
						/>
						<Animatable.View animation="bounceIn">
							<Feather name="check-circle" color="grey" size={20} />
						</Animatable.View>
					</View>

					{/* Password */}
					<Text style={[GlobalStyle.text_footer, { marginTop: 35 }]}>Password</Text>
					<View style={GlobalStyle.action}>
						<Feather name="lock" size={20}/>
						<TextInput
							placeholder="Your Password"
							placeholderTextColor="#666666"
							secureTextEntry={ this.state.secureTextEntry ? true : false }
							style={GlobalStyle.textInput}
							autoCapitalize="none"
							onChangeText={(value) => this.setState({ password: value })}
						/>
						<TouchableOpacity onPress={ this.updateSecureTextEntry } >
							{ this.state.secureTextEntry ? (
									<Feather name="eye-off" color="grey" size={20} />
								) : (
									<Feather name="eye" color="green" size={20} />
								)
							}
						</TouchableOpacity>
					</View>

					{/* Forgot Password */}
					<TouchableOpacity>
						<Text style={{ color: '#009387', marginTop: 15 }}>Forgot password?</Text>
					</TouchableOpacity>

					{/* Signin Button */}
					<View style={GlobalStyle.button}>
						<TouchableOpacity style={GlobalStyle.signIn} onPress={() => { this.handleLogin() }} >
							<LinearGradient colors={['#08d4c4', '#01ab9d']} style={GlobalStyle.signIn} >
								<Text style={GlobalStyle.textSign}>Sign In</Text>
							</LinearGradient>
						</TouchableOpacity>
					</View>

				</Animatable.View>
			</View>
		)
	}
}


// Signin specific styles here