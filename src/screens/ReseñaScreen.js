import React from "react";
import { View,Text,FlatList,Image,TouchableOpacity,StyleSheet,SafeAreaView, Button } from "react-native";

export default function ReseñaScreenMovie({route,navigation}){
    const {movie}=route.params;

    return(
        <SafeAreaView>
             <Image source={{uri:movie.image}} style={styles.image}/>
             <Text style={styles.title}>Reviews</Text>
            <View style={styles.textt2}>
            
            <Text style={styles.text}>{movie.res}</Text>
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        padding:40,
        marginTop:10
    },
    image:{
        width:'100%',
        height:200,
        marginBottom:20
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:10,
        marginLeft:35,
        marginTop:5
    },
    textt2:{
        marginLeft:20,
        marginRight:20,
        width:370,
        height: 450,
        borderWidth:2,
        borderColor: '#ccc',
        borderRadius:25,
        padding:10,
        marginTop: 10,
        marginBottom:10,
        backgroundColor:'white'
    },

    text:{
        fontSize:16,
        marginLeft:20,
        marginTop:5,
        fontFamily:''
    },
    texts:{
        fontSize:18,
        marginLeft:20,
        fontWeight:'bold'
    }

})