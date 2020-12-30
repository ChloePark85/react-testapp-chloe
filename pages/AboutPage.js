import React from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import * as Linking from 'expo-linking';

export default function AboutPage() {

  const link = () => {
    Linking.openURL("https://www.naver.com")
  }

    return(
        <View>
            <View style={style.container}>
                <Text style={style.title}>Hi! 현아 앱개발에 오신것을 환영합니다.</Text>
                <View style={style.innercontainer}>
                    <Image style={style.image} source={{uri: "https://firebasestorage.googleapis.com/v0/b/sparta-image.appspot.com/o/lecture%2FaboutImage.png?alt=media&token=13e1c4f6-b802-4975-9773-e305fc7475c4"}}/>
                    <Text style={style.text1}>많은 내용을 간결하게 담아내려 노력했습니다!</Text>
                    <Text style={style.text2}>꼭 완주하셔서 여러분의 것으로 만들어가시길 바랍니다.</Text>
                    <TouchableOpacity style={style.button1} onPress={()=>link()}>
                        <Text style={style.buttonText}>여러분의 인스타계정</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
      //앱의 배경 색
      backgroundColor: '#262c74',
    },
    title: {
      //폰트 사이즈
      fontSize: 30,
      //폰트 두께
      fontWeight: '700',
      //위 공간으로 부터 이격
      marginTop:100,
      //왼쪽 공간으로 부터 이격
      marginLeft:20,
      color: "#fff"

    },
    innercontainer: {
        width:370,
        height:500,
        padding:15,
        backgroundColor:"#fff",
        borderRadius:15,
        margin:20
    },
    image: {
      //컨텐츠의 넓이 값
      width:'70%',
      //컨텐츠의 높이 값
      height:200,
      //컨텐츠의 모서리 구부리기
      marginTop:20,
      //컨텐츠 자체가 앱에서 어떤 곳에 위치시킬지 결정(정렬기능)
      //각 속성의 값들은 공식문서에 고대로~ 나와 있음
      borderRadius: 40,
      alignSelf:"center",
      marginTop:50
    },
    text1:{
      fontSize:20,
      fontWeight: "700",
      textAlign: "center"
    },
    text2: {
        textAlign: "center",
        margin: 20
    },
    button1: {
      width:150,
      height:50,
      padding:10,
      backgroundColor:"#fdc453",
      borderColor:"deeppink",
      borderRadius:15,
      margin:7,
      alignSelf: "center"
    },
    buttonText: {
        color: "#fff"
    }
  });