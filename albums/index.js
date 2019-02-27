/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// import a lib to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';   //import destructings
import Header from './src/components/Header'; //since file is js you dont need .js extension
import AlbumList from './src/components/AlbumList';

// create a component (JSX- writes react components - javascript extension)
// const App = () => { 
//     return (
//         <Text>Some Text</Text>

//     );
// };

const App = () => (
    <View>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
    
);

//render it to the device
AppRegistry.registerComponent('albums', () => App);
