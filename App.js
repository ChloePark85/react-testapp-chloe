import React from 'react';
import main from './assets/main.png'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석
  return (<ScrollView style={StyleSheet.container}>
    <Text style={style.title}>나만의 꿀팁</Text>
    <Image style={style.mainImage} source={main}></Image>
    <ScrollView style={style.middleContainer} horizontal={true}>
      <TouchableOpacity style={style.middleButton01}><Text style={style.middleButtonText}>생활</Text></TouchableOpacity>
      <TouchableOpacity style={style.middleButton02}><Text style={style.middleButtonText}>재태크</Text></TouchableOpacity>
      <TouchableOpacity style={style.middleButton03}><Text style={style.middleButtonText}>반려견</Text></TouchableOpacity>
      <TouchableOpacity style={style.middleButton04}><Text style={style.middleButtonText}>꿀팁 찜</Text ></TouchableOpacity>
    </ScrollView>
    <View style={style.cardContainer}>
      <View style={style.card}>
        <Image style={style.cardImage} source={{uri:"https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2Fpizza.png?alt=media&token=1a099927-d818-45d4-b48a-7906fd0d2ad3"}}></Image>
        <Text style={style.cardText}>
          <Text style={style.cardTitle}>먹다 남은 피자를 촉촉하게</Text>
          <Text style={style.cardDesc} numberOfLines= {3}>먹다 남은 피자는 수분이 날라가기 때문에 처음처럼 맛있게 먹을 수 없는데요. 이럴 경우 그릇에 물을 받아 전자레인지 안에서 1분 30초에서 2분 정도 함께 돌려주면 촉촉하게 먹을 수 있습니다. 물이 전자레인지 안에서 수증기를 일으키고, 피자에 촉촉함을 더해줍니다.</Text>
          <Text style={style.cardDate}>2020.09.09</Text>
        </Text>
      </View>

    </View>

  </ScrollView>)

}

const style = StyleSheet.create({
  container:{
    backgroundColor: "#fff"
  },
  title: {
    fontSize:20,
    fontWeight: "700",
    marginTop: 50,
    marginLeft: 20
  },
  mainImage: {
    width: "90%",
    height: 200,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: "center"
  },
  middleContainer: {
    marginTop:20,
    marginLeft: 10,
    height: 60
  },
  middleButton01: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#fdc453",
    borderRadius: 15,
    margin: 8
  },
  middleButton02: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#fe8d6f",
    borderRadius: 15,
    margin: 8
  },
  middleButton03: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#9adbc5",
    borderRadius: 15,
    margin: 8
  },
  middleButton04: {
    width: 100,
    height: 50,
    padding: 15,
    backgroundColor: "#f886a8",
    borderRadius: 15,
    margin: 8
  },
  middleButtonText:{
    color: "#fff",
    fontWeight: "700",
    textAlign: "center"
  },
  cardContainer: {
    borderWidth: 1,
    marginTop: 10,
    marginLeft: 10
  },
  card: {
    flex: 1,
    flexDirection: "row",
    margin: 10
  }, 
  cardImage: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 10
  },
  cardText: {
    flex: 2, 
    marginLeft: 10
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700"
  },
  cardDesc: {
      fontSize: 15,
  },
  cardDate: {
      fontSize: 10

  }
})