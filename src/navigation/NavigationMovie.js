import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreenMovies from "../screens/HomeScreenMovie";
import DetailsScreenMovie from "../screens/DetailsScreenMovie";
const Stack = createNativeStackNavigator();
import ReseñaScreenMovie from "../screens/ReseñaScreen";

export default function NavigationMovie(){
    return(
        <Stack.Navigator initialRouteName="Movies">
            <Stack.Screen name='Movies' component={HomeScreenMovies}/>
            <Stack.Screen name='MovieDetail' component={DetailsScreenMovie}/>
            <Stack.Screen name='Reseña' component={ReseñaScreenMovie}/>
        </Stack.Navigator>
    )
}

