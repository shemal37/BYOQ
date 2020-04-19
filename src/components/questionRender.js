import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {Button} from 'react-native-elements';

const Question = (props) => {
    return(
        <>
        <View >
            <Text>  
                {
                props.games.map((item) => {
                    if(item.name === props.questionId) {
                       return <Text>Hello!</Text>
                    }
                })
                }
            </Text>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    button: {
        padding: 5, 
        margin: 13,
        backgroundColor:'floralwhite',
        borderWidth: .5,
        borderRadius: 6,
    },
    headingContainer:{
        color:'darkcyan', 
        fontSize: 30, 
        margin: 20,
        fontWeight: 'bold'
      },
})

export default Question;