import React, {useState} from "react";
import {TextInput, Button, StyleSheet, SafeAreaView} from "react-native";

export default function EditMovieScreen({route, navigation}){
    const {movie, editMovieHandler} = route.params;
    const [title, setTitle] = useState(movie.title);
    const [rating, setRating] = useState(movie.rating);
    const [year, setYear] = useState(movie.year);
    const [sinopsis, setSinopsis] = useState(movie.sinopsis);
    const [clasification, setClasification] = useState(movie.clasification);
    const [image, setImage] = useState(movie.image);
    

    const editMovie = () =>{
        const updatedMovie = {
            ...movie,
            title,
            rating,
            year,
            sinopsis,
            clasification,
            image
        };
        editMovieHandler(updatedMovie);
        navigation.goBack();
    }

    return(
        <SafeAreaView style={styles.container}>
            <TextInput
                style = {styles.input}
                placeholder = "Title"
                value={title}
                onChangeText={setTitle}
            />
            <TextInput
                style = {styles.input}
                placeholder = "Rating"
                value={rating}
                onChangeText={setRating}
            />
            <TextInput
                style = {styles.input}
                placeholder = "Year"
                value={year}
                onChangeText={setYear}
            />
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
            <Button title="Edit Movie" onPress={editMovie}/>
    
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10
    },
})