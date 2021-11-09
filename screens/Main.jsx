import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'

// Screens
import Signin from './Signin'
import MainTabs from './MainTabs'
import Settings from './Settings'

// Navigator
import { createDrawerNavigator } from '@react-navigation/drawer'

export default class Main extends React.Component
{
    state = {
        login: false
    }

    allowLogin = () => {
        this.setState({
            login: true
        })
    }

    render() {
        let Drawer = createDrawerNavigator()
        return (
            <PaperProvider>
                <NavigationContainer>
                    { this.state.login ? (
                        <Drawer.Navigator initialRouteName="MainTabs">
                            <Drawer.Screen name="MainTabs"  component={MainTabs} options={{ title:"Home" }} />
                            <Drawer.Screen name="Settings" component={Settings} />
                        </Drawer.Navigator>
                    ) : (
                        <Signin allowLogin={ this.allowLogin } />
                    )}
                </NavigationContainer>
            </PaperProvider>
        )
    }

}