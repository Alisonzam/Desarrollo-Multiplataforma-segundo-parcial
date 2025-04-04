import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreenMovies from "../screens/HomeScreenMovie";
import DetailsScreenMovie from "../screens/DetailsScreenMovie";
const Stack = createNativeStackNavigator();
import ReseñaScreenMovie from "../screens/ReseñaScreen";
import LoginScreenMovie from "../screens/LoginScreen";
import SignUpScreenMovie from "../screens/SignUpScreen";
import EditScreenMovie from "../screens/EditMovieScreen";
import AddScreenMovie from "../screens/AddMovieScreen";
import ResultsScreenMovie from "../screens/MovieResultsScreen";

/*

<Stack.Screen name='Add' component={AddScreenMovie}/>
<Stack.Screen name='Results' component={ResultsScreenMovie}/>*/

export default function NavigationMovie(){
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name='Movies' component={HomeScreenMovies}/>
            <Stack.Screen name='MovieDetail' component={DetailsScreenMovie}/>
            <Stack.Screen name='Reseña' component={ReseñaScreenMovie}/>
            <Stack.Screen name='Login' component={LoginScreenMovie}/>
            <Stack.Screen name='SignUp' component={SignUpScreenMovie}/>
            <Stack.Screen name='Edit' component={EditScreenMovie}/>
            
        </Stack.Navigator>
    )
}

