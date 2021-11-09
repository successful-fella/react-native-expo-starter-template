import React from 'react'
import { BottomNavigation } from 'react-native-paper'

export default class TCBottomNavigation extends React.Component {

	state = {
		index: 0,
		routes: [
			{ key: 'home', title: 'Home', icon: 'home' },
			{ key: 'recents', title: 'Recents', icon: 'history' },
			{ key: 'test', title: 'Test', icon: 'history' }
		]
	}

	renderScene = ({ route, jump }) => {
        // TODO: Handle bottom nav
	}

	setIndex = (index) => {
		this.setState({
			index: index
		})
	}

	render() {
		return (
			<BottomNavigation
				navigationState={{ index: this.state.index, routes: this.state.routes }}
				onIndexChange={ this.setIndex }
				renderScene={ this.renderScene }
			/>
		)
	}
}

// All styles related to ONLY bottom navigation goes here...