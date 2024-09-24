import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Apple_text from '../../assets/images/apple-text.png'; 
//ljwgaflg
function Header() {
  return (
    <View style={styles.container}>
      <Image source={Apple_text} style={styles.image} />
      <Text style={styles.heading}>У вас нет недавнего сканирования</Text>
      <Text style={styles.paragraph}>
        Создайте новый скан текста из {'\n'}
        импортированных {'\n'}
        или снятых на камеру
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
		width: "100%",
		marginTop: 120,
  },
  image: {
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },	
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center', // Центрирование заголовка (если нужно)
  },
  paragraph: {
    textAlign: 'center', // Центрирование текста в абзаце
    color: '#666',
    fontSize: 15,
    lineHeight: 24, // Межстрочное расстояние для лучшей читаемости
  }
});

export default Header;
