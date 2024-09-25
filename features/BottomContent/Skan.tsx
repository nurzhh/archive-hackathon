import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Image } from 'react-native';
import imgIcon from '../../assets/images/Feather Icon.png';
import burgerDots from '../../assets/images/burger-dots.png';
import collection from '../../assets/images/collection.png';

function Skan() {
  return (
    <View style={styles.container}>
      <Text style={styles.skansText}>Недавние сканирования</Text>
      <View style={styles.wrapperBlock}>
        <View style={styles.blockFirst}>
          <View style={styles.blockImage}>
            <Image source={imgIcon} style={styles.imgIcon} />
          </View>

          <View style={styles.cont}>
            <View style={styles.text}>
              <Text style={styles.desc}>
                Lorem ipsum dolor sit amet {'\n'} consectetur. Elementum {'\n'} turpis nulla duis
                arcu. Cum {'\n'} tortor ut gfjgkylghggghrhv..
              </Text>
            </View>
            <View style={styles.data}>
              <Text style={styles.day}>25 SEP 2024 04:29 AM</Text>
              <Image source={burgerDots} style={styles.burgerDots} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function Hui() {
  return (
    <View style={styles.containerr}>
      <Image source={collection} style={styles.collectionImg}/>
      <Text>У вас нет коллекций</Text>
      <Text>Создайте новый коллекцию</Text>
    </View>
  )
}

export default function Hui;

const styles = StyleSheet.create({
  containerr: {
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    flexDirection: 'column',
  }
})

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '50%',
    justifyContent: 'flex-start',
  },
  skansText: {
    fontSize: 26,
  },
  wrapperBlock: {
    display: 'flex',
    flexDirection: 'column',
  },
  blockFirst: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  blockImage: {
    width: 120,
    height: 90,
    backgroundColor: '#344558',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cont: {
    display: 'flex',
    gap: 20,
  },
  text: {
    width: '100%',
  },
  data: {
    display: 'flex',
    flexDirection: 'row',
    gap: 90,
  },
  day: {
    fontSize: 12,
  },
  desc: {
    fontSize: 12,
  },
  imgIcon: {},
  burgerDots: {
    width: 20,
    height: 20,
  },
});

export default Skan;
