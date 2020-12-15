import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

class App extends Component {
	state = {
		wordToSearch: '',
		isbuttonDisabled: true,
		searchResultsMeanings: [],
		searchResultsWords: '',
		searchResultCredit: '',
	};
	searchOfflineDictionary = () => {
		const { wordToSearch } = this.state;
		if (!wordToSearch) {
			e.preventDefault();
		} else {
			axios
				.get(`https://dict.geek1011.net/word/${wordToSearch}`, {
					method: 'GET',
				})
				.then((res) => {
					const data = res.data.result;
					this.setState({
						searchResultsWords: data.word,
						searchResultsMeanings: data.meanings,
						searchResultEtymology: data.etymology,
						searchResultCredit: data.credit,
					});
				})
				.catch((err) => {
					console.error('Error -->', err);
				});
			this.setState({
				wordToSearch: '',
				isbuttonDisabled: true,
			});
		}
	};
	searchDictionary = (e) => {
		const { wordToSearch } = this.state;
		if (!wordToSearch) {
			e.preventDefault();
		} else {
			axios
				.get(`https://dict.geek1011.net/word/${wordToSearch}`, {
					method: 'GET',
				})
				.then((res) => {
					const data = res.data.result;
					this.setState({
						searchResultsWords: data.word,
						searchResultsMeanings: data.meanings,
						searchResultEtymology: data.etymology,
						searchResultCredit: data.credit,
					});
				})
				.catch((err) => {
					console.error('Error -->', err);
				});
			this.setState({
				wordToSearch: '',
				isbuttonDisabled: true,
			});
		}
	};
	render() {
		const {
			wordToSearch,
			isbuttonDisabled,
			searchResultsMeanings,
			searchResultsWords,
			searchResultCredit,
		} = this.state;

		return (
			<>
				<View style={styles.header}>
					<Ionicons name="book" size={24} color="white" />
					<Text style={styles.headerText}> Pocket Thesaurus</Text>
				</View>
				<View style={styles.container}>
					<TextInput
						value={wordToSearch}
						onChange={(e) => {
							this.setState({
								wordToSearch: e.target.value,
								isbuttonDisabled: false,
							});
						}}
						style={styles.input}
						placeholder="Search Words"
					/>
					<View style={styles.searchButtonContainer}>
						<TouchableOpacity
							disabled={isbuttonDisabled}
							onPress={this.searchDictionary}
							style={isbuttonDisabled ? styles.disabledButton : styles.button}
						>
							<Ionicons name="search" size={24} color="white" />
							<Text style={styles.buttonText}> Online Search</Text>
						</TouchableOpacity>
						<TouchableOpacity
							disabled={isbuttonDisabled}
							onPress={this.searchOfflineDictionary}
							style={isbuttonDisabled ? styles.disabledButton : styles.button}
						>
							<Ionicons name="search" size={24} color="white" />
							<Text style={styles.buttonText}> Offline Search</Text>
						</TouchableOpacity>
					</View>

					<View>
						<View>
							<Text style={styles.searchResultHeader}>
								{searchResultsWords.toUpperCase()}
							</Text>
							<Text style={styles.searchResultHeader}>
								{searchResultCredit.toUpperCase()}
							</Text>
						</View>
						{searchResultsMeanings.map((result, index) => (
							<View key={index}>
								<View style={styles.searchResultsMeaningsContainer}>
									<Text>{index + 1}. </Text>
									<Text>{result.text}</Text>
								</View>
							</View>
						))}
					</View>
				</View>
			</>
		);
	}
}

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
		fontSize: '25px',
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
		fontSize: '3vh',
	},
	button: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#00bbff',
		height: '6vh',
		width: '30%',
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
		fontSize: '2vh',
	},
	disabledButton: {
		display: 'flex',
		flexDirection: 'row',
		backgroundColor: '#5b737c',
		height: '6vh',
		width: '30%',
		borderRadius: 100,
		borderWidth: '2px',
		borderColor: '#000000',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '6vh',
		opacity: 0.1,
	},
	searchResultsMeaningsContainer: {
		display: 'flex',
		flexDirection: 'row',
	},
	searchResultHeader: {
		alignSelf: 'center',
		fontSize: '20px',
		fontWeight: 'bold',
	},
	searchButtonContainer: {
		display: 'flex',
		flexDirection: 'row',
	},
});
