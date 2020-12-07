import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

const App = () => {
	return (
		<>
			<View style={styles.header}>
				<Ionicons name="book" size={24} color="white" />
				<Text style={styles.headerText}> Pocket Dictionary</Text>
			</View>
			<View style={styles.container}>
				<TextInput style={styles.input} placeholder="Search Words ...." />
				<TouchableOpacity style={styles.button}>
					<Ionicons name="search" size={24} color="white" />
					<Text style={styles.buttonText}> Search</Text>
				</TouchableOpacity>
			</View>
		</>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	input: {
		width: '50%',
		height: '40px',
		borderWidth: '2px',
		textAlign: 'center',
		borderColor: '#000',
		borderRadius: 8,
		fontSize: '30px',
	},
	header: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#00bbff',
		height: '6vh',
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerText: {
		color: '#fff',
		fontSize: '5vh',
	},
	button: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#00bbff',
		height: '6vh',
		width: '25%',
		borderRadius: 100,
		borderWidth: '2px',
		borderColor: '#0048ff',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '6vh',
	},
	buttonText: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: '3vh',
	},
});
