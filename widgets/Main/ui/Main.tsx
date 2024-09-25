import React from "react";
import { View, Text, Image } from "react-native";
import AppleText from "@/assets/images/apple-text.png";
import { StyleSheet } from "react-native";
import Header from "../../../features/header/Header";
import Skan from '../../../features/BottomContent/Skan';

export default function MainScreen() {
  return (
    <View style={styles.container}>
    <Header />
    <Skan/>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: 'column',
    
  }
});
