import React from "react";
import { View,Text,FlatList,Image,TouchableOpacity,StyleSheet,SafeAreaView, Button } from "react-native";

export default function DetailsScreenMovie({route,navigation}){
    const {movie}=route.params;

    const goToRes = ()=>{
        navigation.navigate("Reseña",{movie});
    }


    return(
        <SafeAreaView >
            

            <SafeAreaView style={styles.fondo}>
            <Image source={{uri:movie.image}} style={styles.image}/>
            
            <View style={styles.textt}>   
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.description}>{movie.year}  {movie.category}                           {movie.clasification}</Text> 
            </View>
            <View style={styles.textt2}>
                <Text style={styles.text}>{movie.sinopsis}</Text>
            </View >

           
            <Button style={styles.button} onPress={goToRes} title="Reseñas"/>

        </SafeAreaView>
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
        height:300,
        marginBottom:20
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:10,
        marginLeft:15,
        marginTop:5
    },
    description:{
        fontSize:18,
        marginBottom:1,
        marginLeft:20
    },
    rating:{
        fontSize:16,
        marginBottom:20,
        marginLeft:20
    },
    textt:{
        marginLeft:20,
        marginRight:20,
        width:370,
        height: 100,
        borderWidth:2,
        borderColor: '#ccc',
        borderRadius:25,
        padding:10,
        marginTop: 10,
        marginBottom:10,
        backgroundColor:'white'
    },
    textt2:{
        marginLeft:20,
        marginRight:20,
        width:370,
        height: 180,
        borderWidth:2,
        borderColor: '#ccc',
        borderRadius:25,
        padding:10,
        marginTop: 10,
        marginBottom:80,
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
    },
    fondo:{
        backgroundColor:'black',
        alignItems:'center',
        width:420,
        height: 880,

    },
    button:{
        marginBottom:40
    }

})