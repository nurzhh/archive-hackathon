import { Link, Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].gold,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#3A4E67",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 10,
          height: 85,
        },
        tabBarIconStyle: {
          paddingBottom: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Главная",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/images/Home.png")}
              style={{ tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="photo"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/images/Photo.png")}
              style={{ tintColor: Colors[colorScheme ?? "light"].tint }} // Always use active color
            />
          ),
          href: "/take",
        }}
      />
      <Tabs.Screen
        name="collection"
        options={{
          title: "Коллекции",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("@/assets/images/Paper.png")}
              style={{ tintColor: color }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
