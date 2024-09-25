import React from "react";
import { View, Text, Image } from "react-native";
import Search from "@/assets/images/search.png";
import { styles } from "./styles";

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={Search} style={styles.search} />
        <View>
          <Text style={styles.title}>Textify</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 2 }}>
          <View style={styles.dots} />
          <View style={styles.dots} />
          <View style={styles.dots} />
        </View>
      </View>
    </View>
  );
}

export default Header;
