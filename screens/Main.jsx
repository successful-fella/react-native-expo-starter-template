import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import GlobalConstants from '../constants/GlobalConstants'

// Screens
import Signin from './Signin'
import MainTabs from './MainTabs'
import Settings from './Settings'

import DrawerContent from '../components/DrawerContent'

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

    signout = () => {
        this.setState({
            login: false
        })
    }

    render() {
        let Drawer = createDrawerNavigator()
        return (
            <PaperProvider>
                <NavigationContainer>
                    { this.state.login ? (
                        <Drawer.Navigator initialRouteName="MainTabs" drawerContent={props => <DrawerContent {...props} signout={ this.signout } />}>
                            <Drawer.Screen name="MainTabs"  component={MainTabs} options={{ title:"Home", headerStyle:{ backgroundColor: GlobalConstants.navColor }, headerTitleStyle: { color: '#fff' } }} />
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
