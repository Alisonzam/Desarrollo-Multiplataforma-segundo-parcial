import React, { useState } from "react";
import {TextInput, Button, StyleSheet, SafeAreaView,View,Image, TouchableOpacity,Text,ImageBackground} from "react-native";
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid'; //Para crear identificadores unicos

export default function AddMovieScreen({route, navigation}){
    const {setMovies} = route.params;

    const [title, setTitle] = useState('');
    const [rating, setRating] = useState('');
    const [category, setCategory] = useState('');
    const [year, setYear] = useState('');
    const [sinopsis, setSinopsis] = useState('');
    const [clasification, setClasification] = useState('');
    const [image, setImage] = useState('');

    const addMovie = () =>{
        const newMovie = {
            id: uuidv4(),
            title,
            rating,
            category,
            year,
            sinopsis,
            clasification,
            image
        };
        setMovies(prevMovies => {
            const categoryExists = prevMovies.find(item => item.category === category);
            if (categoryExists) {
                return prevMovies.map(item =>
                    item.category === category
                        ? { ...item, movies: [...item.movies, newMovie] }
                        : item
                );
            } else {
                return [...prevMovies, { category: category, movies: [newMovie] }];
            }
        });
        navigation.goBack();
    }

    return(
        
        <SafeAreaView >
            <ImageBackground source={require('../../assets/movieadd2.jpg')}
              style={styles.image2}>

              
              <View style={styles.imagecontainer}>
            <Image source={require('../../assets/movieadd.jpg')}
              style={styles.image}/>
            </View>
           
            <View style={styles.froms}>
            
            <TextInput
                style = {styles.input}
                placeholder = "Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style = {styles.input}
                placeholder = "Category"
                value={category}
                onChangeText={setCategory}
            />
            <View style={styles.froms2}>
            <TextInput
                style = {styles.input2}
                placeholder = "Rating"
                value={rating}
                onChangeText={setRating}
            />
            
            <TextInput
                style = {styles.input2}
                placeholder = "Year"
                value={year}
                onChangeText={setYear}
            />
            </View>
            
            <TextInput
                style = {styles.input}
                placeholder = "Synopsis"
                value={sinopsis}
                onChangeText={setSinopsis}
            />
            <TextInput
                style = {styles.input}
                placeholder = "Classification"
                value={clasification}
                onChangeText={setClasification}
            />
            <TextInput
                style = {styles.input}
                placeholder = "Image URL"
                value={image}
                onChangeText={setImage}
            />
            </View>
            <View style = {[styles.buttoncontainer]}>
            <TouchableOpacity  style = {[styles.add, styles.buttoncontainer]} onPress={addMovie}>
                <Text style = {styles.textbutton}>Add Movie ╋</Text>
            </TouchableOpacity>
            </View>
            
            
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor:'#8c8f90'
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        width:'90%',
        backgroundColor:'white'
    },
    input2: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        width:'45%',
        marginRight:30,
        backgroundColor:'white'
    },
    froms:{
        marginTop:10,
        alignItems:'baseline', 
        marginLeft:30
    },
    froms2:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        display:'flex',
        marginTop: 10,
        marginRight:10,
        marginLeft:30
    },
    fondo:{
        backgroundColor:'black'
    },
    image: {
        width: 100, 
        height: 100,
        marginTop:-10,
        justifyContent:'center', 

    },
    image2: {
        width:  '100%',
        height: '103%',
        justifyContent:'center', 

    },
    imagecontainer:{
        marginTop:-300,
        justifyContent:'flex-end',
        alignItems:'center', 
    },
    buttoncontainer:{
        marginTop:10,
        justifyContent:'flex-end',
        alignItems:'center',
    },
    add:{
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        width:150
        
    },
    textbutton:{
        color:'white',
        fontSize:20
    }
})