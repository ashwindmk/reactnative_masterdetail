import React, { useState, useEffect } from 'react';
import {
	StatusBar,
	SafeAreaView,
	StyleSheet,
	View,
	Text,
	Image,
	FlatList,
	ActivityIndicator,
	TouchableOpacity
} from 'react-native';

const Master = ({ navigation }) => {
	const [dataState, setDataState] = useState({
		dataSource: [],
		isLoading: true
	});

	const fetchItems = () => {
		fetch('https://gist.githubusercontent.com/ashwindmk/2ad0336afd7c7ba9e4bdb2e9e672d8ff/raw/spacecrafts.json')
			.then((res) => res.json())
			.then((json) => {
				console.log('App | fetch: ' + JSON.stringify(json));
				setDataState({
					isLoading: false,
					dataSource: json
				});
			})
			.catch(err => console.error('App | catch | error: ' + err));
	};

	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity style={styles.item}
				onPress={() => navigation.navigate('Detail', item)}>
				<Image style={styles.image} source={{ uri: item.imageurl }} />
				<View style={styles.textView}>
					<Text style={styles.title}>{item.name}</Text>
					<Text>{item.destination}</Text>
				</View>
			</TouchableOpacity>
		);
	};

	const renderSeparator = () => {
		return (
			<View style={styles.separator}>
			</View>
		);
	};

	useEffect(() => {
		console.log('App | useEffect | componentDidMount');
		fetchItems();
	}, []);

	console.log('App | render');
	return (
		dataState.isLoading ?
			<>
				<StatusBar barStyle="dark-content" />
				<SafeAreaView style={styles.loaderView}>
					<ActivityIndicator size='large' color='#330066' animating></ActivityIndicator>
				</SafeAreaView>
			</>
			:
			<>
				<StatusBar barStyle="dark-content" />
				<SafeAreaView style={styles.container}>
					<FlatList
						data={dataState.dataSource}
						renderItem={renderItem}
						ItemSeparatorComponent={renderSeparator}>
					</FlatList>
				</SafeAreaView>
			</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	item: {
		flex: 1,
		flexDirection: 'row',
		margin: 16
	},
	image: {
		width: 100,
		height: 100
	},
	textView: {
		flex: 1,
		justifyContent: 'center',
		margin: 8
	},
	title: {
		fontSize: 18
	},
	separator: {
		height: 1,
		width: '100%',
		backgroundColor: 'black'
	},
	loaderView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default Master;
