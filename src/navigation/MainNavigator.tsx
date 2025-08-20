import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import React from 'react';
import HomeNavigator, { HomeStackParamList } from './HomeNavigator';


const MainNavContainer = () => {
    const navRef = React.useRef<NavigationContainerRef<HomeStackParamList>>(null);
    
    return (
        <NavigationContainer ref={navRef}>
            <HomeNavigator />
        </NavigationContainer>
    );
}

export default MainNavContainer;