import React, { useState } from "react";
import {TextInput, Button, StyleSheet, SafeAreaView} from "react-native";
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
                placeholder = "Category"
                value={category}
                onChangeText={setCategory}
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
            <Button title="Add Movie" onPress={addMovie}/>
        
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10
    }
})