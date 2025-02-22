import React from 'react';
import {View, Image, Text, StyleSheet,TouchableOpacity, Alert} from 'react-native'
import {firebase_db} from "../firebaseConfig"
import Constants from 'expo-constants';

//MainPage로 부터 navigation 속성을 전달받아 Card 컴포넌트 안에서 사용
export default function Card({content,navigation}){

    const remove = () => {
        
        // like 방 안에
        // 특정 사용자 방안에
        // 특정 찜 데이터 아이디 방안에
        // 특정 찜 데이터 몽땅 저장!
        // 찜 데이터 방 > 사용자 방 > 어떤 찜인지 아이디
        const user_id = Constants.installationId;
        firebase_db.ref('/like/'+user_id+'/'+ content.idx).remove().then(function(){
            Alert.alert("찜 해제완료!")
            navigation.navigate('LikePage')
        });
    }


    return(
        //카드 자체가 버튼역할로써 누르게되면 상세페이지로 넘어가게끔 TouchableOpacity를 사용
        <View style={styles.card} onPress={()=>{navigation.navigate('DetailPage',content)}}>
            <Image style={styles.cardImage} source={{uri:content.image}}/>
            <View style={styles.cardText}>
                <Text style={styles.cardTitle} numberOfLines={1}>{content.title}</Text>
                <Text style={styles.cardDesc} numberOfLines={3}>{content.desc}</Text>
                <Text style={styles.cardDate}>{content.date}</Text>
                <View style={styles.buttonContainer} horizontal indicatorStyle={"black"}>
                    <TouchableOpacity style={styles.button}><Text style={styles.detailButtonText} onPress={()=>{navigation.navigate('DetailPage',{idx:content.idx})}}>자세히보기</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.button}><Text style={styles.unlikeButtonText} onPress={()=>remove()}>찜 해제</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    
    card:{
      flex:1,
      flexDirection:"row",
      margin:10,
      borderBottomWidth:0.5,
      borderBottomColor:"#eee",
      paddingBottom:10
    },
    cardImage: {
      flex:1,
      width:100,
      height:100,
      borderRadius:10,
    },
    cardText: {
      flex:2,
      flexDirection:"column",
      marginLeft:10,
    },
    cardTitle: {
      fontSize:20,
      fontWeight:"700"
    },
    cardDesc: {
      fontSize:15
    },
    cardDate: {
      fontSize:10,
      color:"#A6A6A6",
    },
    buttonContainer: {
        flexDirection: "row",
    },
    button: {
        width:90,
        marginTop:20,
        marginRight:10,
        marginLeft:10,
        padding:10,
        borderWidth:1,
        borderColor:'deeppink',
        borderRadius:7
    },
    detailButtonText: {
        color:"deeppink",
        fontWeight:"700",
        //텍스트의 현재 위치에서의 정렬 
        textAlign:"center"
    },
    unlikeButtonText: {
        color:"deeppink",
        fontWeight:"700",
        //텍스트의 현재 위치에서의 정렬 
        textAlign:"center"
    }
});