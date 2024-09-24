import { Tabs } from "expo-router";
import React from "react";
import { Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const tabSettings: Array<{
    name: string;
    title: string;
    icon: any;
    alwaysFocused?: boolean;
  }> = [
    {
      name: "index",
      title: "Главная",
      icon: require("@/assets/images/Home.png"),
    },
    {
      name: "explore",
      title: "История",
      icon: require("@/assets/images/History.png"),
    },
    {
      name: "photo",
      title: "",
      icon: require("@/assets/images/Photo.png"),
      alwaysFocused: true,
    },
    {
      name: "settings",
      title: "Настройки",
      icon: require("@/assets/images/Setting.png"),
    },
    {
      name: "collection",
      title: "Коллекции",
      icon: require("@/assets/images/Paper.png"),
    },
  ];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#3A4E67",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          padding: 10,
          height: 85
        },
        tabBarIconStyle: {
          paddingBottom: 0,
        },
      }}
    >
      {tabSettings.map(({ name, title, icon, alwaysFocused }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title: title,
            tabBarIcon: ({ color, focused }) => (
              <Image
                source={icon}
                style={{
                  tintColor: alwaysFocused
                    ? Colors[colorScheme ?? "light"].tint
                    : color,
                }}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
