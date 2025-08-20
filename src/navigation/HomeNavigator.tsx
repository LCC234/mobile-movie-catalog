import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import MovieDetailsScreen from '../pages/moviedetails/MoiveDetails';
import HomeScreen from '../pages/home/HomeScreen';

export const HOME = "Home";
export const MOVIE_DETAILS = "MovieDetails";

export type HomeStackParamList = {
    [HOME]: {};
    [MOVIE_DETAILS]: { movieId: string };
}; 

const HomeNavigator = () => {
    const Stack = createStackNavigator<HomeStackParamList>();

    return (
        <Stack.Navigator>
            <Stack.Screen name={HOME} component={HomeScreen} />
            <Stack.Screen name={MOVIE_DETAILS} component={MovieDetailsScreen} />
        </Stack.Navigator>
    );
}

export default HomeNavigator;