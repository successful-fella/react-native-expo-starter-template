import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class DrawerContent extends React.Component
{
    render() {
        return (
            <View style={{ flex: 1 }}>
                
                <DrawerContentScrollView>
                    <View style={styles.drawerContent}>

                        <View style={styles.userInfoSection}>

                            {/* Image */}
                            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                <Avatar.Image
                                    source={{
                                        uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                    }}
                                    size={50}
                                />
                                <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                    <Title style={styles.title}>John Doe</Title>
                                    <Caption style={styles.caption}>@j_doe</Caption>
                                </View>
                            </View>

                            {/* Caption */}
                            <View style={styles.row}>
                                <View style={styles.section}>
                                    <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                    <Caption style={styles.caption}>Following</Caption>
                                </View>
                                <View style={styles.section}>
                                    <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                    <Caption style={styles.caption}>Followers</Caption>
                                </View>
                            </View>

                        </View>

                        <Drawer.Section style={styles.drawerSection}>

                            {/* Home */}
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon name="home-outline" color={color} size={size} />
                                )}
                                label="Home"
                                onPress={() => { this.props.navigation.navigate('MainTabs') }}
                            />

                            {/* Profile */}
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon name="account-outline" color={color} size={size} />
                                )}
                                label="Profile"
                                onPress={() => { this.props.navigation.navigate('Profile') }}
                            />

                            {/* Settings */}
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon name="account-cog-outline" color={color} size={size} />
                                )}
                                label="Settings"
                                onPress={() => { this.props.navigation.navigate('Settings') }}
                            />

                            {/* Support */}
                            <DrawerItem
                                icon={({ color, size }) => (
                                    <Icon name="account-check-outline" color={color} size={size} />
                                )}
                                label="Support"
                                onPress={() => { this.props.navigation.navigate('SupportScreen') }}
                            />

                        </Drawer.Section>

                        {/* Toggler */}
                        <Drawer.Section title="Preferences">
                            <TouchableRipple onPress={() => { console.log('Toggled') }}>
                                <View style={styles.preference}>
                                    <Text style={styles.title}>Toggler</Text>
                                    <View pointerEvents="none">
                                        <Switch value={ true } />
                                    </View>
                                </View>
                            </TouchableRipple>
                        </Drawer.Section>

                    </View>
                </DrawerContentScrollView>

                {/* Bottom Signout */}
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="exit-to-app" color={color} size={size} />
                        )}
                        label="Sign Out"
                        onPress={() => { this.props.signout() }}
                    />
                </Drawer.Section>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        color: "#1c1c1ead"
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        color: "#1c1c1ead"
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
})