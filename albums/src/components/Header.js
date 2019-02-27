//import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';


//make a component
const Header = (props) => {  //same as file name
    const { textStyle, viewStyle } = styles; //destructing

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>    
            
    );
};


//styles

const styles = {
    viewStyle: {
        backgroundColor: '#4286f4',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000', //ios 
        shadowOffset: { width: 0, height: 20 }, //ios 
        shadowOpacity: 100, //ios 
        elevatio: 2, 
        position: 'relative'        
    },
    textStyle: {
        fontSize: 20,
        color: '#F8F8F8',
        fontWeight: 'bold'
    }
};

//make the component available to other parts of the app
export default Header;

