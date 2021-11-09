import React from 'react'
import { TextInput } from 'react-native-paper'

export default class InputText extends React.Component {

	render() {
		return (
			<TextInput
				label={ this.props.label }
			/>
		)
	}
    
}

// All styles related to ONLY input type text goes here...