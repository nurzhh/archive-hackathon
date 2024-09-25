import React from 'react'
import { View, Text, Image } from 'react-native';
import { StyleSheet } from "react-native";
import Seach from '../../assets/images/search.png';
import BurgerDots from '../../assets/images/burger-dots.png';

function Header() {
	return (
		<View style={styles.container}>
			<View style={styles.topContainer}>
				<Image source={Seach} style={styles.search}/>
				<Text style={styles.title}>Textify</Text>
				<Image source={BurgerDots} style={styles.BurgerDots}/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create ({
	container: {
		
	},
	topContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
		height: "40%",
		paddingHorizontal: 20,
		backgroundColor: "#344558",
		paddingTop: 60,
		borderBottomLeftRadius: 25,
		borderBottomRightRadius: 25, 
	},
	search: {
		width: 20,
		height: 20,
	},
	title: {
		color: "#fff",

	},
	BurgerDots: {
		width: 20,
		height: 20,
	}
})

export default Header;