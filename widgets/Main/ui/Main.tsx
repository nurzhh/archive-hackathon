import React from "react";
import { View, Text, Image } from "react-native";
import AppleText from "@/assets/images/apple-text.png";
import Plus from "@/assets/images/Plus.png";
import { styles } from "./styles";
import { Link } from "expo-router";

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Image source={AppleText} style={styles.image} />
      <Text style={styles.heading}>У вас нет недавнего сканирования</Text>
      <Text style={styles.paragraph}>
        Создайте новый скан текста из {"\n"}
        импортированных {"\n"}
        или снятых на камеру
      </Text>
      <Link href={"/take"} style={styles.plusContainer}>
        <Image source={Plus} />
      </Link>
    </View>
  );
}
